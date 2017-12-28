var cheerio = require('cheerio');
var request = require('request');
var helper = require('./helpers');
const DOMAIN = ""; //  站点域名
const DIRNAME = "" // 目录名称

module.exports.main = function(url){
   
    request(url, function (error, response, html) {
       
        if (!error && response.statusCode == 200) {
           
            var $ = cheerio.load(html);
           
            title_text = $("element").text()
            image = $('element');
            image_src = DOMAIN + image.attr('src');
            filename = "" // 拆解出文件名

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