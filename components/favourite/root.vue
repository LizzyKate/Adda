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
      page: 'Page You May Like',
      like: [
        {
          image: 'profile-small-33.jpg',
          task: 'Adventure',
          event: 'Travel The World',
          liked: false
        },
        {
          image: 'profile-small-30.jpg',
          task: 'Food',
          event: 'Foodcort Nirala',
          liked: false
        },
        {
          image: 'profile-small-5.jpg',
          task: 'Drama',
          event: 'Rolin Theitar',
          liked: false
        },
        {
          image: 'profile-small-29.jpg',
          task: 'Fitness',
          event: 'Active Mind',
          liked: false
        }
      ],
      News: [
        {
          image: 'profile-small-28.jpg',
          news: 'Any one can join with us if you want',
          time: '2 Min Ago'
        },
        {
          image: 'profile-small-31.jpg',
          news: 'Any one can join with us if you want',
          time: '20 Min Ago'
        },
        {
          image: 'profile-small-27.jpg',
          news: 'Any one can join with us if you want',
          time: '30 Min Ago'
        },
        {
          image: 'profile-small-34.jpg',
          news: 'Any one can join with us if you want',
          time: '40 Min Ago'
        },
        {
          image: 'profile-small-32.jpg',
          news: 'Any one can join with us if you want',
          time: '39 Min Ago'
        }
      ]
    }
  }
}
</script>

<style></style>
