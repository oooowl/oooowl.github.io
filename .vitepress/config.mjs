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
      { text: "项目经历", link: "/project" },
      { text: "项目统计", link: "/chart" },
    ],

    sidebar: [
      {
        text: "项目经历",
        items: [{ text: "Examples", link: "/project" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/oooowl" }],
  },
});
