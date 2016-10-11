/*
* @Author: Administrator
* @Date:   2016-10-02 16:35:05
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-08 14:50:23
* @Function:koa中间件
*/

'use strict';
import jwt from 'jsonwebtoken';
import koaCors from 'koa-cors';
import koaConvert from 'koa-convert';
import koaBodyparser from 'koa-bodyparser';
import router from '../router';
import {CERT} from '../config/config';
/**
 * 打印URL,method
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
 const printRequestMsg = async (ctx,next)=>{
	console.log(`requset url : ${ctx.url};requset method : ${ctx.method}`);
	await next();
}
/**
 * 验证token
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
 const verifyToken = async (ctx,next)=>{
	if(ctx.url==='/login'||ctx.url==='/'){
		await next();
	}else{
		let auth = ctx.get('Authorization');
		console.log(auth)
		let token = auth.split(' ')[1];
		let tokenContent;
		try{
			tokenContent = jwt.verify(token,CERT);
			console.log('tc:',tokenContent);
			await next();
		}catch(err){
			console.log('autherr:',err);
			ctx.throw(401,'invalid token');
		}
	}
}

const cors = koaConvert(koaCors({
	maxAge: 7 * 24 * 60 * 60,
	// 7 days 预请求头有效期
	credentials: true,
	methods: 'GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE',
	headers: 'Content-Type, Accept, Authorization'
}));

 const bodyparser = koaBodyparser();

 const routers = router.routes();

//注意中间件的顺序
 export {
 	cors,//允许跨域请求
 	printRequestMsg,
 	verifyToken,
 	bodyparser,
 	routers
 }