<template>
  <div class="position-relative">
    <div id="target" class="bg-white __search p-3 ml-5">
      <div class="input-group">
        <input
          type="text"
          class="form-control border-0 __your"
          placeholder="Search Your Friends"
          aria-label="Username"
          aria-describedby="basic-addon"
          @focus="hidden()"
        />
        <div class="input-group-prepend">
          <span id="basic-addon" class="input-group-text border-0 __sub">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
    </div>
    <div v-show="hide" class="bg-white __increase position-fixed">
      <div class="d-flex flex-column bd-highlight mb-3">
        <div class="bd-highlight">
          <div
            class="d-flex flex-row bd-highlight __action justify-content-between align-items-center"
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
          <div class="d-flex flex-column bd-highlight">
            <div
              v-for="(friends, i) in search"
              :key="i"
              class="p-2 bd-highlight"
            >
              <div class="d-flex flex-row bd-highlight mb-3">
                <div class="bd-highlight">
                  <div class="bd-highlight position-relative">
                    <img
                      :src="`/img/${friends.image}`"
                      class="rounded-circle __profile"
                      alt
                    />
                    <div
                      class="rounded-circle position-absolute __online"
                    ></div>
                  </div>
                </div>
                <div class="bd-highlight">
                  <h6 class="__jon ml-3">{{ friends.name }}</h6>
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
  </div>
</template>
<script>
// import Friends from './friends'
export default {
  // components: {
  //   Friends
  // },
  data() {
    return {
      hide: false
    }
  },
  computed: {
    search() {
      return this.$store.state.friend.People
    }
  },
  methods: {
    hidden() {
      this.hide = true
    },
    close() {
      this.hide = !this.hide
    },
    add(i) {
      this.$store.commit('friend/show', i)
    }
  }
}
</script>
<style scoped></style>
