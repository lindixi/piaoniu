
let express = require('express');
let proxy = require('http-proxy-middleware');

var app = express();
app.all('*',function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
    if(req.method=="OPTIONS"){
    	res.send(200);
    }else{
    	next();
    }
});

//let options = {
//	target:'https://m.piaoniu.com',
//	changeOrigin:true,
//	pathRewrite:{
//		'^/api':'/'
//	}
//}
//
//var exampleProxy = proxy(options);
//app.use('/api',exampleProxy);




app.use('/pnapi', proxy({
	"target": "https://m.piaoniu.com", 
	"changeOrigin": true,
	"pathRewrite":{
		"^/pnapi":"/"
	}
}));
app.listen(8000,function(){
	console.log('Server running on http://localhost:8000');
});

//
//const express = require('express');
//const app = express();
//const bodyParser = require('body-parser')
//const user = require('./router/user.js')
//const db = require('./dbconnect.js')
//const cors=require('cors')
//服务器代理
//const proxy = require('http-proxy-middleware')

//var server=https.createServer(options).listen(4000)

//请求头解决跨域
//app.all('*', function(req, res, next) {
//res.setHeader('Access-Control-Allow-Origin', '*')
//res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
//res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
//res.setHeader('Access-Control-Allow-Credentials', true)
//
//	//跨域请求CORS中的预请求
//	if(req.method == "OPTIONS") {
//		res.send(200);
//	} else {
//		next();
//	}
//});
//app.use('/dmapi', proxy({
//	"target": "https://m.moretickets.com",
//	"changeOrigin": true,
//	"pathRewrite": {
//		'^/dmapi': '/'
//	}
//})),
//app.use('/ymtapi', proxy({
//	"target": "http://m.ymatou.com",
//	"changeOrigin": true,
//	"pathRewrite": {
//		'^/ymtapi': '/'
//	}
//})),
//app.use('/mzapi', proxy({
//	"target": "http://m.maoyan.com",
//	"changeOrigin": true,
//	"pathRewrite": {
//		'^/mzapi': '/'
//	}
//})),
//
//
////post参数解析
//app.use(bodyParser.urlencoded({
//	extended: false
//}))
//app.use(bodyParser.json())
//app.use('/api/user', user)
//
//app.listen(3333, () => {
//	console.log('服务器启动')
//})