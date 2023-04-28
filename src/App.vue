<template>
  <div id="app">
    <router-view></router-view>
    <div style="height: 3.5rem"></div>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide/FooterGuide.vue';
export default{
  components:{
    FooterGuide
  }
}
</script>
<style>

</style>
<style lang="stylus" rel="stylusheet/stylus">

</style> 
