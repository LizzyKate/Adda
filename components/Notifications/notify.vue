<template>
  <div>
    <news :details="News" :text="text" />
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
      text: 'Recent Notifications',
      News: [
        {
          image: 'profile-small-9.jpg',
          news: 'Any one can join with us if you want',
          time: '5 Min Ago'
        },
        {
          image: 'profile-small-35.jpg',
          news: 'Any one can join with us if you want',
          time: '10 Min Ago'
        },
        {
          image: 'profile-small-15.jpg',
          news: 'Any one can join with us if you want',
          time: '18 Min Ago'
        },
        {
          image: 'profile-small-6.jpg',
          news: 'Any one can join with us if you want',
          time: '25 Min Ago'
        },
        {
          image: 'profile-small-34.jpg',
          news: 'Any one can join with us if you want',
          time: '39 Min Ago'
        }
      ]
    }
  }
}
</script>

<style></style>
