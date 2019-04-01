<template>
	<div class="container">
		<Child :childtitle="title" @formchilddmsg="getchildmsg"></Child>
		<p>{{msg}}</p>
	</div>
</template>

<script>
import Child from './child'
export default {
	name: 'vuefater',
	data() {
		return {
			title: 'from father',
			msg: ''
		}
	},
	methods: {
		getchildmsg(msg) {
			console.log("msg:", msg);
			this.msg = msg
		}
	},
	components: {
		Child
	}
}
</script>

<style scoped>
</style>