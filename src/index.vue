<template>
	<div class="content">
		<div class="box1">
			<h3>组件通讯</h3>
			<router-link to="/base">基本方法</router-link>
			<router-link to="/index">使用vuex</router-link>
			<router-link to="/vuebase">组件通讯(新加)</router-link>
		</div>
		<div class="box1">
			<h3>slot插槽</h3>
			<router-link to="/slot">slot插槽</router-link>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.content {
	display: flex;
	background: orange;
	width: 100%;
	height: 600px;
}
.box1 {
	width: 300px;
	height: 300px;
	margin: 10px;
	background: pink;
}
a {
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	margin-bottom: 20px;
}
</style>