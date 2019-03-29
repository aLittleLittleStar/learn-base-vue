<template>
<div id="index">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
</div>
</template>

<script>
import ProductListOne from './ProductListOne.vue'
import ProductListTwo from './ProductListTwo.vue'

export default {
  name: 'index',
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  },
  data () {
    return {
      products: [
        {name: '鼠标', price: 20},
        {name: '键盘', price: 40},
        {name: '耳机', price: 60},
        {name: '显示屏', price: 80}
      ]
    }
  }
}
</script>

<style>
body{
  font-family: Ubuntu;
  color: #555;
}
</style>