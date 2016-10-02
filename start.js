/*
* @Author: Administrator
* @Date:   2016-10-01 19:00:54
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-02 02:37:35
* @function : babel转码
*/

'use strict';

const register = require('babel-core/register');//不会对当前文件转码

register({
	presets:['stage-3','es2015']
});

require('babel-polyfill');
require('./server/app.js');