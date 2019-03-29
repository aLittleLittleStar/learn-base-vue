/*
* @Author: Star
* @Date:   2019-03-28 16:41:24
* @Last Modified by:   Star
* @Last Modified time: 2019-03-29 19:26:41
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import HelloWorld from './components/HelloWorld.vue'
import Index from './vuex/index'
import BaseIndex from './index'
import MySlot from './slot/index'
import Animation from './animation/index'
import Bfc from './layout/bfc'
import ShengBei from './layout/shengbei'

Vue.use(VueRouter)


const routes = [
	{
		path: '/',
		redirect: '/all'
	},
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
	},
	{
		path: '/animation',
		component: Animation
	},
	{
		path: '/bfc',
		component: Bfc
	},
	{
		path: '/shengbei',
		component: ShengBei
	}
]

const router = new VueRouter({
	routes
})

export default router;
