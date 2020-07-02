<template>
  <div class="position-fixed __message">
    <div class="d-flex flex-column bd-highlight mx-3 mt-3">
      <div class="p-2 bd-highlight">
        <div
          class="d-flex flex-row bd-highlight mb-1 justify-content-between align-content-center"
        >
          <div class="p-2 bd-highlight __recent">
            <p class="mb-0">Recent Message</p>
          </div>
          <div class="p-2 bd-highlight">
            <div
              class="d-flex flex-row bd-highlight justify-content-between align-items-center "
            >
              <div class=" bd-highlight __group">
                <p class="mb-0">New Group</p>
              </div>
              <div class="bd-highlight __group ml-3">
                <p class="mb-0">New Message</p>
                <div class="__below"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="__through"></div>
      </div>
      <div v-for="(check, i) in message" :key="i" class="p-2 bd-highlight">
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
                <h6 class=" __milli">{{ check.name }}</h6>
                <p class="mb-0 __many">
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
      message: [
        {
          image: 'profile-small-1.jpg',
          name: 'Milli Raoulin',
          text:
            'Many desktop publishing packages and web page editors now use lorem ipsum as their default',
          date: 25 + ' Apr, 2019'
        },
        {
          image: 'profile-small-5.jpg',
          name: 'Jhon Doe',
          text:
            'Many desktop publishing packages and web page editors now use lorem ipsum as their default',
          date: 15 + ' Apr, 2019'
        },
        {
          image: 'profile-small-6.jpg',
          name: 'Jon Wileyam',
          text:
            'Many desktop publishing packages and web page editors now use lorem ipsum as their default',
          date: 20 + ' Apr, 2019'
        }
      ]
    }
  },
  methods: {
    mark() {
      this.message = []
      this.tick = false
    }
  }
}
</script>
<style></style>
