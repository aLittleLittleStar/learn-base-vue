<template>
	<div class="friendA">
		<button @click="emitToB">点击按钮传递数据给兄弟组件B</button>
	</div>
</template>

<script>
import eventBus from '../eventBus'
export default {
	name: 'friendA',
	data() {
		return {
			buses: ['林肯领航员','大众','悍马']
		}
	},
	methods: {
		emitToB() {
			eventBus.$emit('eventFromA', this.buses)
		}
	}
}
</script>

<style scoped>
.friendA {
	width: 200px;
	height: 200px;
	background: red;
	display: inline-block;
}
</style>
