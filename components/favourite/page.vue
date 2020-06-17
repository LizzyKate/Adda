<template>
  <div class="__dimbel">
    <div class="d-flex flex-column bd-highlight mb-3">
      <div class="pt-4 px-3 bd-highlight">
        <h5>{{ page }}</h5>
        <div class="__line"></div>
      </div>
      <div class="px-3 pt-3 bd-highlight">
        <div class="d-flex flex-column bd-highlight mb-5">
          <div class=" bd-highlight">
            <div
              v-for="(pick, i) in choose"
              :key="i"
              class="d-flex flex-row bd-highlight  align-items-center mt-3"
            >
              <div class="px-2 bd-highlight">
                <img
                  :src="/img/ + pick.image"
                  class="rounded-circle __profile"
                  alt=""
                />
              </div>
              <div class="col bd-highlight">
                <p class="mb-0 __join">{{ pick.event }}</p>
                <p class="mb-0">{{ pick.task }}</p>
              </div>
              <div class=" bd-highlight">
                <i
                  v-if="pick.liked"
                  class="fas fa-heart __heart"
                  @click="change(i)"
                ></i>
                <i v-else class="far fa-heart" @click="change(i)"></i>
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
  props: {
    choose: {
      type: Array,
      required: true
    },
    page: {
      type: String,
      required: true
    }
  },

  methods: {
    change(i) {
      this.choose[i].liked = !this.choose[i].liked
    }
  }
}
</script>

<style></style>
