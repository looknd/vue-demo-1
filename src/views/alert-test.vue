
<template>
  <div>
    <div class="app-container">
      <div class="v-alert">
      	  <a @click.prevent="show=true">弹窗Model</a>
      </div>    
    </div>
  </div>

  <alert :show.sync="show"
         :title="alert.title"
         :content="alert.content"></alert>

</template>

<script>

    import Alert from '../components/alert.vue';

    export default {
        data() {
          return{
            title:'alert',
            show:false,
            alert:{
	          title : '测试标题',
	          content : '测试内容'
	        }
          }
        },
        components:{
           alert:Alert
        },
        events:{
        	'hide':function(){
        		alert('你点击了确定按钮');
        	}
        },
        route:{
          activate:function(transition){
            document.title = this.title;
            this.$root.$set('header',this.title);
            transition.next();
          }
        },

    }
</script>
<style lang="sass">
  
</style>