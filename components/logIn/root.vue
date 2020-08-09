<template>
  <div class="d-flex flex-row bd-highlight justify-content-between ">
    <div class=" bd-highlight w-50">
      <Banner />
    </div>
    <div class=" bd-highlight w-50">
      <Account />
    </div>
  </div>
</template>
<script>
import Banner from './banner'
import Account from './account'

export default {
  components: {
    Banner,
    Account
  }
}
</script>
<style scoped></style>
