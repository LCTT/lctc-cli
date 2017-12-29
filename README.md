# LCTC - Linux 中国翻译组 漫画组选题工具

[![npm](https://img.shields.io/npm/dy/lctt-cli.svg?style=plastic)](https://www.npmjs.com/package/lctc-cli)
[![license](https://img.shields.io/github/license/lctt/lctc-cli.svg?style=plastic)](https://github.com/bestony/lctc-cli)
[![GitHub issues](https://img.shields.io/github/issues/lctt/lctc-cli.svg?style=plastic)](https://github.com/bestony/lctc-cli)

![](https://ws4.sinaimg.cn/large/006tNc79gy1fmwx9w6uhvj30dw0dw3ye.jpg)

一个使用 JavaScript 写成的帮助选题人员快速选题的命令行工具。

## 演示

![](https://ws2.sinaimg.cn/large/006tKfTcgy1fmwwkmdykng30mg0g1gsk.gif)


## 功能

- 输入 URL 自动将网站图片的地址等信息抓取下来，生成符合 LCTT 格式的 markdown 文件。
- 多站点支持
- 支持自定义站点引擎


## 安装

### 环境依赖

- Node 
- NPM 或 yarn

### 安装命令

在命令行中执行如下命令

```bash
npm -g install lctc-cli
```

或使用 yarn 安装

```bash
yarn global add lctc-cli
```



## 如何使用

```
  Usage: lctc [options] [command]


  Options:

    -V, --version  output the version number
    -h, --help     output usage information


  Commands:

    sites       List all support sites
    deal [url]  Use to deal a url
```
- 执行 `lctc sites` 可以查看目前支持选题的站点
- 执行 `lctc deal url` 可以处理 指定 URL 的地址，进行选题。



## 常见问题

### 兼容性

|  序号  |    操作系统及版本    | Node 版本 | 是否可用 |
| :--: | :-----------: | :-----: | :--: |
|  1   | macOS 10.13.2 | v8.9.1  |  ✅   |


### 如何申请新的站点适配？

你可以通过 [提交 issue](https://github.com/bestony/lctc-cli/issues/new) 来请求新增一个站点驱动，开发者在收到请求后，会根据具体的情况来进行排期。

### 如何为项目贡献代码

Fork 项目、添加你的代码、并提交 PR 即可。具体可以参考 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 更新日志

查看 [CHANGELOG](CHANGELOG)

## 开发团队

- HuanCheng Bai - 项目架构及初版开发 -  [Bestony](https://github.com/bestony)

## LICENSE

本项目代码基于 GPLv2 开源，具体请查看 [LICENSE.md](LICENSE.md)
