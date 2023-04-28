const express = require('express');
const cors = require('cors');
const path = require('path');

const home = require('./router/resources');
const app = express().use(cors())
// 项目地址拼接A:\项目\myapp\node\name
// console.log(path.join(__dirname,'name'));
//暴露项目静态文件资源(图片资源)
// path.join(__dirname,'public')=== A:\项目\myapp\node\public
app.use(express.static(path.join(__dirname, 'public')))

app.use('/home', home)



//开启服务器,监听端口
app.listen(300, err => {
    if (!err) console.log('服务器开启成功!/r' + '127.0.0.1:80');
})