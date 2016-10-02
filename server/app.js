/*
* @Author: Administrator
* @Date:   2016-10-01 18:59:31
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-02 17:35:11
*/

'use strict';
import koa from 'koa';
import * as middlewares from './middlewares';

const app = new koa();

//加载中间件
for(let mw of Object.values(middlewares)){
	app.use(mw);
}

app.listen(9090);
console.log('server started port:9090');
