<template>
  <div class="myslot">
    <h4>这里是父组件</h4>
    <slot-child>
      <div class="temp">
        <span>菜单1</span>
        <span>菜单2</span>
        <span>菜单3</span>
        <span>菜单4</span>
      </div>
      <div class="temp" slot="up">
        <span>菜单--1</span>
        <span>菜单--2</span>
        <span>菜单--3</span>
        <span>菜单--4</span>
      </div>

      <div slot-scope="slotProps">
        <div class="temp">
          <ul v-for="indx in slotProps.item">
            <span>{{indx}}</span>
          </ul>
        </div>
      </div>
    </slot-child>
  </div>
</template>

<script>
import SlotChild from './slotchild'
export default {
  name: 'myslot',
  components: {
    SlotChild
  }
}
</script>

<style scoped>
.myslot {
  background: blue;
  padding: 40px;
}
.temp {
  border: 4px solid orange;
  padding: 40px;
}
.temp span{
  background: yellow;
  padding: 20px;
  margin: 4px;
}
</style>
