const fs = require('fs');
const path = require('path');


/**
 * 读取指定目录的指定类型的文件
 * folderPath:指定文件目录
 * extension:指定文件类型,即png,jpg等
 * 函数返回一个数组内是所有文件的名称
 */
let ac = []

function readdir(folderPath, extension) {
    folderPath = path.join(__dirname, '..' + folderPath)
    let we = fs.readdirSync(folderPath)
    we.forEach(file => {
        if (path.extname(file) === `.${extension}`) {
            // ac.push(file)
            ac = [file]
            // return file
        }
    });
    return ac
}

module.exports = readdir