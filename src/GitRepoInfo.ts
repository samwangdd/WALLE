import simpleGit, { LogResult, SimpleGit, DiffResult } from 'simple-git';
import fs from 'fs-extra';
import dayjs from 'dayjs';
import * as log from './utils/console';

export interface GitRepoInfoProps {
  gitRepoPath?: string;
}
class GitRepoInfo {
  public gitRepoPath: string;

  public gitInstance: SimpleGit;

  constructor(props: GitRepoInfoProps) {
    const { gitRepoPath } = props;
    this.gitRepoPath = gitRepoPath || process.cwd();
    this.gitInstance = this.initInstance();
  }

  initInstance(): SimpleGit {
    return simpleGit(this.gitRepoPath);
  }

  /**
   * 获取log日志
   * @returns
   */
  async logs(): Promise<LogResult> {
    const result = await this.gitInstance.log();
    return result;
  }

  /**
   * 获取当前分支
   * @returns
   */
  async branch(): Promise<string> {
    const { current } = await this.gitInstance.branch();
    return current;
  }

  /**
   * 获取距离对应commit的文件变更
   * @param commitId
   * @returns
   */
  async diffSummary(commitId?: string): Promise<DiffResult> {
    const result = await this.gitInstance.diffSummary(commitId || '');
    return result;
  }

  /**
   * git注释信息
   * @returns
   */
  async gitNotesContent(): Promise<string> {
    const branch = await this.branch();
    const { latest, all = [] } = await this.logs();
    return `
    /**
     * Created By api-typescript
     * https://alidocs.dingtalk.com/i/team/dN0G7AD82xAq4XWY/docs/dN0G78qlBL1o7zWY#
     *
     * repo: ${this.gitRepoPath}
     * branch: ${branch}
     * commitId: ${latest?.hash || all[0]?.hash || ''}
     */
    `;
  }
}

export default GitRepoInfo;
