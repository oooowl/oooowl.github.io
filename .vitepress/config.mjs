import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人简历",
  description: "Personal Resume",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "项目展示", link: "/project/intro" },
      { text: "项目统计", link: "/chart" },
    ],

    sidebar: [
      {
        text: "简介",
        link: "/project/intro",
      },
      {
        text: "项目展示",
        items: [
          { text: "赫德双语学校官网", link: "/project/hdschool" },
          { text: "上海零动官网", link: "/project/zp" },
          { text: "375Labs官网", link: "/project/375labs" },
          { text: "degis - DeFi", link: "/project/degis" },
          { text: "degis - NFT", link: "/project/degis-nft" },
          { text: "furion - NFT Dapps", link: "/project/furion" },
          { text: "deSuvery - web3问卷平台", link: "/project/desurvey" },
          { text: "理想花园 - 物联网小程序", link: "/project/garden" },
          { text: "3D 建模编辑器", link: "/project/3d" },
        ],
      },
      {
        text: "项目统计",
        link: "/chart",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/oooowl" }],
  },
});
