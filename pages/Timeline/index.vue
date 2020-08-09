<template>
  <div class=" __divide position-relative">
    <bar />
    <div class="container __stop px-0">
      <div class="row">
        <div class="col">
          <favourite />
        </div>
        <div class="col-6">
          <posts />
        </div>
        <div class="col">
          <notifications />
        </div>
      </div>
    </div>
    <div class="position-fixed __up rounded-circle ">
      <i class="far fa-hand-point-up p-3"></i>
    </div>
    <foot class="fixed-bottom" />
  </div>
</template>

<script>
import bar from '~/components/navbar'
import foot from '~/components/footer/root'
import favourite from '~/components/favourite/root'
import notifications from '~/components/Notifications/root'
import posts from '~/components/Posts/root'

export default {
  components: {
    bar,
    foot,
    favourite,
    notifications,
    posts
  }
}
</script>

<style></style>
