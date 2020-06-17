<template>
  <div class="__dimbel">
    <div class="d-flex flex-column bd-highlight pb-3">
      <div class="pt-4 px-3 bd-highlight">
        <h5>{{ text }}</h5>
        <div class="__line"></div>
      </div>
      <div class="px-3 pt-3 bd-highlight">
        <div class="d-flex flex-column bd-highlight mb-3">
          <div class="bd-highlight">
            <div
              v-for="(recent, i) in details"
              :key="i"
              class="d-flex flex-row bd-highlight align-items-center mt-3"
            >
              <div class="px-2 bd-highlight">
                <img
                  :src="/img/ + recent.image"
                  class="rounded-circle __profile"
                  alt=""
                />
              </div>
              <div class="pl-2 bd-highlight">
                <p class="mb-0 __join">{{ recent.news }}</p>
                <p class="mb-0">{{ recent.time }}</p>
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
    details: {
      type: Array,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
