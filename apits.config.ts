import { defineConfig } from "./src/helpers";

export default defineConfig({
  serverType: "yapi",
  serverUrl: "http://yapi.corp.hongsong.club/",
  projects: [
    {
      token: 'fea472ac89837c7d39c9910915838a83c8b7dcc72e05596ad5a3a44a4f3dadb6',
      gatewayPrefix: '/gateway/api/user',
      assignInterfaceProps: 'data',
      categories: [{ id: 7644, }],
    },
    {
      token: 'd93262cf7aa3bc578c090e52a3bb9b449075bf59c16a472875035e6dcf2bacb0',
      gatewayPrefix: '/gateway/api/fj-mkt',
      categories: [{ id: 7106 }],
    },
  ],
  outputFilePath: 'src/api',
  // defaultRequestLib: false,
  // topImportPkgTemplate: () => `import request from '@/service/api';`,
});
