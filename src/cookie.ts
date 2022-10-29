import { CookieJar } from 'tough-cookie';
import { FileCookieStore } from 'tough-cookie-file-store';
import { CookieStoreFile } from './constants';
import fs from 'fs-extra';

fs.ensureFileSync(CookieStoreFile);

export const cookieJar = new CookieJar(new FileCookieStore(CookieStoreFile));

/**
 * 检查cookie是否还存在（过期）
 * @param url
 * @returns
 */
export const checkCookie = async (url: string) => {
  return cookieJar.getCookieStringSync(url);
};

/**
 * 移除所有cookie
 */
export const clearCookie = () => {
  cookieJar.removeAllCookiesSync();
};
