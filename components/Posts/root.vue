<template>
  <div>
    <div class="d-flex flex-column bd-highlight mb-3">
      <div class="p-2 bd-highlight">
        <share />
      </div>
      <div class="p-2 bd-highlight">
        <tweet />
      </div>
    </div>
  </div>
</template>

<script>
import share from './share'
import tweet from './tweets'

export default {
  components: {
    share,
    tweet
  },
  data() {
    return {}
  }
}
</script>

<style></style>
