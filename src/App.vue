<template>
  <div id="app">
    <div id="nav">
      <p style="background-color: darkblue;color: white;font-weight: bold">
        Define router navigation (links) using 'router-link ' tags and use 'to' property
      </p>
      <!--
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/client_about/17">Session 17</router-link> |
      <router-link to="/client_about/18">Session 18</router-link> |
      <router-link v-bind:to="{path:'/'}">Home variant</router-link> |
      <router-link :to="{name:d_component, params: {sid: 19}}">Session 19</router-link> |
      <router-link to="/query_about?session=ametras">QueryAbout</router-link> |
      <router-link to="/client_about/17/login">Session 17-login</router-link> |
      <router-link to="/client_about/18/session">Session 18-session</router-link>
      -->
      <!-- Named Views , multiple views -->

      <router-link to="/">Start</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/session">Session</router-link> |
      <!-- using REDiRECT and ALIAS -->
      <router-link to="/myredirect">MyRedirect</router-link> |
      <router-link to="/session/5/alias">MyAlias</router-link> |
      <router-link to="/session/21">Session 21</router-link> |
      <router-link to="/session/22">Session 22</router-link> |
      <router-link to="/profile/manager">Profile</router-link>

      <p>....App component</p>
    </div>
    <hr>
    <hr>
    <p style="background-color: crimson;color: white;font-weight: bold">Component match : rendering here</p>
    <!-- classic one view -->
    <!--<router-view></router-view>-->
    <!-- Named Views , multiple views -->

    <h4>Named views</h4>
    <router-view class="view one"></router-view>
    <router-view class="view two" name="first"></router-view>
    <router-view class="view three" name="second"></router-view>
  </div>
</template>
<script>
  export default {
      data() {
          return {
              d_component:'NextAbout'
          }
      }
  }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  font-size: 12px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
