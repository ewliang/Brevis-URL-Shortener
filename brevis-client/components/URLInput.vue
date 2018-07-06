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
      axios.post(`http://localhost:4000/api/`, longURL)
      .then(response => {
        console.log("Successfully generated ShortURL!")
        // Create url json object, and push into the urlResults[]
        var url = {
          oldURL: response.data.oldURL,
          shortenURL: 'http://localhost:3000/' + response.data.shortenURL
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
  display: flex;
  align-items: stretch;
}

#urlInputFormControl {
  flex-grow: 11;
}

.btn {
  flex-grow: 1;
}
</style>
