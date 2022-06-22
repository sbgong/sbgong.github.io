// 插件配置
module.exports = [
  "vuepress-plugin-baidu-autopush", // 百度自动推送
  ["fulltext-search"], // 全文搜索
  ["reading-progress"], // 顶部阅读进度插件
  ["tabs"], // tab切换项
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
      codegroup: true,
      footnote: true,
      mark: true,
      sub: true,
      sup: true,
    },
  ],
  // 音乐插件，官网：https://moefyit.github.io/moefy-vuepress/packages/meting.html
  [
    "meting",
    {
      // 这个 API 是不可用的，只是作为示例而已 https://music.163.com/playlist?id=2555412439&userid=1490434176
      // metingApi: 'https://music.163.com/',
      meting: {
        // 不配置该项的话不会出现全局播放器
        server: "tencent", // 音乐平台，可选值： "netease" | "tencent" | "kuwo" | "kugou" | "baidu" | "xiami"，netease 是网易云
        type: "playlist", // 资源类型（播放列表、单曲、专辑等），可选值： "song" | "album" | "artist" | "playlist"
        mid: "8475662302", // 资源 ID
        // auto: 'https://music.163.com/playlist?id=2555412439',  // 资源 url，填写后可通过资源 url 自动解析资源平台、类型、ID，上述三个选项将被覆盖（本参数仅支持 netease、tencent、xiami 三平台）
      },
      aplayer: {
        fixed: true, // 是否开启吸底模式，即自动隐藏在屏幕边框
        mini: true, // 是否开启迷你模式
        autoplay: false, // 是否开启自动播放
        theme: "#b7daff", // 设置播放器默认主题颜色
        loop: "all", // 设置播放器的播放循环模式，可选值：'all' | 'one' | 'none'
        order: "list", // 设置播放器的播放顺序模式，可选值：'list' | 'random'
        preload: "auto", // 设置音频的预加载模式，可选值：'none' | 'metadata' | 'auto'
        volume: 0.7, // 设置播放器的音量
        additionalAudios: [], // 除 Meting 解析的 audio 外额外添加的 audio，一般官方自带的就行
        mutex: true, // 是否开启互斥模式，即该播放器播放音乐后，停止其他正在播放的播放器
        lrcType: 0, // 设置 lrc 歌词解析模式，可选值：3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）
        listFolded: false, // 刚打开播放器时，是否折叠播放列表
        listMaxHeight: 250, // 设置播放列表最大高度，单位为像素
        storageName: "vuepress-plugin-meting", // 设置存储播放器设置的 localStorage key
      },
      mobile: {
        // 移动端配置
        cover: true, // 是否显示封面图，如果隐藏的话可以防止播放器遮挡移动设备上的文字内容
        lrc: true, // 是否显示歌词
      },
    },
  ],
  [
    {
      name: "custom-plugins", // 自定义插件，即本地插件
      globalUIComponents: ["LastReadingPopup", "BlockToggle", "Aplayer"],
    },
  ],
];
