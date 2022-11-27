import type { Config } from './types';
import { castArray } from 'vtils';
import { fetchInterfaceById, fetchProject } from './requestYapiData';
import { filterHandler } from './utils/common';

export type YapiUrlAnalysisResult = Config & {
  parseResultList?: { projectId: number | null; catId: number | null; interfaceId: number | null }[];
};

/**
 * 解析yapi的url，生成新的配置
 * @param config
 * @returns
 */
export const yapiUrlParser = async (config: Config): Promise<YapiUrlAnalysisResult> => {
  const { yapiUrlList, filter, projects = [] } = config;
  const urls = castArray(yapiUrlList);
  const results: Record<
    number,
    {
      catIds: Map<number, Set<number>>;
    }
  > = {};
  const parseResultList: YapiUrlAnalysisResult['parseResultList'] = [];

  // `http://yapi.int.medlinker.com/project/279/interface/api => 项目id：279`
  // `http://yapi.int.medlinker.com/project/279/interface/api/cat_1061 =>项目id:279、分类id:1061`
  // `http://yapi.int.medlinker.com/project/279/interface/api/19343 => 项目id:279、接口id: 19343`
  if (urls.length) {
    const projectsConfigs = [...castArray(projects)];
    // 补全projecId
    await Promise.all(
      projectsConfigs.map(async (p, index) => {
        if (!p.projectId) {
          const info = await fetchProject({
            ...p,
            ...config
          });
          projectsConfigs[index].projectId = info._id;
        }
      })
    );

    await Promise.all(
      urls.map(async url => {
        const projectMatches = url.match(/project\/(\d+)\/interface/);
        const projectId = projectMatches ? Number(projectMatches[1]) : null;
        const catMatches = url.match(/\/interface\/api\/cat_(\d+)($|\?)/);
        const catId = catMatches ? Number(catMatches[1]) : null;
        const interfaceMatches = url.match(/\/interface\/api\/(\d+)($|\?)/);
        const interfaceId = interfaceMatches ? Number(interfaceMatches[1]) : null;
        parseResultList.push({
          projectId,
          catId,
          interfaceId
        });

        const matchedProjectConfig = projectsConfigs.find(p => p.projectId === projectId);
        if (projectId) {
          if (!results[projectId]) {
            results[projectId] = {
              catIds: new Map()
            };
          }

          if (interfaceId) {
            const res = await fetchInterfaceById(interfaceId, {
              ...config,
              ...matchedProjectConfig
            });
            if (results[projectId].catIds.has(res.catid)) {
              results[projectId].catIds.get(res.catid)?.add(interfaceId);
            } else {
              results[projectId].catIds.set(res.catid, new Set([interfaceId]));
            }
          }

          if (catId && !interfaceId) {
            if (results[projectId].catIds.has(catId)) results[projectId].catIds.get(catId)?.add(-1);
            else results[projectId].catIds.set(catId, new Set([-1]));
          }
          // 如果同时没有分类和接口，则表示全量生成项目下的接口
          if (!interfaceId && !catId) {
            results[projectId].catIds.set(-1, new Set([-1]));
          }
        }
      })
    );
    await Promise.all(
      Object.keys(results).map(async k => {
        const { catIds } = results[Number(k)];
        const pId = Number(k);
        const cIds = Array.from(catIds.keys());

        let index = projectsConfigs.findIndex(i => i.projectId === pId);
        if (index === -1) {
          projectsConfigs.push({
            projectId: pId
          });
          index = projectsConfigs.length - 1;
        }
        const item = projectsConfigs[index];

        if (cIds.includes(-1)) {
          // 有-1的cat，则表示有全量的项目生成
          item.categories = [];
          return;
        }

        cIds.forEach(cid => {
          const iIds = Array.from(catIds.get(cid) || []);
          // 包含-1则，则表示有cat全量生成
          const catSetIndex = item.categories?.findIndex(i => i.id === cid) ?? -1;
          const catSet = item.categories?.[catSetIndex];
          if (!catSet) {
            if (projectsConfigs[index].categories === undefined) {
              projectsConfigs[index].categories = [];
            }
            projectsConfigs[index].categories!.push({
              id: cid,
              filter: iIds.includes(-1)
                ? undefined
                : function (path: string, id?: number) {
                    if (filter && filterHandler(filter)(path, id)) {
                      return true;
                    }
                    if (iIds.length && !iIds.includes(id || 0)) {
                      return false;
                    }
                    return true;
                  }
            });
          } else {
            const fFilter = catSet.filter || filter;
            item.categories![catSetIndex].filter = iIds.includes(-1)
              ? undefined
              : (path: string, id?: number) => {
                  if (fFilter && filterHandler(fFilter)(path, id)) {
                    return true;
                  }
                  if (iIds.length && !iIds.includes(id || 0)) {
                    return false;
                  }
                  return true;
                };
          }
        });
      })
    );

    return {
      ...config,
      projects: projectsConfigs,
      parseResultList
    };
  }

  console.log(11111);

  return config;
};
