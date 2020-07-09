<template>
  <div v-show="close" class="bg-white __increase position-fixed">
    <!-- <div class="d-flex flex-column bd-highlight mb-3">
      <div class=" bd-highlight">
        <div
          class="d-flex flex-row bd-highlight __action justify-content-between align-items-center"
        >
          <div class="p-2 bd-highlight __sett">
            <i class="fas fa-cog"></i>
          </div>
          <div class="p-2 bd-highlight __look">
            <h6 class="mb-0">Search Friends</h6>
          </div>
          <div class="p-2 bd-highlight __sett" @click="closed()">
            <i class="fas fa-times"></i>
          </div>
        </div>
      </div>
      <div class="p-2 bd-highlight">
        <div class="d-flex flex-column bd-highlight ">
          <div class="p-2 bd-highlight">
            <div class="d-flex flex-row bd-highlight mb-3">
              <div class=" bd-highlight">
                <div class=" bd-highlight position-relative">
                  <img
                    src="/img/profile-small-1.jpg"
                    class="rounded-circle __profile"
                    alt=""
                  />
                  <div class="rounded-circle position-absolute __online"></div>
                </div>
              </div>
              <div class=" bd-highlight ml-3">
                <h6 class="__jon">Jon Wilem</h6>
                <p class="mb-0 __mess">Many Desktop Publishing</p>
              </div>
            </div>
          </div>
          <div class="p-2 bd-highlight">
            <div class="d-flex flex-row bd-highlight mb-3">
              <div class=" bd-highlight">
                <div class=" bd-highlight position-relative">
                  <img
                    src="/img/profile-small-1.jpg"
                    class="rounded-circle __profile"
                    alt=""
                  />
                  <div class="rounded-circle position-absolute __online"></div>
                </div>
              </div>
              <div class=" bd-highlight ml-3">
                <h6 class="__jon">Jon Wilem</h6>
                <p class="mb-0 __mess">Add Friend</p>
              </div>
            </div>
          </div>
          <div class="p-2 bd-highlight">
            <div class="d-flex flex-row bd-highlight mb-3">
              <div class=" bd-highlight">
                <div class=" bd-highlight position-relative">
                  <img
                    src="/img/profile-small-1.jpg"
                    class="rounded-circle __profile"
                    alt=""
                  />
                  <div class="rounded-circle position-absolute __online"></div>
                </div>
              </div>
              <div class=" bd-highlight ml-3">
                <h6 class="__jon">Jon Wilem</h6>
                <p class="mb-0 __mess">Many Desktop Publishing</p>
              </div>
            </div>
          </div>
          <div class="p-2 bd-highlight">
            <div class="d-flex flex-row bd-highlight mb-3">
              <div class=" bd-highlight">
                <div class=" bd-highlight position-relative">
                  <img
                    src="/img/profile-small-1.jpg"
                    class="rounded-circle __profile"
                    alt=""
                  />
                  <div class="rounded-circle position-absolute __online"></div>
                </div>
              </div>
              <div class=" bd-highlight ml-3">
                <h6 class="__jon">Jon Wilem</h6>
                <p class="mb-0 __mess">Add Friend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      close: false
    }
  },
  // methods: {
  //   closed() {
  //     this.hide = !this.hide
  //   }
  // }
  watch: {}
}
</script>
<style scoped></style>
