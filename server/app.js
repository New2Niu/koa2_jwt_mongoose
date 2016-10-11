/*
* @Author: Administrator
* @Date:   2016-10-01 18:59:31
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-10 09:51:38
* @ app=>连接数据库=>加载插件middleware(router=>加载route[controllers])
*/

'use strict';
import koa from 'koa';
import * as middlewares from './middlewares';
import {PORT} from './config/config';
import {connectDB} from './db';

const app = new koa();
//连接数据库
connectDB(()=>{
	//加载中间件
	for(let mw of Object.values(middlewares)){
		app.use(mw);
	}
	app.listen(PORT);
	console.log(`server started port:${PORT}`);
})
