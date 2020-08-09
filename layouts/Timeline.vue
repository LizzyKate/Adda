<template>
  <div class="position-relative">
    <bar />
    <nuxt />
    <foot class="fixed-bottom" />
  </div>
</template>
<script>
import bar from '~/components/navbar'
import foot from '~/components/footer/root'

export default {
  layout: 'Timeline',
  components: {
    bar,
    foot
  }
}
</script>
<style></style>
