<template>
<div>
	<div class="app-container">
	        {{message}}
			<p class="bb">在此router的配置中加上 waitForData:true 。</p> 
			<p><a target="_blank" href="http://vuejs.github.io/vue-router/zh-cn/pipeline/data.html">详情</a></p>
	</div>
</div>


</template>

<script>
	require('../css/b.css');
	module.exports = {

		//props: ['父组建传的值'],
		data:function(){
			return {
				title:'async_loading',
				message:'111'
			}
		},
		route:{
			waitForData:true,
			data:function(transition){
				setTimeout(function () {
			      transition.next({
			        message: 'data fetched!'
			      })
			    }, 3000)
			}
		},
		ready:function(){
			document.title = this.title;
            this.$root.$set('header',this.title);
		}
	}
</script>