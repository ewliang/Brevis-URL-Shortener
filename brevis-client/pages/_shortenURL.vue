<template>
  <div>
    SHORTED REQUEST
  </div>
</template>

<script>
import axios from 'axios'
const BREVIS_BACKEND_URL = process.env.BREVIS_BACKEND_URL ? process.env.BREVIS_BACKEND_URL : 'http://localhost:4000'

export default {
  async asyncData ({ params }) {
    var url = await axios.get(`${BREVIS_BACKEND_URL}/api/${params.shortenURL}`)
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
