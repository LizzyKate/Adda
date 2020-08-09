<template>
  <div class="d-flex flex-column bd-highlight">
    <div class=" bd-highlight">
      <Log />
    </div>
    <div class="bd-highlight">
      <Sign />
    </div>
  </div>
</template>
<script>
import Log from './log'
import Sign from './sign'

export default {
  components: {
    Log,
    Sign
  }
}
</script>
<style scoped></style>
