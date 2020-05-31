import VueRouter from 'vue-router'
import home from './component/tabbar/Home.vue'
import member from './component/tabbar/Member.vue'
import search from './component/tabbar/Search.vue'
import shopcar from './component/tabbar/Shopcar.vue'
import news from './component/news/NewsList.vue'
import newsinfo from './component/news/NewsInfo.vue'
import pho from './component/photolist/pho.vue'
import phoinfo from './component/photolist/phoinfo.vue'
var router = new VueRouter({
	routes:[
		{path:'/', redirect:'/home'},
		{path:'/home', component: home},
		{path:'/member',component: member},
		{path:'/search',component: search},
		{path:'/shopcar',component: shopcar},
		{path:'/home/news',component: news},
		{path:'/home/newsinfo/:id',component: newsinfo},
		{path:'/home/photolist',component:pho},
		{path:'/home/photolist/:id', component: phoinfo}
	],
	linkActiveClass: 'mui-active' //覆盖默认的类,默认的叫做router-link-active
})


export default router