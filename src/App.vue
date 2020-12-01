<template>
  <div>
    <div class="banner"></div>
    <Nav></Nav>
    <router-view></router-view>
    <Soc></Soc>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Soc from "@/components/Socials.vue";

export default {
  name: 'App',
  components: {
    Nav,
    Soc
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap');
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'poppins';
}
body{
  background: #1DC172;
  width: 90%;
  margin: auto;
  min-height: 100vh
}
.banner{
  background: #2D2D2D;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  width: 35%;
  height: 100vh;
}
</style>
