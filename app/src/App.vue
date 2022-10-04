<template>
  <div class="champs">
    <Navbar v-if="this.$route.name !='landing'"/>
    <router-view/>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
export default {
  components:{Navbar}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100vh;
  background-image: linear-gradient(to left, #171434, #1e1938, #241e3b, #2b243f, #312943, #322a45, #322b47, #332c49, #2d294a, #26264b, #1c234d, #0e214e);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
