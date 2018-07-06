<template>
  <div>
    SHORTED REQUEST
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ params }) {
    var url = await axios.get(`http://localhost:4000/api/${params.shortenURL}`)
    return {
      originalURL: url.data
    }
  },
  methods: {
    goRedirect () {
      try {
        // Redirect to original external URL
        window.location = this.originalURL
      }
      catch(e) {
        console.log("ERROR: " + e)
      }
    }
  },
  mounted () {
    this.goRedirect()
  }
}

</script>

<style scoped>
</style>
