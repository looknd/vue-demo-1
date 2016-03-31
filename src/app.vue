<template>
  <div class="app">
        <a v-link="{ name: 'home', exact: true }">首页</a>
        <a v-link="{ path: '/nofound' }">404</a>
        <router-view></router-view>
  </div>
</template>  