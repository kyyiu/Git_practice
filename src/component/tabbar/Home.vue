<template>
	<div>
		<!-- 轮播图区域 -->
		<mt-swipe :auto="3000">
			<mt-swipe-item v-for="item in lunbotuList" :key="item.id">
				<img :src="item.img">
			</mt-swipe-item>
		</mt-swipe>
		
		<ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
		            <span class="mui-icon mui-icon-home"></span>
		            <div class="mui-media-body">Home</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		            <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		            <div class="mui-media-body">Email</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link  to="">
		            <span class="mui-icon mui-icon-chatbubble"></span>
		            <div class="mui-media-body">Chat</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
		            <span class="mui-icon mui-icon-location"></span>
		            <div class="mui-media-body">location</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
		            <span class="mui-icon mui-icon-search"></span>
		            <div class="mui-media-body">Search</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
		            <span class="mui-icon mui-icon-phone"></span>
		            <div class="mui-media-body">Phone</div></router-link></li>
		</ul> 
	</div>
</template>

<script>
	import { Toast } from 'mint-ui'
	export default {
		data(){
			return{
				lunbotuList: []
			};
		},
		created(){
			console.log(1)
			this.getLunbotu()
		},
		methods:{
			getLunbotu(){
				this.$http.get("api/getlunbo").then(rs => {
					this.lunbotuList = rs.body.message
					this.lunbotuList[1].img = this.lunbotuList[1].img.replace('1.','')
				})
			}
		}
		
	}
</script>

<style scoped="scoped">
	.mint-swipe{
		height: 100px;
	}
	.mint-swipe-item{
		background-color: skyblue;
	}
	.mint-swipe-item img{
		width: 100%;
		height: 100%;
	}
	.mui-grid-view.mui-grid-9{
		background-color: #FFFFFF;
		border: none;
	}
	.mui-table-view-cell{
		border: none !important;
	}
</style>
