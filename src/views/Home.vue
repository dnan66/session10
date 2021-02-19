<template>
  <div class="home">
    <p>.....Home component</p>
    <img alt="Vue logo" height="100" src="../assets/logo.png">
    <hr><hr>
    <HelloWorld msg="Home component : Welcome to Your Vue.js App"></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
      HelloWorld
  }
}
</script>
