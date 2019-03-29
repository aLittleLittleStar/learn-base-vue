<template>
  <div class="slotchild">
    <h4>匿名插槽</h4>
    <!-- <slot></slot> -->
    <h4>具名插槽</h4>
    <slot name="up"></slot>
    <h4>作用域插槽</h4>
    <div>
      <slot v-bind:item="data"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlotChild',
  data() {
    return {
      data: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']
    }
  },
}
</script>
<!-- 当子组件模板只有一个没有属性的插槽时，父组件传入的整个内容片段将插入到插槽所在的 DOM 位置，并替换掉插槽标签本身。 -->
<!-- 作用域插槽更典型的用例是在列表组件中，允许使用者自定义如何渲染列表的每一项： -->
<style scoped>
.slotchild {
	background: pink;
	padding: 20px;
}
</style>
