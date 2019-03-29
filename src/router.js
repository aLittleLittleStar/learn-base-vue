/*
* @Author: Star
* @Date:   2019-03-28 16:41:24
* @Last Modified by:   Star
* @Last Modified time: 2019-03-28 16:47:10
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import HelloWorld from './components/HelloWorld.vue'
import Index from './vuex/index'
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
		path: '/slot',
		component: MySlot
	}
]

const router = new VueRouter({
	routes
})

export default router;
