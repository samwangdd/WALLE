import { defineConfig } from "@hs/hs-fe-walle";

export default defineConfig({
  serverType: 'yapi',
  serverUrl: 'http://yapi.corp.hongsong.club/',
  projects: [
    // TODO: support request method map
    // {
    //   token: 'd93262cf7aa3bc578c090e52a3bb9b449075bf59c16a472875035e6dcf2bacb0',
    //   gatewayPrefix: '/gateway/api/fj-mkt',
    //   categories: [{ id: 7106 }],
    // },
    // {
    //   token: 'fea472ac89837c7d39c9910915838a83c8b7dcc72e05596ad5a3a44a4f3dadb6',
    //   gatewayPrefix: '/gateway/api/user',
    //   assignInterfaceProps: 'data',
    //   categories: [{ id: 7644 }],
    // },
    // {
    //   token: 'dd162f71110ac4c301048546a60f3bbead6e8e4ac4c880a971e3427d6e25a4a5',
    //   gatewayPrefix: '/rutbr/gateway',
    //   assignInterfaceProps: 'data',
    //   categories: [{ id: 7562 }],
    // },
    // {
    //   token: '8f0491ee029ec0336cca77b2214e8d3270f84bb9cb69b852039bdd70d4a1d11f',
    //   gatewayPrefix: '/gateway/api/media',
    //   assignInterfaceProps: 'data',
    //   categories: [{ id: 7734 }, { id: 7737 }],
    // },
    {
      token: '3ca202a8b522019790cc2aba84755057e5ff7d970333bd52c4e5507c246c6bc3',
      assignInterfaceProps: 'data',
      categories: [{ id: 7738 }],
    },
  ],
  outputFilePath: 'src/api',
  defaultRequestLib: false,
  topImportPkgTemplate: () => "import request from '@/service/api';",
});
