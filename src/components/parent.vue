<template>
	<div class="parent">
		<child :parentfoods="childFoods" @child-event="parentevent"/>
		<ul
			v-if=true 
			v-for="(peice, index) in childdata"
			:key="index">
			<li>{{peice}}</li>
		</ul>
	</div>
</template>

<script>
import Child from './child'
export default {
	name: 'parent',
	data() {
		return {
			childFoods: ['火锅', '麻辣烫', '黄焖鸡', '大盘鸡'],
			childdata: {}
		}
	},
	methods: {
		parentevent(data1) {
			console.log("parentevent:", data1);
			this.childdata = data1;
			console.log("childdata:", this.childdata);
		}
	},
	components: {
		Child
	}
}
</script>

<style scoped>
.parent {
	width: 400px;
	height: 400px;
	background: yellow;
	display: flex;
}
</style>