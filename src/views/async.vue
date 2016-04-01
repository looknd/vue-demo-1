
<template>
  <div>
    <div class="app-container">
      <div class="v-async">
        <p class="bb">
	      <a href="http://vuejs.github.io/vue-router/zh-cn/lazy.html" target="_blank">动态组件载入 lazy load</a>
        </p>

        <p>
			现在，只有当 /async 需要被渲染时，async.vue组件，会自动加载它的依赖组件，并且异步的加载进来。
        </p>
      </div>    
    </div>
  </div>
</template>

<script>
    require('../css/b.css');
    export default {
        data() {
         return{
           title:'动态组件载入 lazy load',
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
   .v-async{
   	.bb{
   		text-align:center;
   	}
    
   }
</style>