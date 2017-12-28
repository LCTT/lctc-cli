var cheerio = require('cheerio');
var request = require('request');
var helper = require('./helpers');
const DOMAIN = "http://turnoff.us";
const DIRNAME = "turnoff.us"


module.exports.main = function(url){
    // 使用 request 获取内容

    request(url, function (error, response, html) {
        // 判断请求状态
        if (!error && response.statusCode == 200) {
            // 加载解析器
            var $ = cheerio.load(html);
            // 提取页面元素
            title_text = $("h1.post-title").text().substring(2);
            image = $('article.post-content>p>img');
            image_src = DOMAIN + image.attr('src');
            filename = url.split("/geek/")[1].split("/")[0];
            // 调取 Helper 来创建文件
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