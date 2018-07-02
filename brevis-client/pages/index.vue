<template>
  <section class="container-condensed">
    <URLInput/>
    <br/>
    <URLResult/>
  </section>
</template>

<script>
import URLInput from '~/components/URLInput.vue'
import URLResult from '~/components/URLResult.vue'

export default {
  components: {
    URLInput,
    URLResult
  }
}
</script>

<style>

</style>
