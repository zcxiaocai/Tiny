
//引入第三方插件
const express = require('express');
const pool = require('../pool.js');
var router = express.Router();
//解析请求
server.use(bodyParser.urlencoded({
	extended:false
}));


//导出路由
module.exports=router;