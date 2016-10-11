/*
* @Author: Administrator
* @Date:   2016-10-02 23:43:27
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-10 10:04:21
* @function:加载route
*/

'use strict';
import fs from 'fs';
import path from 'path';

const addMapping = (router,ctrlMap)=>{
	Object.keys(ctrlMap).forEach((key)=>{
		const method = key.split(' ')[0].toUpperCase(),
			  url = key.split(' ')[1];
		switch(method){
			case 'GET':
				router.get(url,ctrlMap[key]);
				break;
			case 'POST':
				router.post(url,ctrlMap[key]);
				break;
			case 'PUT':
				router.put(url,ctrlMap[key]);
				break;
			case 'DELETE':
				router.delete(url,ctrlMap[key]);
				break;
			default:
				break;
		}
		
	})
}

const addController = (router,dirpath)=>{
	fs.readdir(dirpath,(err,files)=>{
		(function next(i){
			if(i<files.length){
				let pathname = path.resolve(dirpath,files[i]);
				fs.stat(pathname,(err,stats)=>{
					if(stats.isDirectory()){
						addController(router,pathname);
						next(i+1);
					}else{
						if(pathname.endsWith('js')){
							const ctrlMap = require(pathname)['default'];
							addMapping(router,ctrlMap)
						}
						next(i+1);
					}
				})
			}
		})(0);
	});
}

export default addController;
