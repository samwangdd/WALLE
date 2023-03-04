
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
