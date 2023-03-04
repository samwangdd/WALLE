/**
 * 获取入口文件路径
 */

import path from 'path';
import { Config } from '../types/global';

export const genOutputFilePath = (config: Config, file: string) => {
  const { dir, name } = path.parse(config.outputFilePath || '');
  return path.join(dir, name, file);
};
