/*
* @Author: LiuLei
* @Date:   2016-10-09 10:27:52
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-09 14:44:42
* @Function:连接数据库
*/

'use strict';

import {MongoClient} from 'mongodb';
import {DB_URL} from './config/config';
let db = null;
const connectDB = callback=>{
	MongoClient.connect(DB_URL,(err,mdb)=>{
		if(err){
			console.log('数据库连接失败!');
		}else{
			console.log('数据库连接成功!');
			db=mdb;
			callback();
		}
	})
}

export {connectDB,db};