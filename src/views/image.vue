
<template>
  <div>
    <div class="app-container">
      <div class="v-image">
          <p style="text-align:left">webpack编译处理，src图片和背景图片都处理为base64位的图片</p>

          <p>img 图片</p>
          <img src="../assets/images/logo.png">

          <p>背景图片</p>
          <p class="img"></p>
      </div>    
    </div>
  </div>
</template>

<script>
    export default {
        data() {
         return{
           title:'图片测试',
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
   .v-image{
      text-align: center;

     .img{
       width: 200px;
       height: 200px;
       margin:0 auto;
       background: url('../assets/images/logo.png') no-repeat center;
       background-size:100%;
     }
   }
</style>