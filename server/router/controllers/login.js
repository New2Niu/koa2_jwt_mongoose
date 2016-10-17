/*
* @Author: Administrator
* @Date:   2016-10-02 23:38:27
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-17 15:47:28
*/

'use strict';
import loginService from '../../service/loginService';

const index = async (ctx,next)=>{
	ctx.body=`
		<form action='/login' method='POST'>
			<label for='username'>用户名:</label>
			<input id='username' type='text' name='username'/>
			<label for='password'>密码:</label>
			<input id='password' type='password' name='password'/>
			<button type='submit'>提交</button>
		</form>
	`
}

const login = async (ctx,next)=>{

	let username = ctx.request.body.username||'',
		password = ctx.request.body.password||'';
	let result = await loginService.loginValidate(username,password);
	console.log(result);
	ctx.body=result;
}

const test = async (ctx,next)=>{
	console.log('getname');
	ctx.body={
		getname:'getname'
	}
}

export default {
	'GET /':index,
	'POST /login':login,
	'GET /test':test
}
