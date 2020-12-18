/**
 * 描述：入口文件
 * 作者：Josef He
 * 日期：2020-12-17 21:45
 */

import "reflect-metadata";
import { User } from "./entity/User";
import { createConnection } from "typeorm";

const bodyParser = require('body-parser'); // 引入body-parser模块
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(bodyParser.json()); // 解析json数据格式
app.use(bodyParser.urlencoded({extended: true})); // 解析form表单提交的数据application/x-www-form-urlencoded
app.use(cors()); // 注入cors模块解决跨域
//app.use('/', routes);

// 监听8088端口
app.listen(8088, () => { 
	console.log('服务已启动 http://localhost:8088');
})

createConnection()
  .then(async (connection) => {
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
	await connection.manager.save(user);
	
	const users = await connection.manager.find(User);
	
	connection.close();
  })
  .catch((error) => console.dir(error));
