<template>
  <div v-if="hidden" class="bg-white __decrease position-fixed">
    <div class="d-flex flex-column bd-highlight mb-3">
      <div class=" bd-highlight">
        <div
          class="d-flex flex-row bd-highlight __actioned justify-content-between align-items-center"
        >
          <div class="p-2 bd-highlight">
            <div class=" bd-highlight position-relative">
              <img
                :src="'/img/' + chattingWith.image"
                class="rounded-circle __profile"
                alt=""
              />
              <div class="rounded-circle position-absolute __online"></div>
            </div>
          </div>
          <div class="p-2 bd-highlight __look">
            <h6>{{ chattingWith.name }}</h6>
            <p v-if="active" class="mb-0">Active Now</p>
            <p v-else class="mb-0">Last seen {{ date }} at {{ time }}</p>
          </div>
          <div class="p-2 bd-highlight __sett">
            <i class="fas fa-times" @click="disappear()"></i>
          </div>
        </div>
      </div>
      <div class="p-2 bd-highlight mt-5">
        <div
          v-for="(discuss, b) in conv"
          :key="b"
          class="d-flex flex-column bd-highlight"
        >
          <div
            class="p-2 bd-highlight w-75 mb-3"
            :class="discuss.sender ? '__respond' : '__chats'"
          >
            <p class="mb-0 px-2">
              {{ discuss.message }}
            </p>
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
    chattingWith() {
      return this.$store.state.friend.People[
        this.$store.state.chat.currentChatWith
      ]
    },
    conv() {
      return this.$store.state.chat.conv
    },
    date() {
      return this.$store.state.chat.date
    },
    time() {
      return this.$store.state.chat.time
    },
    active() {
      return this.$store.state.chat.active
    },
    hidden() {
      return this.$store.state.chat.remove
    }
  },
  methods: {
    disappear() {
      this.$store.commit('chat/hide')
    }
  }
}
</script>
<style scoped></style>
