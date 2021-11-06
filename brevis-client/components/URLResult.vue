<template>
  <div class = "url-result">
    <p class = "original-url">{{originalURL}}</p>
    <a class = "shorten-url" :id = shortenURL rel = "nofollow" :href = shortenURL>{{shortenURL}}</a>
    <button class = "btn-red" v-on:click.prevent = "copyShortenURL">Copy</button>
    <button class = "btn-red"><i class = "fa fa-chart-bar fa-lg"></i></button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['originalURL', 'shortenURL'],
  methods: {
    copyShortenURL (event) {
      const element = document.getElementById(this.$props.shortenURL)
      var temp = document.createElement('input')
      temp.setAttribute('value', element.innerHTML)
      document.body.appendChild(temp)
      temp.select()
      document.execCommand('copy')
      document.body.removeChild(temp)
    }
  }
}
</script>

<style scoped>
.url-result {
  min-width: 300px;
  width: 100%;
  max-width: 80%;
  color: #666666;
  background-color: #fafafa;
  padding: 30px;
  margin: 0 auto !important;
}

.original-url {
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 3px;
}

.shorten-url {
  font-size: 14px;
  font-weight: 400;
  color: #e84c3d;
}

.btn-red {
  font-size: 12px;
  font-weight: 600;
  color: #e84c3d;
  background-color: #fff;
  border: 2px solid #e84c3d;
  text-transform: uppercase;
  padding: 3px 10px;

	box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  float: right;
}
</style>
