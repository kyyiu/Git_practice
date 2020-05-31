process.env.NODE_ENV = 'development';
const express = require('express')

const path = require('path')

const router1 = require('./app2')//引入其他的路由

const app = express()

app.use(express.static(path.join(__dirname,'src')))
//app.use(express.static(__dirname))

app.use(router1)//告诉 app 要使用路由器

app.listen(5000)

console.log('succ')