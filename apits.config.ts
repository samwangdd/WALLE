import { defineConfig } from "./src/helpers";

export default defineConfig({
  serverType: "yapi",
  serverUrl: "http://yapi.corp.hongsong.club/",
  projects: [
    {
      token: 'af4ce26fc88a211fcb1ddd8b96dc69bc9ebef586ee793eb290cd37339b867659', // yapi项目的token
      categories: [{ id: 7616 }], // yapi项目的分类
    },
    {
      token: 'fea472ac89837c7d39c9910915838a83c8b7dcc72e05596ad5a3a44a4f3dadb6',
      categories: [{ id: 7644 }],
      gatewayPrefix: '/gateway/user/api/',
    },
    {
      token: 'd93262cf7aa3bc578c090e52a3bb9b449075bf59c16a472875035e6dcf2bacb0',
      categories: [{ id: 7106 }],
    },
  ],
  outputFilePath: 'src/api',
  defaultRequestLib: false,
  topImportPkgTemplate: () => `import request from '@/service/api';`,
});
