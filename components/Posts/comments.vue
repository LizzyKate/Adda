<template>
  <div class="d-flex flex-column bd-highlight ml-3">
    <div v-for="(type, b) in comment" :key="b" class="p-2 bd-highlight">
      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">
          <img
            :src="`/img/${type.image}`"
            class="rounded-circle __profile"
            alt=""
          />
        </div>
        <div class="p-2 bd-highlight __view mt-4 mr-3">
          <div class="d-flex flex-column bd-highlight ">
            <div class="p-2 bd-highlight">
              <div class="d-flex flex-row bd-highlight justify-content-between">
                <div class="bd-highlight">
                  <div class="d-flex flex-row bd-highlight ">
                    <div class=" bd-highlight">
                      <h6 class="mb-0 __commenter">{{ type.name }}</h6>
                    </div>
                    <div class=" bd-highlight ml-3 __replier">
                      <i class="fas fa-reply"></i>
                    </div>
                  </div>
                </div>
                <div class=" bd-highlight">
                  <p class="mb-0">{{ type.time }}</p>
                </div>
              </div>
            </div>
            <div class="p-2 bd-highlight">
              <p class="mb-0 __comment">
                {{ type.reply }}
              </p>
            </div>
            <div class="p-2 bd-highlight">
              <p class="mb-0 __timer" @click="more(b)">{{ type.view }}</p>
            </div>
          </div>
        </div>
      </div>
      <Subcomment :class="{ hide: comment[b].hidden === false }" />
    </div>
  </div>
</template>
<script>
import Subcomment from './subComments'
export default {
  components: {
    Subcomment
  },
  data() {
    return {
      comment: [
        {
          image: 'profile-small-1.jpg',
          name: 'Jason Borne',
          time: 1 + ' year ago',
          reply:
            'We are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post',
          view: 'View more replies',
          hidden: false
        },
        {
          image: 'profile-small-5.jpg',
          name: 'Donald Trump',
          time: 1 + ' week ago',
          reply:
            'we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel ',
          view: 'View more replies',
          hidden: false
        },
        {
          image: 'profile-small-6.jpg',
          name: 'Micheal Smith',
          time: 2 + ' days ago',
          reply:
            'We are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post',
          view: 'View more replies',
          hidden: false
        }
      ]
    }
  },
  methods: {
    more(b) {
      this.comment[b].hidden = !this.comment[b].hidden
    }
  }
}
</script>
<style scoped>
.hide {
  display: none;
}
</style>
