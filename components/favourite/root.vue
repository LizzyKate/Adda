<template>
  <div class="d-flex flex-column bd-highlight align-items center">
    <div class="p-2 bd-highlight">
      <profile />
    </div>
    <div class="p-2 bd-highlight">
      <page :choose="like" :page="page" />
    </div>
    <div class="p-2 bd-highlight">
      <news :details="News" :text="text" />
    </div>
  </div>
</template>

<script>
import profile from './profile'
import page from './page'
import news from './news'

export default {
  components: {
    profile,
    page,
    news
  },
  data() {
    return {
      text: 'Latest Top News',
      page: 'Page You May Like'
    }
  },
  computed: {
    like() {
      return this.$store.state.page.like
    },
    News() {
      return this.$store.state.News.News
    }
  }
}
</script>

<style></style>
