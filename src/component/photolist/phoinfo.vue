<template>
	<div>
		<h1>156{{phoinfo.title}}</h1>
		<p class="subtitle">
			<span>时间{{phoinfo.add_time|dateFormat}}</span>
			<span>click{{phoinfo.click}}</span>
		</p>
		<hr>
		<!-- 缩略图 -->
		
		<!-- 图片内容 -->
		<div class="content" v-html="phoinfo.content"></div>
		<!-- 评论 -->
	</div>
</template>

<script>
	export default{
		data(){
			return {
				id: this.$route.params.id,
				phoinfo : {}
			}
		},
		
		created(){
			this.getPhoInfo()
		},
		methods:{
			getPhoInfo(){
				this.$http.get('api/getimageInfo/' + this.id).then ( rs =>{
					if(rs.body.status === 0){
							this.phoinfo = rs.body.message[0]
							console.log(this.phoinfo)
					}
				})
			}
		},
		
	}
</script>

<style>
</style>
