<template>
  <div class = "container">
    <MainHeader/>
    <nuxt/>
    <MainFooter/>
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader.vue'
import MainFooter from '~/components/MainFooter.vue'

export default {
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
