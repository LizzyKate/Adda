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
      text: 'Advertizement'
    }
  },
  computed: {
    News() {
      return this.$store.state.News.Advert
    }
  }
}
</script>

<style></style>
