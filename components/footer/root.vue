<template>
  <div class="">
    <div class=" mr-0 px-0">
      <b-row class="text-center">
        <div class="px-0 __push">
          <search />
        </div>
        <b-col cols="6" class=" px-0 __shake">
          <active />
        </b-col>
        <div class="px-0 __push">
          <test />
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
import search from './search'
import active from './active'
import test from './text'

export default {
  components: {
    search,
    active,
    test
  }
}
</script>

<style></style>
