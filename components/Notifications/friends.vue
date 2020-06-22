<template>
  <div>
    <page :choose="like" :page="page" />
  </div>
</template>

<script>
import page from '../favourite/page'

export default {
  components: {
    page
  },
  data() {
    return {
      page: 'Friends Zone'
    }
  },
  computed: {
    like() {
      return this.$store.state.page.friends
    }
  }
}
</script>

<style></style>
