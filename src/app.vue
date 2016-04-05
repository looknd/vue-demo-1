<template>
  <div class="app">

    <div class="app-title">
      <h1 v-text="header">App Header</h1>
      <p>当前路径: {{$route.path}}</p>
    </div>

    <nav class="app-nav">
      <a v-link="{ name: 'home', exact: true }">首页</a>
      <a v-link="{ path: '/nofound' }">404</a>
      <a v-link="{ name: 'my_views_detail', params: { viewId:vvv } }">url传值</a>
      <a v-link="{ name: 'image'}">图片base64</a>
      <a v-link="{ name: 'forbidden' }">在路由全局设置终止</a>
      <a v-link="{ name: 'async' }">动态组件载入 lazy load</a>
      <a v-link="{ name: 'async_loading' }">动态组件载入 lazy load(阻塞)，点击先请求数据，请求完毕后(3s)切换</a>
      <a v-link="{ name: 'text' }">测试字符</a>
      <a v-link="{ name: 'alert-text' }">弹窗Model</a>
    </nav>

    <nav class="app-menu">
      <a class="test-btn" @click.prevent="show=true">alert</a>
      <a class="test-btn" @click.prevent="openAlert()">alert-two</a>
    </nav>

    <alert :show.sync="show"
         :title="alert.title"
         :content="alert.content"></alert>

    <router-view class="app-view" :transition="effect" ></router-view>
  </div>
</template>

<script>

  import Alert from './components/alert.vue';

  export default {
     data() {
      return {
        effect: 'fade',
        show : false,
        alert:{
          title : '测试标题',
          content : '测试内容'
        }
        
      }

     },
     components:{
        alert:Alert
     },
     methods:{
        openAlert:function(argument) {
          this.show = true;
          this.alert.title = '信息';
          this.alert.content = '显示我想告诉你一件事';
        }
     }

  }

</script>

<style lang="sass">
[v-cloak] {
  display: none;
}

/* 标题 */
.app-title{
  margin:20px 10px;
}

.custom-active-class{
  color: #f13f3f !important;
  border:1px solid #f13f3f !important;
}


/*导航烂*/
.app-nav{
  clear: both;
  margin:10px;
   
  >a{
    display: inline-block;
    border:1px solid #ddd;
    border-radius:3px; 
    padding: 5px 10px;
    margin-right: 5px;
    margin-top: 5px;
    text-align: center;
    color: #333;
  } 
}
  
.app-view {
  transition: all .3s ease;
  position: absolute;
  width: 100%;
  left:0;
}

.fade-enter, .fade-leave {
  opacity: 0;
  transform: translate3d(0, 0, 0);
}
.fade-enter{
  opacity: 1;
  transform: translate3d(100%, 0, 0);
}

.fade-leave {
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}


.back-enter {
  opacity: 1;
  -webkit-transform: translate3d(-110%, 0, 0);
          transform: translate3d(-110%, 0, 0);

}
.back-leave{
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}


</style>