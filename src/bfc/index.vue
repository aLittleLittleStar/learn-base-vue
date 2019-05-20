<template>
	<div class="container">
		<div class="box1">
			<p>
				I am paragraph one and I have a margin top and bottom of 20px
			</p>
			<p class="clear">
				I am paragraph one and I have a margin top and bottom of 20px
			</p>
		</div>
		<div class="box2">
			<div class="float">I am floated element</div>
			<div class="text">I am textI am textI am textI am textI am textI am textI am textI am textI am textI am textI am textI am textI am textI am textI am textI am textI am textI am textI am textI am textI am textI am textI am textI am textI am textI am text</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'bfc'
}
</script>

<style scoped>
.box1 {
	background: #ccc;
	margin: 20px 0;
	overflow: hidden;
	visibility: hidden;
}
p {
	padding: 0;
	background: pink;
	margin: 20px 0;
	border: 1px solid #000;
	color: #fff;
	visibility: visible;
}
p.clear {
	background: red;
}

.box2 {
	background: orange;
	margin: 20px;
	height: 200px;
}
.float {
	float: left;
	width: 100px;
	height: 40px;
	background: blue;
	color: #fff;
}
.text {
	overflow: hidden;
}
</style>