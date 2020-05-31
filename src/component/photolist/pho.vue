<template>
	<div>
		<div id="slider" class="mui-slider ">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item', item.id==0?'mui-active':'']" v-for="item in cates"
					 :key="item.id" @click="getPho(item.id)">
						{{item.title}}
					</a>
				
				</div>
			</div>
		
		</div>
		<!-- 图片列表区域 -->
		<ul>
			<router-link v-for = "item in list" :key="item.id" :to="'/home/photolist/'+item.id" tag="li">
				<img v-lazy="item.img_url">
			</router-link>
		</ul>
	</div>
</template>

<script>
	import mui from '../../../lib/mui/js/mui.js'
	//初始化滑动控件
	
	export default{
		data(){
			return{
				cates: [],//所有分类
				list: []//图片列表
			}
		},
		created(){
			this.getAllCategory()
			this.getPho(0)
		},
		mounted(){
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005 //flick 减速系数，越大滚动速度越慢，滚动距离越小，默认0.0006
			});
		},
		methods:{
			getAllCategory(){
				this.$http.get('api/getimgcategory').then(rs =>{
					if(rs.body.status === 0){
						rs.body.message.unshift({title: '全部',id: 0})
						this.cates = rs.body.message;
					}
				})
			},
			getPho(cateId){
				this.$http.get('api/getimages/' +cateId).then(rs=>{
					if(rs.body.status === 0){
						this.list = rs.body.message
					}
				})
			}
		},
		props:['id']
	}
</script>

<style scoped="scoped">
	*{
		touch-action: pan-y;
	}
	
	img[lazy="loading"]{
		width: 40px;
		height: 300px;
		margin: auto;
	}
</style>
