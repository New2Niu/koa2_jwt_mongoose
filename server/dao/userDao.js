/*
* @Author: Administrator
* @Date:   2016-10-09 15:30:59
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-09 19:05:25
*/

'use strict';
import {db} from '../db';
const getUserByName = (username)=>{
	return new Promise((resolve,reject)=>{
		let userCol = db.collection('user');
		let query = {
			name:username
		}
		userCol.find(query).toArray((err,result)=>{
			resolve(result);
		})
	})
}

export default {
	getUserByName
}