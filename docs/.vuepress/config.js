const head = require("./config/head.js");
const plugins = require("./config/plugins.js");
const themeConfig = require("./config/themeConfig.js");
const locales = require("./config/locales.js");
module.exports = {
  // theme: "vdoing", // 使用npm包主题
  theme: require.resolve("../../vdoing"), // 使用本地主题
  title: "SBGONG",
  description:
    "sbgong's blog,神臂弓博客,sbgong个人博客,sbgong,全栈工程师,java,vue",
  head,
  plugins,
  themeConfig,
  locales,
  markdown: {
    lineNumbers: true, // 显示代码块的行号
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },
  // 监听文件变化并重新构建
  extraWatchFiles: [".vuepress/config.js"],
};
