<template>
  <form id = "urlInputForm">
    <input type = "url" class = "form-control" id = "urlInputFormControl" placeholder = "e.g.: www.eric-liang.com"/>
    <input type = "submit" class = "btn btn-primary" value = "Shrink!"/>
  </form><!--end -->
</template>

<script>
import axios from 'axios'

export default {

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
