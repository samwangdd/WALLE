
export const YAPI_CONFIG_SNIPPET = (token: string) => `
  import { defineConfig } from '@hs/hs-fe-walle';

  export default defineConfig({
    serverType: 'yapi',
    serverUrl: 'http://yapi.corp.hongsong.club/',
    projects: {
      token: '${token}', // yapi项目的token
    },
    outputFilePath: 'src/api',
    defaultRequestLib: false,
    topImportPkgTemplate: () => "import request from '@/service/api';",
  })`


export const TOP_NOTE_CONTENT = (): string =>
  `
  /**
   * Created By WALLE, Please Don't Modify This File.
   * 此文件由 WALL-E 自动生成，请勿修改
   */`;


export const BUSINESS_TYPE_IMPORT = () => `import type { IHttpBusinessResponse } from '@hs/hs-fe-walle';
  `