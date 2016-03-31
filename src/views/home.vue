<template>

  <div class="v-home">
  <div class="v-container">
  	  <h1><img src="../assets/images/logo.png"></h1>
  	  <p>这是一个学习vue.js的Demo</p>
  	  <p>使用:Vue+Webpack+ES6+Vue-Router</p>
  </div>    
  </div>

</template>

<script>
	
let a = 'i am test';
console.log(a)

</script>
<style lang="sass" scoped>

	.v-home{ 

    display: table;
    position: absolute;
    height: 100%;
    width: 100%;


    .v-container{
      display: table-cell;
      vertical-align: middle;
      text-align:center;
       
    }

    
       h1{
       	font-size:20px;
       }
       p{
       	line-height: 25px;
       }

		
	}
    
</style>