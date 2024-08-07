---
title: 软件配置
date: 2024-06-06 10:20:08
order: 2
---

## 配置 Windows Terminal

::: tip 前提
在微软商店下载软件：`Windows Terminal`、`PowerShell`、`oh my posh`
:::

- 查看配置文件位置：`$PROFILE`
- 打开配置文件：`code $PROFILE`
- 在生成的文件中写入以下配置并保存

```sh
oh-my-posh init pwsh --config 'C:/Users/zhang/AppData/Local/Programs/oh-my-posh/themes/material.omp.json' | Invoke-Expression
```

- 如果出现错误，请在 powershell 管理员权限下运行以下命令

```sh
set-ExecutionPolicy RemoteSigned
```

## nvm 安装

nvm Windows 下载地址：https://github.com/coreybutler/nvm-windows

安装步骤：

- 下载 nvm-setup，然后点击 nvm-setup.exe 软件进行安装即可
- 第一个配置的是 nvm 安装路径
- 第二个配置的是 node 安装路径，其实它就是一个快捷方式，指向 nvm 中安装的真实 node 版本
- 最后修改 nvm settings 文件，追加以下代码

```
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
```

### 安装 nodejs

```sh
# 查看 nodejs 可用的版本号
nvm list available
# 安装指定的 nodejs 版本
nvm install 16.18.0
# 切换 nodejs 版本（偶数版本为稳定版）
nvm use 16.18.0
# 查看 node 版本
nvm ls

# 安装 nrm 并切换为 taobao 镜像
npm install nrm -g
nrm ls
nrm use taobao
nrm test

# 安装 rimraf，用于删除 node_modules
npm install rimraf -g
rimraf node_modules

# 清除 npm 缓存
npm cache clean --force

# 查看 nodejs 版本
node -v

# 升级 npm
npm install npm -g

# Q: npm无法加载文件，因为在此系统禁止执行脚本
# A: 改变执行策略更改为 RemoteSigned（右键 win 图标，打开 Windows PowerShell 管理员）
set-ExecutionPolicy RemoteSigned
# 查看执行策略
get-ExecutionPolicy
```

### 配置全局 npm

- 在 nodejs 安装路径下新建两个文件夹：`node_global` 和 `node_cache`
- 并将路径加入到系统 path 中 `C:\Program Files\nodejs\node_global`

```sh
npm config set prefix "C:\Program Files\nodejs\node_global"
npm config set cache "C:\Program Files\nodejs\node_cache"
```

### pnpm 相关设置

```sh
# 安装 pnpm
npm install pnpm -g

# pnpm 版本
pnpm --version

# pnpm 全局仓库路径(类似 .git 仓库)
pnpm config set store-dir "C:/Program Files/pnpm/.pnpm-store"

# pnpm 全局 bin 路径
pnpm config set global-bin-dir "C:/Program Files/nodejs/node_global"

# pnpm 全局安装路径
pnpm config set global-dir "C:/Program Files/pnpm/pnpm-global"

# pnpm 全局缓存路径
pnpm config set cache-dir "C:/Program Files/pnpm/cache"

# pnpm 创建 pnpm-state.json 文件的目录
pnpm config set state-dir "C:/Program Files/pnpm"
```

## sublime text 破解

