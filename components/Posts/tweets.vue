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
          <div class="p-3 bd-highlight">
            <div class="d-flex flex-row bd-highlight">
              <div class=" bd-highlight __pic">
                <!-- <img :src="/img/ + write.images" class="w-100" alt="" /> -->
              </div>
              <div class=" bd-highlight __vid">
                <!-- <iframe :src="write.videos" class="w-100"> </iframe> -->
              </div>
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
    return {
      post: [
        {
          body:
            'Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded.',
          profile: 'profile-small-1.jpg',
          time: 20 + ' min ago',
          images: [],
          videos: [],
          author: {
            name: 'Jon Wileyam',
            avatar: 'https://imageurl',
            userProfileUrl: 'https://user/jonwileyam'
          },
          likes: 64,
          shares: 60,
          comments: 41,
          created: '03-16-07-23',
          likedByCurrentUser: false
        },
        {
          body:
            'Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded.',
          profile: 'profile-small-1.jpg',
          time: 20 + ' min ago',
          images: [],
          videos: [],
          author: {
            name: 'Jon Wileyam',
            avatar: 'https://imageurl',
            userProfileUrl: 'https://user/jonwileyam'
          },
          likes: 64,
          shares: 60,
          comments: 41,
          created: '03-16-07-23',
          likedByCurrentUser: false
        },
        {
          body:
            'Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded.',
          profile: 'profile-small-1.jpg',
          time: 20 + ' min ago',
          images: [],
          videos: [],
          author: {
            name: 'Jon Wileyam',
            avatar: 'https://imageurl',
            userProfileUrl: 'https://user/jonwileyam'
          },
          likes: 64,
          shares: 60,
          comments: 41,
          created: '03-16-07-23',
          likedByCurrentUser: false
        },
        {
          body:
            'Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded.',
          profile: 'profile-small-1.jpg',
          time: 20 + ' min ago',
          images: [],
          videos: [],
          author: {
            name: 'Jon Wileyam',
            avatar: 'https://imageurl',
            userProfileUrl: 'https://user/jonwileyam'
          },
          likes: 64,
          shares: 60,
          comments: 41,
          created: '03-16-07-23',
          likedByCurrentUser: false
        },
        {
          body:
            'Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded.',
          profile: 'profile-small-1.jpg',
          time: 20 + ' min ago',
          images: [],
          videos: [],
          author: {
            name: 'Jon Wileyam',
            avatar: 'https://imageurl',
            userProfileUrl: 'https://user/jonwileyam'
          },
          likes: 64,
          shares: 60,
          comments: 41,
          created: '03-16-07-23',
          likedByCurrentUser: false
        },
        {
          body:
            'Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded.',
          profile: 'profile-small-1.jpg',
          time: 20 + ' min ago',
          images: [],
          videos: [],
          author: {
            name: 'Jon Wileyam',
            avatar: 'https://imageurl',
            userProfileUrl: 'https://user/jonwileyam'
          },
          likes: 64,
          shares: 60,
          comments: 41,
          created: '03-16-07-23',
          likedByCurrentUser: false
        },
        {
          body:
            'Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded.',
          profile: 'profile-small-1.jpg',
          time: 20 + ' min ago',
          images: [],
          videos: [],
          author: {
            name: 'Jon Wileyam',
            avatar: 'https://imageurl',
            userProfileUrl: 'https://user/jonwileyam'
          },
          likes: 64,
          shares: 60,
          comments: 41,
          created: '03-16-07-23',
          likedByCurrentUser: false
        },
        {
          body:
            'Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded.',
          profile: 'profile-small-1.jpg',
          time: 20 + ' min ago',
          images: [],
          videos: [],
          author: {
            name: 'Jon Wileyam',
            avatar: 'https://imageurl',
            userProfileUrl: 'https://user/jonwileyam'
          },
          likes: 64,
          shares: 60,
          comments: 41,
          created: '03-16-07-23',
          likedByCurrentUser: false
        }
      ]
    }
  },
  methods: {
    change(i) {
      this.post[i].likedByCurrentUser = !this.post[i].likedByCurrentUser
    }
  }
}
</script>

<style></style>
