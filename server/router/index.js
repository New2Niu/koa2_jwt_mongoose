/*
* @Author: Administrator
* @Date:   2016-10-02 16:58:30
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-02 17:43:24
*/

'use strict';

import koaRouter from 'koa-router';
import jwt from 'jsonwebtoken';

const router = koaRouter();

/**
 * 登录
 * @param  {[type]} '/login' [description]
 * @param  {[type]} async    (ctx,next     [description]
 * @return {[type]}          [description]
 */
router.get('/login',async (ctx,next)=>{
	console.log(ctx.get('Authorization'));

	let username = 'ray',
		password = '123',
		cert = 'xxx';
	const token = jwt.sign({
		name:username,
		password:password,
		exp:Math.floor(Date.now()/1000) + 24 * 60 * 60
	},cert);

	ctx.body={
		name:'ray',
		token
	};
});

router.get('/test',async (ctx,next)=>{
	console.log('getname');
	ctx.body={
		getname:'getname'
	}
});

export default router;