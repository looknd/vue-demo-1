# learn-vue-webpack demo


## 运行
npm install
webpack -w


## 目录结构
<pre>
│  .gitignore           # 忽略无需git控制的文件  比如 node_modules
│  favicon.ico       
│  index.html           # 首页
│  index.tpl            # 首页模板
│  list.txt
│  package.json         # 项目配置
│  README.md            # 项目说明
│  webpack.config.js    # webpack 配置文件
│  
├─dist                  #上线文件 
├─node_modules
├─src
│  │  app.js            # 启动配置，配置路由，过滤器
│  │  app.vue           # 主vue
│  │  routers.js        # 路由
│  │ 
│  ├─assets             # 静态文件
│  │  ├─images
│  │  └─scss
│  ├─components        # 组件
│  ├─css               # 样式
│  ├─lib               # 插件项
│  └─views             # 页面
└─test                 # 测试
        
</pre>