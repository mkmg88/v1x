import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vueResource from 'vue-resource'

import index from 'COMPONENT/index/index'
import goods from 'COMPONENT/goods/goods'
import about from 'COMPONENT/about/about'



//在模块化工程中使用必须要通过 Vue.use() 明确地安装
Vue.use(VueRouter);
Vue.use(vueResource);

let app = Vue.extend(App);
let router = new VueRouter({
	linkActiveClass: 'active',  //配置选中class名
	history: false
});

router.map({
	'/index': {
		component: index
	},
	'/goods': {
		component: goods
	},
	'/about': {
		component: about
	}
});

router.start(app, '#app');

//设置默认页面
router.go('/index');
