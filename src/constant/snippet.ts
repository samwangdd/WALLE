export const YAPI_CONFIG_SNIPPET = (token: string) => `
  import { defineConfig } from 'walle';

  export default defineConfig({
    serverType: 'yapi',
    serverUrl: 'http://yapi.corp.hongsong.club/',
    projects: {
      token: '${token}', // yapi项目的token
    },
    outputFilePath: 'src/api',
  })`
