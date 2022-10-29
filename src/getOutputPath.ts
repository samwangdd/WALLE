/**
 * 生成入口文件
 */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import path from 'path';
import { Config } from './types';

export const getOutputFilePath = (config: Config, file: string) => {
  const { dir, name } = path.parse(config.outputFilePath || '');
  return path.join(dir, name, file);
};
