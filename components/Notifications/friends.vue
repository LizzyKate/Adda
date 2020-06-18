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
      page: 'Friends Zone',
      like: [
        {
          image: 'profile-small-33.jpg',
          task: 10 + ' Mutual',
          event: 'Ammeya Jakson',
          liked: false
        },
        {
          image: 'profile-small-30.jpg',
          task: 2 + ' Mutual',
          event: 'Jashon Muri',
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
      ]
    }
  }
}
</script>

<style></style>
