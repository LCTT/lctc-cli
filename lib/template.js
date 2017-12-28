// 文件模板
module.exports.tempalte = function (obj){
    return obj.title + "\n=========\n\n\
!["+obj.title+"]("+obj.image_url+")\n\n\
Via:\n\
  - " + obj.url + "\n\
译者：[译者ID](https://github.com/译者ID)\n\
校对：[校对者ID](https://github.com/校对者ID)\n\
合成：[合成者ID](https://github.com/合成者ID)\n\
点评：[点评ID](https://github.com/点评者ID)\n\n\
本文由 [LCTT](https://github.com/LCTT/TranslateProject) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出\n\n\
[a]:http://turnoff.us/about/"
}