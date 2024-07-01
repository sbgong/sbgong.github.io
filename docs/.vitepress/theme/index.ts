import "@shikijs/vitepress-twoslash/style.css";
import "viewerjs/dist/viewer.min.css";
import type { Theme } from "vitepress";
import "vitepress-plugin-back-to-top/dist/style.css";
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import "./css/index.css";
import "./css/style.css";
import enhanceApp from "./enhanceApp";
import setup from "./setup";
import PrevNext from "../components/PrevNext.vue";
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "doc-footer-before": () => h(PrevNext),
    });
  },
  enhanceApp,
  setup,
} satisfies Theme;
