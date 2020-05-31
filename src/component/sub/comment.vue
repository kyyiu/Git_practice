<template>
	<div>
		<h2>发表评论</h2>
		<hr>
		<textarea name=""  cols="30" rows="10" v-model="msg"></textarea>
		<mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
		<div class="cmt-list">
			<div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
				<div class="cmt-title">
					第{{i+1}}楼 &nbsp;用户:{{item.user_name}} &nbsp;发表时间{{item.add_time | dateFormat}}
				</div>
				<div class="cmt-body">{{item.content}}</div>
			</div>
		</div>
		
		
		
		<mt-button type="primary" size="large" plain @click="getMore">加载更多</mt-button>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return {
				pageIndex: 1,//默认第一页数据
				comments: [],
				msg: ''
			}
		},
		created(){
			this.getComments()
		},
		methods:{
			getComments(){
				this.$http.get('api/getcomments/'+ this.id +'?pageindex=' +this.pageIndex)
				.then(rs => {
					console.log(rs.body.message)
					if(rs.body.status === 0){
						//每次获取新评论不要情况老数据
						this.comments = this.comments.concat(rs.body.message) 
					}else{
						Toast('deaf')
					}
				})
			},
			getMore(){
				this.pageIndex++
				this.getComments()
			},
			postComment(){
				//参数1：请求的rul地址
				//参数2 ：提交给服务器的数据对象{content: this.msg}
				//参数3 :提交时，表单数据格式{emulateJSON:true}
				if(this.msg.trim().length === 0){
					return Toast('empty')
				}
				this.$http.post('api/postcomment/'+ this.id,{content: this.msg.trim()},{emulateJSON:true}).then(function(rs){
					if(rs.body.status===0){
						var cmt = {
							user_name:'sss',
							add_time:Date.now(),
							content:this.msg.trim()};
							this.comments.unshift(cmt)
							this.msg = ''
					}
				})
			}
		},
		props:['id']
	}
</script>

<style scoped>
</style>
