<template>
  <div class="bg-white __increase position-fixed">
    <div class="d-flex flex-column bd-highlight mb-3">
      <div class="bd-highlight">
        <div
          class="d-flex flex-row bd-highlight __actioned justify-content-between align-items-center fixed-top w-100"
        >
          <div class="p-2 bd-highlight __sett">
            <i class="fas fa-cog"></i>
          </div>
          <div class="p-2 bd-highlight __look">
            <h6 class="mb-0">Search Friends</h6>
          </div>
          <div class="p-2 bd-highlight __sett" @click="close()">
            <i class="fas fa-times"></i>
          </div>
        </div>
      </div>
      <div class="p-2 bd-highlight">
        <div class="d-flex flex-column bd-highlight mt-5">
          <div v-for="(friends, i) in search" :key="i" class="p-2 bd-highlight">
            <div class="d-flex flex-row bd-highlight mb-3">
              <div class="bd-highlight">
                <div class="bd-highlight position-relative">
                  <img
                    :src="`/img/${friends.image}`"
                    class="rounded-circle __profile"
                    alt
                  />
                  <div class="rounded-circle position-absolute __online"></div>
                </div>
              </div>
              <div class="bd-highlight">
                <h6 class="__jon ml-3" @click="setPerson(i)">
                  {{ friends.name }}
                </h6>
                <p v-if="friends.friend" class="mb-0 __mess ml-3">
                  {{ friends.bio }}
                </p>
                <div v-if="!friends.friend">
                  <button class="__add" @click="add(i)">
                    Add Friend
                  </button>
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
  props: ['display'],
  data() {
    return {}
  },
  computed: {
    search() {
      return this.$store.state.friend.People
    }
  },
  methods: {
    setPerson(i) {
      this.$store.commit('chat/setPersonIndex', i)
    },
    add(i) {
      this.$store.commit('friend/show', i)
    },
    close() {
      this.$store.commit('friend/close')
    }
  }
}
</script>
<style scoped></style>
