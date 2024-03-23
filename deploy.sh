#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

# deploy to github pages
# echo 'b.xugaoyi.com' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:sbgong/sbgong.github.io.git
else
  msg='来自 Github Actions 的自动部署'
  githubUrl=https://sbgong:${GITHUB_TOKEN}@github.com/sbgong/sbgong.github.io.git
  git config --global user.name "zhanghy"
  git config --global user.email "zhanghy0720@gmail.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl main:gh-pages # 推送到github gh-pages分支

# deploy to coding pages
# echo 'www.xugaoyi.com\nxugaoyi.com' > CNAME  # 自定义域名
# echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

# if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
#   codingUrl=git@e.coding.net:sbgong/blog/blog.git
# else
#   codingUrl=https://sbgong:${CODING_TOKEN}@e.coding.net/sbgong/blog/blog.git
# fi
# git add -A
# git commit -m "${msg}"
# git push -f $codingUrl master # 推送到coding

cd -
rm -rf docs/.vitepress/dist
