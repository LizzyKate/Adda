<template>
  <div>
    <div class="d-flex flex-column bd-highlight mb-3">
      <div
        v-for="(write, i) in post"
        id="target"
        :key="i"
        class="p-2 bd-highlight "
      >
        <div class="__dimbel">
          <div class="d-flex flex-column bd-highlight mb-3">
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
                  <b-nav-item-dropdown :no-caret="false" :right="true">
                    <template slot="button-content">
                      <i class="py-0 fa fa-bars" style="color:#666666"></i>
                    </template>
                    <b-dropdown-item>
                      <div
                        class="d-flex flex-row bd-highlight justify-content-between"
                      >
                        <div class="bd-highlight">
                          <i class="far fa-save"></i>
                        </div>
                        <div class="p-1 bd-highlight">
                          <p class="mb-0">Save Post</p>
                        </div>
                      </div>
                    </b-dropdown-item>
                    <b-dropdown-item>
                      <div
                        class="d-flex flex-row bd-highlight justify-content-between"
                      >
                        <div class="bd-highlight">
                          <i class="fas fa-ban"></i>
                        </div>
                        <div class="p-1 bd-highlight">
                          <p class="mb-0">Hide Post</p>
                        </div>
                      </div>
                    </b-dropdown-item>
                    <b-dropdown-item>
                      <div
                        class="d-flex flex-row bd-highlight justify-content-between"
                      >
                        <div class="bd-highlight">
                          <i class="fas fa-times"></i>
                        </div>
                        <div class="p-1 bd-highlight">
                          <p class="mb-0">Unfollow</p>
                        </div>
                      </div>
                    </b-dropdown-item>
                  </b-nav-item-dropdown>
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
                      <i
                        v-else
                        class="far fa-heart __hearted"
                        @click="change(i)"
                      ></i>
                    </div>
                    <div class="bd-highlight ml-3">
                      <p class="mb-0 __like">{{ write.likes }}</p>
                    </div>
                  </div>
                </div>
                <div class=" bd-highlight">
                  <div class="d-flex flex-row bd-highlight">
                    <div class=" bd-highlight __opinions" @click="more(i)">
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
                          <i
                            v-if="write.shared"
                            class="fas fa-share-alt __shared"
                            @click="shared(i)"
                          ></i>
                          <i
                            v-else
                            class="fas fa-share-alt __opinions"
                            @click="shared(i)"
                          ></i>
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
          <Comments :class="{ hide: post[i].hidden === false }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comments from './comments'
export default {
  components: {
    Comments
  },
  data() {
    return {}
  },
  computed: {
    post(i) {
      return this.$store.state.tweets.post
    }
  },
  methods: {
    change(i) {
      this.$store.commit('tweets/reaction', i)
    },
    more(i) {
      this.$store.commit('tweets/more', i)
    },
    shared(i) {
      this.$store.commit('tweets/given', i)
    }
  }
}
</script>

<style>
#target .width-100 {
  width: 100% !important;
}

#target .width-60 {
  max-width: 60%;
}
#target .hide {
  display: none !important;
}

#target li {
  list-style: none;
}
#target a {
  color: black !important;
  outline: none;
}
#target a::after {
  content: none !important;
}
</style>
