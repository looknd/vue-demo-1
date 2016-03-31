import home from './views/home.vue';
import not_found from './views/not_found.vue';



export default function(router) {
    router.map({
		'/':{
			name:'home',
			component: home
		},
		// not found handler
	    '*': {
	      component: not_found
	    }
	});
}



