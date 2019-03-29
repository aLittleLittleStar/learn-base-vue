<template>
	<div>
		<div class="box1 clearfix">
			<div class="box-meddle">body</div>
			<div class="box-left">left</div>
			<div class="box-right">right</div>
		</div>
		<div class="container">
			<div class="meddle">
				<div class="inner">body</div>
			</div>
			<div class="left">left</div>
			<div class="right">right</div>
		</div>
		<div class="test clearfix">
			<div class="test-left">H</div>
			<div class="test-meddle1">E</div>
			<div class="test-meddle2">L</div>
			<div class="test-right">O</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'shengbei'
}
</script>

<style scoped>

.box1 {
	padding: 0 200px;
	margin-bottom: 10px;
}
.box-left {
	width: 200px;
	height: 200px;
	float: left;
	background: pink;
	position: relative;
	margin-left: -100%;
	left: -200px;
}
.box-meddle {
	width: 100%;
	height: 200px;
	background: #0084ff;
	/*padding: 0 200px;*/
	float: left;
}
.box-right {
	width: 200px;
	height: 200px;
	float: left;
	position: relative;
	background: orange;
	margin-left: -200px;
	right: -200px;
}
/*
html代码中，middle部分首先要放在container的最前部分，然后是left，right 。
将三者都设置 float:left,position:relative。（box-meddle可以不用设置position:relative）
middle设置 width:100% 占满一行 。
此时middle占满一行，所以要把left拉到middle所在行的最左边，使用 margin-left:-100% 。
这时left拉回到middle所在行的最左边，但会覆盖middle内容的左端，要把middle内容拉出来，所以在外围box1加上 padding:0 200px 。
middle内容拉出来了，但left也跟着出来了，所以要还原，就对left使用相对定位 left:-200px。
同理，right要拉到middle所在行的最右边，使用 margin-left:-200px，right:-200px 
 */

.container {
	width: 100%;
	height: 400px;
	background: orange;
}
.meddle {
	background: yellow;
	width: 100%;
	height: 200px;
	float: left;
}
.meddle .inner {
	margin: 0 200px;
}
.left {
	width: 200px;
	height: 200px;
	background: #ccc;
	float: left;
	margin-left: -100%;
	left: -200px;
}
.right {
	width: 200px;
	height: 200px;
	background: #5cb85c;
	float: left;
	margin-left: -200px;
	right: -200px;
}


.test {
	border: 1px solid #000;
	width: 100%;
	/*overflow: hidden;*/
}
.test-left,
.test-meddle1,
.test-meddle2,
.test-right {
	width: 100px;
	height: 200px;
	float: left;
	background: pink;
	font-size: 30px;
	margin: 10px;
	text-align: center;
}
.clearfix:after {
	content: "";
	display: block;
	clear: left;
}
</style>