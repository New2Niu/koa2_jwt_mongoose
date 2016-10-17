/*
* @Author: Administrator
* @Date:   2016-10-09 15:30:59
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-17 17:06:14
*/

'use strict';
import {mongoose} from '../db';
import User from '../model/User';
const getUserByName = (username)=>{
	let query = {
			name:username
		}
	return(
		User.find(query)
	)
}

export default {
	getUserByName
}