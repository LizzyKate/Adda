<template>
  <div class="position-relative">
    <bar class="position-sticky w-100" />
    <nuxt />
  </div>
</template>
<script>
import bar from '~/components/navbar'

export default {
  components: {
    bar
  }
}
</script>
<style></style>
