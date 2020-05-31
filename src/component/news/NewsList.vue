<template>
	<div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newslist"
			:key = "item.id">
				<router-link :to="'/home/newsinfo/'+item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						{{item.title}}
						<p class='mui-ellipsis'>
							<span>发表时间： {{item.add_time | dateFormat}}</span>
							<span>点击： {{item.click}}</span>
						</p>
					</div>
				</router-link>
			</li>
			
		
		</ul>
	</div>
</template>

<script>
	import p1 from '../../images/akari.jpg'
	import { Toast} from 'mint-ui'
	export default{
		data(){
			return{
				p1: p1,
				newslist: []
			}
		},
		created(){
			this.getNewsList()
		},
		methods:{
			getNewsList (){
				this.$http.get('api/getnewslist').then(rs =>{
					if(rs.body.status===0){
						this.newslist = rs.body.message
					}else{
						Toast('defeat')
					}
				})
			}
		}
		
	}
</script>

<style scoped="scoped">
	.mui-ellipsis{
		font-size: 12px;
		display: flex;
		justify-content: space-between;
	}
</style>
