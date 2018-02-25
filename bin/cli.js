#!/usr/bin/env node

var program = require("commander");
var colors = require('colors');
var packageinfo = require('../package.json');
var turnoff = require('../lib/turnoffus');
var monkeyuser = require("../lib/monkeyusercom");

// 输出版本号和说明
program
  .version(packageinfo.version);

// 列出目前支持的站点
program
  .command('sites') // 定义命令
  .description("List all support sites") //定义描述
  .action(() => {
    // 输出支持的网站。
    // @todo： 后续考虑将站点文件移动到一个单独的目录下，这样可以在这里通过读取文件列表来实现
    console.log("All Support Site List:\n\
    - turnoff.us\n\
    - monkeyuser.com".green);
  });

program
  .command("deal [url]") // 定义命令
  .description("Use to deal a url") //定义描述
  .action(url => {
    // 如果没有传入需要处理的 url 则作出相应的提示
    if (!url) {
      return console.log('You must give a url to deal with!!!\n'.red);
    }
    // 根据传入的 URL 判断使用哪个网站。
    // @todo： 后续考虑将站点文件移动到一个单独的目录下，这样可以在这里通过读取文件列表来实现
    // @todo: 后续考虑以更加优雅的实现来进行分发
    if (url.indexOf("turnoff.us") != -1) {
      turnoff.main(url);
    } else if (url.indexOf("monkeyuser") != -1) {
      monkeyuser.main(url);
    } else {
      console.log("This site is not support!".red);
    }

  });

// 解析参数，没有传入参数则默认打印帮助信息
program.parse(process.argv);
if (!program.args.length) program.help();
