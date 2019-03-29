<template>
	<div class="content">
		<h2>组件通讯</h2>
		<router-link to="/base">基本方法</router-link>
		<router-link to="/index">使用vuex</router-link>
		<h2>slot插槽</h2>
		<router-link to="/slot">slot插槽</router-link>
		<h2>动画</h2>
		<router-link to="/animation">vue动画</router-link>
		<h2>FBC</h2>
		<router-link to="/bfc">FBC布局</router-link>
		<router-link to="/shengbei">圣杯布局</router-link>
	</div>
</template>

<script>
export default {
}
</script>

<style scoped>
a {
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	margin-bottom: 40px;
}
</style>