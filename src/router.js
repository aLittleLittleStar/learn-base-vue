/*
* @Author: Star
* @Date:   2019-03-28 16:41:24
* @Last Modified by:   Star
* @Last Modified time: 2019-04-01 20:20:50
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import HelloWorld from './components/HelloWorld.vue'
import Index from './vuex/index'
import VueIndex from './vuebase/index'
import BaseIndex from './index'
import MySlot from './slot/index'

Vue.use(VueRouter)


const routes = [
	{
		path: '/all',
		component: BaseIndex
	},
	{
		path: '/base',
		component: HelloWorld
	},
	{
		path: '/index',
		component: Index
	},
	{
		path: '/vuebase',
		component: VueIndex
	},
	{
		path: '/slot',
		component: MySlot
	}
]

const router = new VueRouter({
	routes
})

export default router;
