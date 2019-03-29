<template>
	<div class="child">
		<ul v-for="(food, index) in parentfoods">
			<li>{{food}}</li>
		</ul>
		<div class="sendtoparent">
			<button @click="sendtoparent">点击按钮发送到父组件</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'child',
	props: {
		parentfoods: {
			type: Array,
			default() {
				return []
			}
		}
	},
	data() {
		return {
			price: {
				x: '100',
				y: '24',
				z: '60',
				f: '200'
			}
		}
	},
	methods: {
		sendtoparent() {
			this.$emit('child-event', this.price)
		}
	}
}
</script>

<style scoped>
.child {
	display: flex;
	flex-direction: row;
}
</style>