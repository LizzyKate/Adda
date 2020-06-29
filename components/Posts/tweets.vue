<template>
  <div>
    <div class="d-flex flex-column bd-highlight mb-3">
      <div v-for="(write, i) in post" :key="i" class="p-2 bd-highlight">
        <div class="d-flex flex-column bd-highlight mb-3 __dimbel">
          <div class="p-2 bd-highlight">
            <div
              class="d-flex flex-row bd-highlight mb-3 justify-content-between align-items-center"
            >
              <div class="ml-2 bd-highlight">
                <div class="d-flex flex-row bd-highlight align-items-center">
                  <div class=" bd-highlight">
                    <img
                      :src="/img/ + write.profile"
                      class="rounded-circle __profile"
                      alt=""
                    />
                  </div>
                  <div class="ml-3 bd-highlight">
                    <h6 class="mb-0">{{ write.author.name }}</h6>
                    <p class="mb-0 __attach">{{ write.time }}</p>
                  </div>
                </div>
              </div>
              <div class="bd-highlight mr-3">
                <i class="fas fa-bars"></i>
              </div>
            </div>
          </div>
          <div class="p-3 bd-highlight">
            <p class="mb-0 __attach">
              {{ write.body }}
            </p>
          </div>
          <div class="p-2 bd-highlight __pic">
            <div
              v-for="(media, index) in write.media"
              :key="index"
              :class="[write.media.length === 1 ? 'width-100' : 'width-60']"
            >
              <img v-if="media.type === 'image'" :src="media.url" alt="" />
              <client-only v-else>
                <video :src="media.url" controls></video>
              </client-only>
            </div>
          </div>
          <div class="p-3 bd-highlight">
            <div
              class="d-flex flex-row bd-highlight mb-3 justify-content-between"
            >
              <div class=" bd-highlight">
                <div
                  class="d-flex flex-row bd-highlight mb-3 align-items-center"
                >
                  <div class=" bd-highlight">
                    <i
                      v-if="write.likedByCurrentUser"
                      class="fas fa-heart __heart"
                      @click="change(i)"
                    ></i>
                    <i v-else class="far fa-heart" @click="change(i)"></i>
                  </div>
                  <div class="bd-highlight ml-3">
                    <p class="mb-0 __like">{{ write.likes }}</p>
                  </div>
                </div>
              </div>
              <div class=" bd-highlight">
                <div class="d-flex flex-row bd-highlight">
                  <div class=" bd-highlight">
                    <div
                      class="d-flex flex-row bd-highlight align-items-center"
                    >
                      <div class=" bd-highlight">
                        <i class="far fa-comment-dots"></i>
                      </div>
                      <div class=" bd-highlight ml-2">
                        <p class="mb-0 __like">{{ write.comments }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="bd-highlight ml-5">
                    <div
                      class="d-flex flex-row bd-highlight align-items-center"
                    >
                      <div class=" bd-highlight">
                        <i class="fas fa-share-alt"></i>
                      </div>
                      <div class="bd-highlight">
                        <p class="mb-0 __like ml-2">{{ write.shares }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    post() {
      return this.$store.state.tweets.post
    }
  },
  methods: {
    change(i) {
      this.$store.commit('tweets/reaction', i)
    }
  }
}
</script>

<style>
.width-100 {
  width: 100% !important;
}

.width-60 {
  max-width: 60%;
}
</style>
