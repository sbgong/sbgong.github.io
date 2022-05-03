// 插件配置
module.exports = [
  ["fulltext-search"], // 全文搜索
  "vuepress-plugin-baidu-autopush", // 百度自动推送
  [
    "one-click-copy", // 代码块复制按钮
    {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ], // String or Array
      copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    "vuepress-plugin-zooming", // 放大图片
    {
      selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
      options: {
        bgColor: "rgba(0,0,0,0.6)",
      },
    },
  ],
  [
    "vuepress-plugin-baidu-tongji", // 百度统计
    {
      hm: "cb2eb6eefd48bbee3202a7a41f40f265",
    },
  ],
  [
    "@vuepress/last-updated", // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require("dayjs"); // https://day.js.org/
        return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
      },
    },
  ],
  [
    "md-enhance", // markdown增强
    {
      container: true,
      codegroup: true,
      footnote: true,
      mark: true,
      sub: true,
      sup: true,
    },
  ],
  ["reading-progress"], // 顶部阅读进度插件
  ["tabs"], // tab切换项
  [
    {
      name: "custom-plugins", // 自定义插件，即本地插件
      globalUIComponents: ["LastReadingPopup", "BlockToggle"],
    },
  ],
];
