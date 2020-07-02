<template>
  <div class="position-fixed __notify">
    <div class="d-flex flex-column bd-highlight mx-3 mt-3">
      <div class="p-2 bd-highlight">
        <div
          class="d-flex flex-row bd-highlight mb-1 justify-content-between align-content-center"
        >
          <div class="p-2 bd-highlight __recent">
            <p class="mb-0">Recent Notifictions</p>
          </div>
          <div class="p-2 bd-highlight __set">
            <i class="fas fa-cog"></i>
          </div>
        </div>
        <div class="__through"></div>
      </div>
      <div
        v-for="(check, i) in notifications"
        :key="i"
        class="p-2 bd-highlight"
      >
        <div
          class="d-flex flex-row bd-highlight mb-1 justify-content-between align-items-center"
        >
          <div class="p-2 bd-highlight">
            <div class="d-flex flex-row bd-highlight">
              <div class=" bd-highlight">
                <img
                  :src="`/img/${check.image}`"
                  class="rounded-circle __profile"
                  alt=""
                />
              </div>
              <div class=" bd-highlight ml-3">
                <p class="mb-0 __many">
                  <span
                    v-for="(click, b) in check.names"
                    :key="b"
                    class="__click"
                    >{{ click }}</span
                  >
                  {{ check.text }}
                </p>
              </div>
            </div>
          </div>
          <div class="p-2 bd-highlight __date">
            <p class="mb-0">{{ check.date }}</p>
          </div>
        </div>
        <div class="__through"></div>
      </div>
      <div class="p-2 bd-highlight">
        <div
          class="d-flex flex-row bd-highlight mb-3 justify-content-between align-content-center"
        >
          <div class=" bd-highlight __group">
            <p v-show="tick" class="mb-0">See all in messenger</p>
          </div>
          <div class=" bd-highlight __group">
            <p v-show="tick" class="mb-0" @click="mark()">Mark all as read</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tick: true,
      notifications: [
        {
          image: 'profile-small-9.jpg',
          names: ['Robert Faul,', ' William Jhon'],
          text: 'and ' + 35 + '  other people reacted to your photo',
          date: 25 + ' Apr, 2019'
        },
        {
          image: 'profile-small-15.jpg',
          names: ['Robert Mushkil,', ' Terry Jhon'],
          text: 'and ' + 20 + ' other people reacted to your photo',
          date: 20 + ' Apr, 2019'
        },
        {
          image: 'profile-small-27.jpg',
          names: ['Horijon Mbala,', ' Bashu Jhon'],
          text: 'and ' + 55 + ' other people reacted to your post',
          date: 15 + ' Apr, 2019'
        }
      ]
    }
  },
  methods: {
    mark() {
      this.notifications = []
      this.tick = false
    }
  }
}
</script>

<style></style>
