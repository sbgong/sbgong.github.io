const baidutj = require("./baidutj.js");
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ["link", { rel: "icon", href: "/img/favicon.ico" }], //favicons，资源放在public文件夹
  [
    "meta",
    {
      name: "keywords",
      content: "sbgong's blog,神臂弓博客,sbgong,神臂弓,blog,java,vue",
    },
  ],
  ["meta", { name: "theme-color", content: "#11a8cd" }], // 移动浏览器主题颜色
  ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }],
  ["meta", { name: "baidu-site-verification", content: "code-5jeE1HObOp" }],
  [
    "link",
    {
      rel: "stylesheet",
      href: "//at.alicdn.com/t/font_3114978_qe0b39no76.css",
    },
  ], // 阿里在线矢量库
  ["script", {}, baidutj], // 百度统计 js
];
