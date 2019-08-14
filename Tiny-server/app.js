// web服务器
const express = require('express');
//引入目录下的某一个模块
const Router = require('./routes/router.js');
const bodyParser = require('body-parser');
// 跨域
const cors=require("cors");
// session
const session = require("express-session");

var server = express();
//监听端口
server.listen(3000);
server.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8080"],//不能用*
    credentials:true
}));
//session配置
server.use(session({
    secret:'128位字符串',   //安全字符串
    resave:true,            //请求时的
    saveUninitialized:true,
}))
//文件托管
server.use(express.static('public'))
//解析请求
server.use(bodyParser.urlencoded({
	extended:false
}));
//使用路由器
server.use('/router',Router);