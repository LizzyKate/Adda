<template>
  <div class="d-flex flex-column bd-highlight align-items center">
    <div class="p-2 bd-highlight">
      <notify />
    </div>
    <div class="p-2 bd-highlight">
      <advert />
    </div>
    <div class="p-2 bd-highlight">
      <friends />
    </div>
  </div>
</template>

<script>
import notify from './notify'
import advert from './advert'
import friends from './friends'

export default {
  components: {
    notify,
    advert,
    friends
  },
  data() {
    return {}
  }
}
</script>

<style></style>
