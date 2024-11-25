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
      { text: "项目展示", link: "/info" },
      { text: "项目统计", link: "/chart" },
    ],

    sidebar: [
      {
        text: "简介",
        link: "/info",
      },
      {
        text: "项目展示",
        items: [{ text: "赫德学校", link: "/project/hdschool" }],
      },
      {
        text: "项目统计",
        link: "/chart",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/oooowl" }],
  },
});
