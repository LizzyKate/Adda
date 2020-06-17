<template>
  <div>
    <news :text="text" :details="News" />
  </div>
</template>

<script>
import news from '../favourite/news'

export default {
  components: {
    news
  },
  data() {
    return {
      text: 'Advertizement',
      News: []
    }
  }
}
</script>

<style></style>
