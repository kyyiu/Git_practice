<template>
	<div>
		<div v-html="newsinfo.content"></div>
		<comment-box :id='this.id'></comment-box>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	import comment from '../sub/comment.vue'
	export default{
		data(){
			return{
				id: this.$route.params.id,//将url地址中的id挂载到data上
				newsinfo: {}
				
			}
		},
		created(){
			this.getNewsInfo()
		},
		methods:{
			getNewsInfo(){
				this.$http.get('api/getnew/' + this.id).then(rs =>{
					
					if( rs.body.status === 0){
						this.newsinfo = rs.body.message[0]
					}else{
						Toast('deaft')
					}
				})
			}
		},
		
		components:{
			'comment-box' : comment
		},
		
	}
</script>

<style>
</style>