- 使用浏览器打开 [hexed.it](https://hexed.it/)
- 点击“打开文件”，选择 sublime text 安装目录中的 "sublime_text.exe"
- 在搜索框中输入 `807805000f94c1`，找到后，替换为 `c64005014885c9`
- 点击“另存为”，保存文件到本地，文件名设定为 sublime_text.exe

package Control 需要下载的插件：`ChineseLocalizations`、`Pretty JSON`

::: code-group

```json [sublime-settings]
{
  "ignored_packages": ["Vintage"],
  "font_face": "微软雅黑",
  "font_size": 20,
  "tab_size": 2,
  "save_on_focus_lost": true
}
```

```json [sublime-keymap]
[{ "keys": ["ctrl+shift+j"], "command": "pretty_json" }]
```

```json [Pretty JSON.sublime-settings]
{
  "indent": 2
}
```

:::

## Git 安装配置

```sh
# 配置用户信息
git config --global user.name "zhanghy"
git config --global user.email "zhanghy0720@gmail.com"

# 生成 ssh 公钥私钥，并将公钥添加到 Github
ssh-keygen -t rsa -C "zhanghy0720@gmail.com"

# 测试 ssh 连接：验证公匙，初次设置需要输入 yes
ssh -T git@github.com

# 如果输出以下内容，即可说明测试连接成功
# Hi username! You've successfully authenticated, but Github does not provide shell access.

# 修改默认分支名
git config --global init.defaultBranch main

# 获取git config列表
git config --list

# 设置 git 走 clash 代理
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy https://127.0.0.1:7890
```

## Windows 配置 wsl2 和 Ubuntu

在管理员模式下打开 PowerShell，然后输入 `wsl --install` 命令。等待命令执行完毕，重启计算机。

- 配置参考网址：https://learn.microsoft.com/zh-cn/windows/wsl/install
- 检查 wsl 版本：`wsl -l -v`

## Windows 系统中安装两个 MySQL

> 前提：在本地安装了 MySQL8 之后，还想安装 MySQL5.7

- 到 [MySQL 官网](https://downloads.mysql.com/archives/community/) 下载 MySQL5.7 的 zip 压缩包（这里使用 mysql-5.7.44 为例）
- 把安装包解压并放到该目录：D:/software/MySQL/mysql-5.7.44
- 将 MySQL8 的相关服务停掉，并将 D:/software/MySQL/mysql-5.7.44/bin 路径添加到环境变量 path 中
- 在 MySQL5.7 的安装路径下创建 `my.ini` 文件
- 进入到 MySQL 安装目录的 bin 目录下，并以**管理员身份**打开 cmd

```sh
C:\Windows\system32>d:
D:\software\MySQL\mysql-5.7.44>cd bin
```

- 在控制台输入以下命令获取生成的密码：A temporary password is generated for root@localhost: `;f.nmb1ttmaI`

```sh
mysqld --defaults-file=D:/software/MySQL/mysql-5.7.44/my.ini --initialize --console
```

- 然后再执行以下命令，设置 MySQL5.7 的相关服务

```sh
mysqld install MySQL5.7.44 --defaults-file="D:/software/MySQL/mysql-5.7.44/my.ini"
```

- 打开注册表 [[win]] + [[R]] → `regedit`，查找 "计算机\HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\MySQL5.7.44"，并修改 `ImagePath` 中的数值数据

```
"D:/software/MySQL/mysql-5.7.44/bin/mysqld.exe" --defaults-file="D:/software/MySQL/mysql-5.7.44/my.ini" MySQL5.7.44
```

- 在任务管理器中开启 MySQL5.7.44 服务之后，此时在 CMD 中输入命令，就可以使用临时密码进行登录 MySQL 了

```
mysql -uroot -P3307 -p;f.nmb1ttmaI
```

- 修改 MySQL 密码

```
set password for root@localhost=password('123456');
```

::: code-group

```ini [my.ini]
[mysql]
# 设置MySQL客户端默认字符集
default-character-set=utf8

[mysqld]
# 设置3307端口
port=3307
# 设置MySQL的安装目录
basedir=D:/software/MySQL/mysql-5.7.44
# 设置MySQL的数据存放目录
datadir=D:/software/MySQL/mysql-5.7.44/data
# 允许最大连接数
max_connections=200
# 服务器使用的字符集默认为8比特编码的lantin1字符集
character-set-server=utf8
# 创建新表时使用的默认存储引擎
default-storage-engine=INNODB
```

```txt [console]
D:\software\MySQL\mysql-5.7.44\bin>mysqld --defaults-file=D:/software/MySQL/mysql-5.7.44/my.ini --initialize --console
2024-06-25T11:16:06.005604Z 0 [Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).
2024-06-25T11:16:06.546090Z 0 [Warning] InnoDB: New log files created, LSN=45790
2024-06-25T11:16:06.621413Z 0 [Warning] InnoDB: Creating foreign key constraint system tables.
2024-06-25T11:16:06.710195Z 0 [Warning] No existing UUID has been found, so we assume that this is the first time that this server has been started. Generating a new UUID: 512536cf-32e4-11ef-a76d-54e1ade5fd76.
2024-06-25T11:16:06.713987Z 0 [Warning] Gtid table is not ready to be used. Table 'mysql.gtid_executed' cannot be opened.
2024-06-25T11:16:07.414204Z 0 [Warning] A deprecated TLS version TLSv1 is enabled. Please use TLSv1.2 or higher.
2024-06-25T11:16:07.414530Z 0 [Warning] A deprecated TLS version TLSv1.1 is enabled. Please use TLSv1.2 or higher.
2024-06-25T11:16:07.419115Z 0 [Warning] CA certificate ca.pem is self signed.
2024-06-25T11:16:07.793312Z 1 [Note] A temporary password is generated for root@localhost: ;f.nmb1ttmaI
```

:::

## yt-dlp 视频下载

- 安装 [yt-dlp](https://github.com/yt-dlp/yt-dlp)
- 安装 [ffmpeg](https://ffmpeg.org/) - Windows builds by BtbN
- 在环境变量 path 中添加 `yt-dlp`、`ffmpeg` 位置变量

```
D:\software\yt-dlp
D:\software\yt-dlp\ffmpeg\bin
```

- 添加配置文件 `yt-dlp.conf`，文件内容如下：

```
# 设置代理
--proxy 127.0.0.1:7890

# 输出格式
-o '%(title)s.%(ext)s'
```

## Figma 教育邮箱申请

https://www.youtube.com/watch?v=vwscp3ktZ_c

## VSCode 智能标点

```
# path：C:\Users\zhang\AppData\Local\Programs\Microsoft VS Code\resources\app\extensions\markdown-basics

# language-configuration.json - autoClosingPairs
,{"open":"“","close":"”"},{"open":"【","close":"】"},{"open":"《","close":"》"},{"open":"（","close":"）"},{"open":"`","close":"`"}
```

## WPS Word 文档模板

::: tabs
== 页面设置
页面设置：页边距的要求为，其余设置采取系统默认设置。

- 上（T）：2.54 cm
- 下（B）：2.54 cm
- 左（L）：2.5 cm
- 右（R）：2.0 cm

== 页眉页脚

- 页眉设置：5 号宋体，居中
- 页脚设置：编写页码，小 5 号宋体，居中。摘要、目录部分的页码用罗马数字（Ⅰ,Ⅱ,Ⅲ,Ⅳ...）单独编排，正文以后的页码用阿拉伯数字（1,2,3，...）编排。
- 书写设置：标题中文用黑体，正文中文用宋体，英文及阿拉伯数字为 Times New Roman。

== 封面设置
封面设置：

- 文章题目：28 号黑体字，加粗，居中。
- 副标题：居中排印在论文题名下，20 号黑体字，加粗，副题名前加特殊符号中“长划线”。
- 作者、提交日期：文章题目下隔六行，依次排印在文章题目下，各占一行，距左端空 5 格，名称后用“：”， 20 号黑体字，加粗，内容下需要加下划线，内容置于下划线中部，两端对齐。

== 摘要目录

- 摘要设置：居中，2 号宋体，加粗。
- 摘要内容：隔行打印摘要的正文部分，为小 4 号宋体。
- 关键词：摘要下隔一行，左端顶格，小 4 号黑体，后加“：”。
- 关键词内容：直接放在“：”后，词间用“；”，小 4 号宋体。关键词如需转行应同第一个关键词对齐（空 4 格）；关键词一般列出 3 ～ 5 个，最后一个关键词后不加任何标点符号。
- 目录设置：居中，2 号宋体，加粗。然后隔行打印目录的内容，目录中一级题序及标题用小 4 号黑体，其余用小 4 号宋体，两端对齐。

== 正文设置

- 正文中应有论文题目，用小三号黑体，居中。
- 正文内容总体要求：按照自然段依次排列，每段起行空两格。小四号宋体，1.5 倍行距。
- 段落设置：取消“如果定义了文档网格，则与网格对齐（W）”选项，采用多倍行距，行距设置值为 1.5 倍。

== 正文标题

- 一级标题：四号黑体
- 二级标题：四号黑体
- 三级标题：小四号黑体
- 正文：小四号宋体

```
# 层次代码
一、××××
（一）××××
1．××××
（1）××××
```

== 附录文献

- 附录：序号采用“附录 1”、“附录 2”等，附录内容编排格式参照正文。
- 参考文献：置于论文正文之后，另起一页。四号黑体，居中，格式同一级标题。参考文献内容：使用“[ ]”的序号依次排列。小四号宋体字，两端对齐，悬挂缩进 2 字符
- 注释：注释是对论文正文中某一特定内容的进一步解释、补充说明或引文。采用脚注形式，注释用加圈数字标注（如 ①②…）。序号按页分别编号，不采用通篇文章统一编号方式。具体结构格式同参考文献中引文格式。五号宋体。

:::
