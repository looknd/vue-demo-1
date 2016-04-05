
import home from './views/home.vue';
import not_found from './views/not_found.vue';
import my_views_detail from './views/my_views_detail.vue';
import image from './views/image.vue';
import forbidden from './views/forbidden.vue';
import text from './views/text.vue';
import alertText from './views/alert-test.vue';


export default function(router) {
    router.map({
		'/':{
			name:'home',
			component: home
		},
		'/my_views/:viewId': {
			name:'my_views_detail',
			component: my_views_detail,
			auth: true // 此页面需要用户登录
		},
		'/image': {
			name:'image',
			component: image,
		},
		'/forbidden': {
			name:'forbidden',
			component: forbidden,
		},
		'/async':{
			name:'async',
			component:function(resolve){
				require(['./views/async.vue'],resolve)
			}
		},
		'async_loading':{
			//http://forum.vuejs.org/topic/114/vue-router-异步加载的例子
			name:'async_loading',
			component: function(reslove){
				//异步加载，
				//例子
				return require(['./views/async_loading.vue'],reslove)
			}
		},
		'/text': {
			name:'text',
			component: text,
		},
		'/alert-text': {
			name:'alert-text',
			component: alertText,
		},
		// not found handler
	    '*': {
	      component: not_found
	    }
	});



	window.routeList=[];
	router.beforeEach(function(transition){
		console.log('before---------------');
		//可以通过在路由中的自定义字段来验证用户是否需要登陆
		// if(transition.to.auth){
		// 	console.log('通过配置路由中自定义的字段验证是否需要登陆');
		// }

		// //如果是中止，这里可以判断用户登录
		// //if(transition.to.path === '/forbidden'){
		if(transition.to.name == 'forbidden'){
			router.app.authenticating = true
			setTimeout(function(){
				router.app.authenticating = false
				alert('此路由在全局中设置为中止');
				transition.abort();
			},1500);
		}

		if(routeList.length > 1 && transition.to.name==routeList[routeList.length-2]['name']){
			router.app.effect='back';
			routeList.splice(routeList.length-1,1);
			console.log(routeList);
		} else {
			router.app.effect='fade';
			routeList.push({
				name : transition.to.name,
				path : transition.to.path,
				query : transition.to.query,
				params : transition.to.params,
				timer: +new Date
			});
		}

		//setTimeout(function(){
			transition.next();
		//},1000);
	});


	//可以记录访问路径
	router.afterEach(function(transition){
		console.log('-----------------after');
		for (var i = 0; i < routeList.length; i++) {
			console.log(routeList[i].name);
		};
	});


}



