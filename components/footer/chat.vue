<template>
  <div class="bg-white __decrease position-fixed">
    <div class="d-flex flex-column bd-highlight mb-3">
      <div class=" bd-highlight">
        <div
          class="d-flex flex-row bd-highlight __action justify-content-between align-items-center"
        >
          <div class="p-2 bd-highlight">
            <div class=" bd-highlight position-relative">
              <img
                src="/img/profile-small-6.jpg"
                class="rounded-circle __profile"
                alt=""
              />
              <div class="rounded-circle position-absolute __online"></div>
            </div>
          </div>
          <div class="p-2 bd-highlight __look">
            <h6>Robert Maloryan</h6>
            <p v-if="active" class="mb-0">Active Now</p>
            <p v-else class="mb-0">Last seen {{ date }} at {{ time }}</p>
          </div>
          <div class="p-2 bd-highlight __sett">
            <i class="fas fa-times"></i>
          </div>
        </div>
      </div>
      <div class="p-2 bd-highlight">
        <div
          v-for="(discuss, b) in conv"
          :key="b"
          class="d-flex flex-column bd-highlight "
        >
          <div
            v-for="(multiple, a) in discuss.you"
            :key="a"
            class="p-2 bd-highlight w-75 __chats mb-3"
          >
            <p class="mb-0 px-2">
              {{ multiple }}
            </p>
          </div>
          <div
            v-for="(response, a) in discuss.me"
            :key="a"
            class="p-2 bd-highlight w-75 __respond mb-3"
          >
            <p class="mb-0 px-2">
              {{ response }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
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
    }
  }
}
</script>
<style scoped></style>
