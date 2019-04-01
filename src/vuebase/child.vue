<template>
	<div class="content">
		<p>{{childtitle}}</p>
		<button @click="toparent">传递到父组件</button>
	</div>
</template>

<script>
export default {
	name: 'vuechild',
	props: ['childtitle'],
	methods: {
		toparent() {
			this.$emit('formchilddmsg', '子组件传递到父组件的数据')
		}
	}
}
</script>

<style scoped>
</style>