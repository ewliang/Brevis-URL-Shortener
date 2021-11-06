<template>
  <div>
    <form id = "urlInputForm" v-on:submit.prevent = "generateShortURL">
      <input type = "url" v-model = "inputURL" class = "form-control" id = "urlInputFormControl"/>
      <input type = "submit" class = "btn btn-primary" value = "Shrink!"/>
    </form><!--end urlInputForm-->
    <ul v-if = "urlResults.length">
      <li v-for = "(urlResult, index) in urlResults.slice().reverse()" v-bind:key = "index">
        <URLResult v-bind:originalURL = urlResult.oldURL v-bind:shortenURL = urlResult.shortenURL></URLResult>
      </li>
    </ul><!--end urlResults-->
  </div>
</template>

<script>
import axios from 'axios'
import URLResult from '~/components/URLResult.vue'
const BREVIS_BACKEND_URL = process.env.BREVIS_BACKEND_URL

export default {
  components: {
    URLResult
  },
  data () {
    return {
      inputURL: '',
      urlResults: []
    }
  },
  methods: {
    generateShortURL () {
      var longURL = {
        originalURL: this.inputURL
      }
      axios.post(BREVIS_BACKEND_URL + '/api/', longURL)
      .then(response => {
        console.log("Successfully generated ShortURL!")
        // Create url json object, and push into the urlResults[]
        var url = {
          oldURL: response.data.oldURL,
          shortenURL: `${window.location.protocol}//${window.location.host}/${response.data.shortenURL}`
        }
        this.urlResults.push(url)
        // Clears input form after successfully generating shorten URL.
        this.inputURL = ''
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>
#urlInputForm {
  min-width: 240px;
  width: 100%;
  max-width: 80%;
  display: flex;
  align-items: stretch;
  margin: 0 auto;
}

#urlInputFormControl {
  flex-grow: 10;
}

.btn {
  flex-grow: 1;
}
</style>
