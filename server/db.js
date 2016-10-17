/*
* @Author: LiuLei
* @Date:   2016-10-09 10:27:52
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-17 16:43:06
* @Function:连接数据库
*/

'use strict';

import {MongoClient} from 'mongodb';
import {DB_URL} from './config/config';
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const connectDB = callback=>{
	mongoose.connect(DB_URL);
	const db = mongoose.connection;

	db.on('error',(err)=>{
		console.log('connect error:',err);
	});

	db.once('open',()=>{
		callback();
	});
}

export {connectDB,mongoose};