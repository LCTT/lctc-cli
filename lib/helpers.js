var fse = require("fs-extra");
var fs = require("fs");
var file = require("./template")
var createFile = require('create-file');
var colors = require('colors');
var emoji = require('node-emoji')


var print_screen = function(obj){
    // 拼接文件名
    filename_with_ext =  obj.filename + ".md";
    file_path = obj.dir + "/" + obj.filename + "/";

    // 输出完成信号
    console.log("===============".green);
    // 这里在中间加的 "   " 是为了补偿 Emoji 的占位，实现较好的效果。
    console.log("  Status : ".green + emoji.get('white_check_mark')+"  "+"Collect Done!".white );
    console.log("Filename : ".green + emoji.get("file_folder")+"  "+filename_with_ext.white)
    console.log("FilePath : ".green + emoji.get("card_file_box")+"  "+file_path.white)
    console.log("===============".green)
}

module.exports.createFile = function(obj){
    
    // 拼接完整文件名： [站点URL] / 文件名 / 文件名.md
    filename = obj.dir + "/" + obj.filename + "/" + obj.filename + ".md";
    // 确保目录存在，如果不存在则创建
    fse.ensureDirSync(obj.dir+"/"+obj.filename)
    // 检测文件是否存在
    fs.exists(filename,function(exists){
        
        if(exists){
            //如果存在则执行写入
            fs.writeFile(filename, file.tempalte(obj), function(err) {
                if(err) {
                    return console.log(err);
                }
                // 写入成功后输出
                print_screen(obj)
            }); 
        }else{
            // 如果文件不存在则创建文件，并写入内容
            createFile(filename,file.tempalte(obj),function(error){
                if(error){

                }else{
                    print_screen(obj)  
                }
            })
        }
    })
}
