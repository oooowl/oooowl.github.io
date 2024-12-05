import DefaultTheme from "vitepress/theme";
import Layout from "./layout.vue";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    console.log(app);
  },
};
