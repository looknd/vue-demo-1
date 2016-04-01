

<template>
  <div>
    <div class="app-container">
      <div class="v-text">
         <p>
          &lt; >~!@#$%^&*()__+?{}|\ 如果模板中有 &lt; 此字符，需要使用:'&+lt;'  那么在压缩的时候会报错
         </p>     
      </div>    
    </div>
  </div>
</template>

<script>
    export default {
        data() {
         return{
           title:'测试字符',
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
