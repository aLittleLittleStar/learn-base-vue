<template>
	<div class="friendB">
		<ul 
			v-if=Abuses.length
			v-for="(bus, index) in Abuses"
			:key="index">
			<li>{{bus}}</li>
		</ul>
	</div>
</template>

<script>
import eventBus from '../eventBus'
export default {
	name: 'friendB',
	data() {
		return {
			Abuses: {
				type: Array,
				default() {
					return []
				}
			}
		}
	},
	mounted() {
		this.geteventData()
	},
	methods: {
		geteventData() {
			const that = this;
			eventBus.$on('eventFromA', function(value) {
				that.Abuses = value
			})
		}
	}
}
</script>

<style scoped>
</style>
