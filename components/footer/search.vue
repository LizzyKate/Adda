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
    <Friends
      v-if="display"
      :display="display"
      :class="display ? 'slide-in-bottom' : 'slide-out-bottom'"
    />
  </div>
</template>
<script>
import Friends from './friends'
export default {
  components: {
    Friends
  },
  data() {
    return {}
  },
  computed: {
    display() {
      return this.$store.state.friend.hide
    }
  },
  methods: {
    hidden() {
      this.$store.commit('friend/hidden')
    }
  }
}
</script>
<style scoped></style>
