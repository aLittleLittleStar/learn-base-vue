<template>
	<div class="container">
		<h3>axios</h3>
		<div class="box12">
			<div class="content" v-for="item in info">
				<div class="box1">
					<div class="span">code： {{item.code}}</div>
					<div class="span">rate： {{item.rate}}</div>
					<div class="span">rate_float： {{item.rate_float}}</div>
				</div>
			</div>
		</div>
		<h3>ajax</h3>
		<div class="box12">
			<div class="content" v-for="item in ajaxdata.bpi">
				<div class="box1">
					<div class="span">{{item}}</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import axios from 'axios'
export default {
	name: 'vueaxios',
	data() {
		return {
			info: null,
			ajaxdata: ''
		}
	},
	mounted() {
		this.ajaxgetdata()
		// axios
		axios
			.get('https://api.coindesk.com/v1/bpi/currentprice.json')
			.then(response => { 
				this.info = response.data.bpi
			})
			.catch(error => {
				console.log("error:", error)
			})
	},
	methods: {
		// ajax
		ajaxgetdata() {
			const xhr = new XMLHttpRequest();
			const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
			xhr.onreadystatechange = () => {
				// readyState为4表示请求响应完成
				if (xhr.readyState === 4) {
					if(xhr.status === 200) {
						// 对json文件进行转码
						this.ajaxdata = JSON. parse(xhr.responseText);
					} else {
						console.log("Request was unsuccessful:", xhr.status);
					}
				}
			}
			xhr.open('GET', url, true)
			xhr.send(null)
		}
	}
}
</script>

<style scoped>
.container {
	height: 1000px;
}
.box12 {
	width: 100%;
	/*height: 1000px;*/
	background: pink;
	display: flex;
	flex-wrap: wrap;
}
.content {
	width: 240px;
	height: 200px;
	margin: 10px;
	background: orange;
}
.box1 {

}
.span {
	display: flex;
	background: red;
	height: 40px;
	width: 100%;
	margin-bottom: 10px;
}
</style>