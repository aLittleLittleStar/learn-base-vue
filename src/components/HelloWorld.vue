<template>
  <div class="hello">
    <parent />
    <div class="friend">
      <friend-a></friend-a>
      <friend-b></friend-b>
    </div>
  </div>
</template>

<script>
import Parent from './parent'
import FriendA from './friendA'
import FriendB from './friendB'
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default() {
        return "hello"
      }
    }
  },
  components: {
    Parent,
    FriendA,
    FriendB
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
}
.friend {
  flex-direction: row;
}
</style>
