// 使用到另外的一个方式专门配置路由规则
var express =  require('express');
var router = express.Router(); // router对象

// 返回的router 就是一个路由器（在它的身上定义路由的规则 请求方式 +  url地址）

router.get('/1', function (req, res) {
	
	console.log( req.url );
	// console.log( req.method );

	res.end('index');

});

module.exports = router // 导出路由器