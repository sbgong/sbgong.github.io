import { generateSidebar } from "vitepress-sidebar";
import type { ThemeConfig } from "../types/ThemeConfig";
import nav from "./nav";
import search from "./search";
import sidebar from "./sidebar";
import socialLinks from "./socialLinks";
export default <ThemeConfig>{
  logo: "/images/index/ghost.gif",
  nav,
  sidebar: generateSidebar(sidebar),
  search,
  socialLinks,
  outline: [2, 4],
  outlineTitle: "目录",
  darkModeSwitchLabel: "切换夜间模式",
  lightModeSwitchTitle: "切换到白天模式",
  darkModeSwitchTitle: "切换到夜间模式",
  sidebarMenuLabel: "菜单",
  returnToTopLabel: "返回顶部",
  lastUpdatedText: "最近更新时间",
  docFooter: {
    prev: "上一页",
    next: "下一页",
  },
  editLink: {
    pattern: "https://github.com/sbgong/sbgong.github.io/edit/main/docs/:path",
    text: "在 GitHub 上编辑此页面",
  },
};
