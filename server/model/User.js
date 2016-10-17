/*
* @Author: Administrator
* @Date:   2016-10-17 16:53:30
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-17 16:59:49
*/

'use strict';
import {mongoose} from '../db';

let userSchema = mongoose.Schema({
	name:String,
	password:String
});

let User = mongoose.model('User',userSchema);

export default User;