<template>
  <div class=" __divide">
    <div class="container pt-5 px-0">
      <div class="row">
        <div class="col">
          <favourite />
        </div>
        <div class="col-6">
          2 of 3 (wider)
        </div>
        <div class="col">
          <notifications />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import favourite from '~/components/favourite/root'
import notifications from '~/components/Notifications/root'

export default {
  components: {
    favourite,
    notifications
  }
}
</script>

<style></style>
