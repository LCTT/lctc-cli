var cheerio = require('cheerio');
var request = require('request');
var helper = require('./helpers');
const DOMAIN = "http://www.monkeyuser.com/";
const DIRNAME = "www.monkeyuser.com"
module.exports.main = function(url){
    // 使用 request 获取内容

    request(url, function (error, response, html) {
        // 判断请求状态
        if (!error && response.statusCode == 200) {
            // 加载解析器
            var $ = cheerio.load(html);
            // 提取页面元素
            title_text = $("title").text();
            image = $('div.content>p>img');
            image_src = image.attr('src');
            filename = url.split("/")[4];
            helper.createFile({
                "image_url":image_src,
                "title":title_text,
                "filename":filename,
                "dir" : DIRNAME,
                "url":url
            })
              
        }
    });
}