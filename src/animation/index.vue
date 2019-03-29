<template>
	<div class="container">
		<button @click="show = !show">toggle</button>
		<transition name="fade">
			<p v-if="show">Hello Vue</p>
		</transition>
		<transition name="slide-fade">
			<p v-if="show">Hello Vue Animation</p>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'animation',
	data() {
		return  {
			show: true
		}
	}
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
	transition: opacity 4s;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}


.slide-fade-enter-active {
	animation: bunce-in .5s;
}
.slide-fade-leave-active {
	animation: bunce-in .5s reverse;
}


@keyframes bunce-in {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.5);
	}
	100% {
		transform: scale(1);
	}
}

</style>