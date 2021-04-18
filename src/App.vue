<template>
  <div id="app">
    <ul class="navbar">
      <li><router-link to="/examples/table">table 组件</router-link></li>
      <li><router-link to="/debug">API调试</router-link></li>
    </ul>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  width: 1200px;
  margin: 0 auto;
}
.navbar {
  width: 100%;
  height: 40px;
  line-height: 40px;
  list-style-type: none;
  li {
    float: left;
    width: 100px;
    text-align: center;
  }
}
</style>
