<template>
	<div class="container">
		<div class="green"></div>
		<div class="blue"></div>
		<div class="orange"></div>
		<div class="box">
			<section>1</section>
			<section>2</section>
		</div>
		<div class="content">
			<aside></aside>
			<article>格式化上下文，指页面中一个渲染区域，拥有一套渲染规则，它决定了其子元素如何定位，以及与其他元素的相互关系和作用。</article>
		</div>
		<div class="sectionbox">
			<section class="top">111</section>
			<div class="bottombox">
				<section class="bottom">222</section>
			</div>
		</div>
		<div class="flow">
			<div class="left">left</div>
			<div class="right">right</div>
			<div class="center">center</div>
		</div>
		<!-- 解决margin重叠问题 -->
		<div class="block">
			<div class="first-block"></div>
			<div class="second-block">
				<h2>block</h2>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Bfc'
}
</script>

<style scoped>
.container {
	width: 100%;
	height: 1000px;
	display: flex;
	flex-direction: column;
	background: pink;
	margin-bottom: 200px;
}
.green {
	background: green;
	width: 100px;
	height: 100px;
	margin: 10px;
}
.blue {
	background: blue;
	width: 100px;
	height: 100px;
	margin: 10px;
}
.orange {
	background: orange;
	width: 100px;
	height: 100px;
	margin: 10px;
}
.box {
	border: 2px solid green;
	width: 200px;
}
section {
	background: #5cb85c;
	float: left;
	width: 100px;
	height: 100px;
}
.content {
	width: 400px;
	border: 1px solid #000;
}
aside {
	background: yellow;
	float: left;
	width: 100px;
	height: 40px;
}
article {
	background: #039b63;
}

.sectionbox {
	width: 100px;
	border: 1px solid #000;
	margin-left: 100px;
	margin-top: 40px;
}
.top,
.bottom {
	background: #ccc;
	border-bottom: 100px;
	width: 100px;
	height: 100px;
}
.bottom {
	margin-top: 100px;
}

.flow {
	border: 1px solid #000;
	width: 90%;
	margin-bottom: 100px;
}
.flow .left {
	float: left;
	width: 100px;
	height: 200px;
	background: #0084ff;
}
.flow .right{
	float: right;
	width: 100px;
	background: orange;
}
.flow .center{
	background: lightblue;
	overflow: hidden;
	height: 100px;
}

.block {
	margin-bottom: 100px;
	border: 1px solid #000;
}
.first-block {
	background: red;
	width: 200px;
	height: 200px;
}
.second-block {
	background: green;
	width: 200px;
	height: 200px;
	overflow: hidden;
}
</style>