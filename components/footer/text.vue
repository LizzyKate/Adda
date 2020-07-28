<template>
  <div class="position-relative">
    <div class="bg-white __arrow mr-5 p-3">
      <div class="input-group">
        <input
          type="text"
          class="form-control border-0 __our"
          placeholder="Text Message"
          aria-label="Username"
          aria-describedby="basic-addon"
        />
        <div class="input-group-prepend">
          <span id="basic-addon" class="input-group-text border-0 __send">
            <i class="fas fa-paper-plane"></i>
          </span>
        </div>
      </div>
    </div>
    <Chat />
  </div>
</template>
<script>
import Chat from './chat'
export default {
  components: {
    Chat
  }
}
</script>
<style></style>
