/*
* @Author: Administrator
* @Date:   2016-10-02 16:58:30
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-17 16:14:09
*/

'use strict';

import koaRouter from 'koa-router';
import addController from './addController';
import path from 'path';

const router = koaRouter();
//加载router
addController(router,path.join(__dirname,'./controllers/'));

export default router;