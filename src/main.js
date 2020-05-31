import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//时间插件
//npm i moment -S
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:SS"){
	return moment(dataStr).format(pattern)
})
import VueResource from 'vue-resource'
Vue.use(VueResource)
//设置请求根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
import app from './App.vue'

// import { Header, Swipe, SwipeItem,Button,Lazyload } from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name,Swipe)
// Vue.component(SwipeItem.name,SwipeItem)
// Vue.component(Button.name,Button)
// Vue.use(Lazyload)
import mUI from 'mint-ui'
Vue.use(mUI)
import 'mint-ui/lib/style.css'
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'
import router from './router.js'


var vm =new Vue({
	el: '#app',
	render: c=>c(app),
	router
})
