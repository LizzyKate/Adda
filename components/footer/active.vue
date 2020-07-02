<template>
  <div class="bg-white __arrow p-3">
    <div
      class="d-flex flex-row bd-highlight align-items-center justify-content-between"
    >
      <!-- <template slot="prev"> -->
      <div
        class="px-2 bd-highlight rounded-circle __less "
        :disabled="atHeadOfList"
        @click="moveCarousel(-1)"
      >
        <i class="fas fa-less-than"></i>
      </div>
      <!-- </template> -->
      <div class="px-2 bd-highlight __flow">
        <div class="d-flex flex-row bd-highlight">
          <div
            v-for="(image, i) in active"
            :key="i"
            class="mr-3 bd-highlight position-relative"
            :style="{
              transform: 'translateX' + '(' + currentOffset + 'px' + ')'
            }"
            :class="{ animation: moveCarousel }"
          >
            <img
              :src="`/img/${image.name}`"
              class="rounded-circle __profile"
              alt=""
            />
            <div class="rounded-circle position-absolute __online"></div>
          </div>
        </div>
      </div>
      <!-- <template slot="next"> -->
      <div
        class="px-2 bd-highlight rounded-circle __less"
        :disabled="atEndOfList"
        @click="moveCarousel(1)"
      >
        <i class="fas fa-greater-than"></i>
      </div>
      <!-- </template> -->
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      currentOffset: 0,
      windowSize: 6.5,
      paginationFactor: 40,
      animation: 'animate__animated animate__slideInRight'
    }
  },
  computed: {
    active() {
      return this.$store.state.active.action
    },
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.active.length - this.windowSize)
      )
    },
    atHeadOfList() {
      return this.currentOffset === 0
    }
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor
      }
    }
  }
}
</script>
<style></style>
