/**
 * 依赖包检测，自动安装所需依赖
 */

import execa from 'execa';
import fs from 'fs-extra';
import path from 'path';
import consola from 'consola';
import prompt from 'prompts';

/**
 * 安装依赖包
 * @param packageName
 * @returns
 */
export async function installPackage(packageName: string): Promise<any> {
  const hasLocalYarn = fs.existsSync(path.resolve(process.cwd(), 'yarn.lock'));
  const command = hasLocalYarn
    ? `yarn add ${packageName}@latest -D --registry=http://nexus.medlinker.com/repository/group-npm/`
    : `npm install ${packageName}@latest -D --registry=http://nexus.medlinker.com/repository/group-npm/`;
  consola.info(`Install ${packageName}@lastest with ${hasLocalYarn ? 'yarn' : 'npm'} \n`);
  const result = await execa(command, [], {
    stdio: 'inherit',
    shell: true
  });
  return result;
}

/**
 * 检测是否安装依赖包
 * @param packageName
 * @param autoInstall
 * @returns
 */
export async function packageCheck(packageName: string): Promise<any> {
  const targetPackageJson = path.resolve(process.cwd(), 'package.json');
  try {
    const packJson: Record<string, any> = JSON.parse(fs.readFileSync(targetPackageJson, 'utf-8'));
    if (
      (!packJson.dependencies || !packJson.dependencies[packageName]) &&
      (!packJson.devDependencies || !packJson.devDependencies[packageName])
    ) {
      const answers = await prompt({
        message: `package.json中未检测到：${packageName}，是否安装?`,
        name: 'install',
        type: 'confirm',
        initial: 'y'
      });
      if (!answers.install) return;
      await installPackage(packageName);
    }
  } catch (e) {
    consola.error(e);
  }
}
