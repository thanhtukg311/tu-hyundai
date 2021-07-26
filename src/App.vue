<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  created(){
    document.title = 'Grand i10 Sedan';

  },
  mounted() {}
}

// function renderJs(url){
//   let recaptchaScript = document.createElement('script');
//   recaptchaScript.setAttribute('src', url);
//   document.body.appendChild(recaptchaScript);
// }

</script>

<style>
  @import './assets/css/bootstrap.min.css';
  @import './assets/css/animation.css';
  @import './assets/css/base.css';
  @import './assets/css/fonts.css';
  @import './assets/css/normalize.css';
  @import './assets/css/responsive.css';
  @import './assets/css/styles.css';
  @import './assets/css/main.min.css';
</style>

