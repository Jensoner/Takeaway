const fs = require('fs');
const path = require('path');

/**
 * 
 * @param {*} currentPath 
 * 遍历本地指定目录内所有的文件
 * currentPath:指定的目录
 * 函数返回的是一个数组,数组内是该目录内所有文件名称
 */

function traverseFolder(currentPath) {
    //拼接地址
    currentPath = path.join(__dirname, '..' + currentPath);
    //读取地址下所有的文件
    let files = fs.readdirSync(currentPath);
    return files;
}
module.exports = traverseFolder