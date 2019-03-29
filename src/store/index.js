/*
* @Author: Star
* @Date:   2019-03-28 11:31:28
* @Last Modified by:   Star
* @Last Modified time: 2019-03-28 15:37:32
*/
import Vue from 'vue'
import App from '../App'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './action'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
	products: [
		{name: '鼠标', price: 20},
		{name: '键盘', price: 40},
		{name: '耳机', price: 60},
		{name: '显示屏', price: 80},
		{name: '散热器', price: 100},
	]
}

const store = new Vuex.Store({
	state, // 共同维护的一个状态，state里面可以是很多个全局状态
	getters, // 获取数据并渲染
	actions, // 数据的异步操作
	mutations // 处理数据的唯一途径，state的改变或赋值只能在这里
})

export default store