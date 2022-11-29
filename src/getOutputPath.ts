/**
 * 生成入口文件
 */

import path from 'path';
import { Config } from './types';

export const genOutputFilePath = (config: Config, file: string) => {
  const { dir, name } = path.parse(config.outputFilePath || '');
  return path.join(dir, name, file);
};
