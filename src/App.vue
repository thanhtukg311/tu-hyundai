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
    document.title = 'Grand i10 Sedan'
  },
  mounted() {
      // let url = window.location.href;
      renderJs('/js/bootstrap.min.js');
//       var coll = document.getElementsByClassName("collapsible");
//       var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }
    }
}

function renderJs(url){
  let recaptchaScript = document.createElement('script');
  recaptchaScript.setAttribute('src', url);
  document.body.appendChild(recaptchaScript);
}

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

