<template>
  <form id = "urlInputForm" v-on:submit = "generateShortURL">
    <input type = "url" v-model = "inputURL" class = "form-control" id = "urlInputFormControl" placeholder = "e.g.: www.eric-liang.com"/>
    <input type = "submit" class = "btn btn-primary" value = "Shrink!"/>
  </form><!--end -->
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      inputURL: ''
    }
  },
  methods: {
    generateShortURL () {
      var longURL = {
        originalURL: this.inputURL
      }
      alert(this.inputURL)
      console.log(this.inputURL)
      axios.post(`http://localhost:4000/api/`, longURL)
      .then(response => {
        console.log("Successfully generated ShortURL!!!")
        console.log("SHORT URL: " + response)
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
  margin-top: 0 !important;
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
