/*
* @Author: LiuLei
* @Date:   2016-10-09 10:06:13
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-09 19:07:34
* @Function:登录
*/

'use strict';
import jwt from 'jsonwebtoken';
import {CERT} from '../config/config';
import userDao from '../dao/userDao';

const loginValidate = async (username,password)=>{
	try{
		let result = await userDao.getUserByName(username);
		if(result.length>0&&result[0].name===username&&result[0].password===password){
			const token = jwt.sign({
				name:username,
				password:password,
				exp:Math.floor(Date.now()/1000) + 24 * 60 * 60
			},CERT);
			return{
				username:username,
				token
			}
		}else{
			return{
				err:'用户名或密码出错!'
			}
		}
	}catch(err){
		console.log(err);
	}
}

export default {
	loginValidate
}