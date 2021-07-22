<template>
  <div id="wrapper">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  created(){
    document.title = 'Grand i10 Sedan'
  }
}
</script>

<style>
  @import './assets/css/animation.css';
  @import './assets/css/base.css';
  @import './assets/css/fonts.css';
  @import './assets/css/normalize.css';
  @import './assets/css/responsive.css';
  @import './assets/css/styles.css';
</style>

