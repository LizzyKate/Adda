<template>
  <div class="__dimbel">
    <div class="row align-items-center __evenly p-3">
      <div class="">
        <img
          src="/img/profile-small-37.jpg"
          class="rounded-circle __profile"
          alt=""
        />
      </div>
      <div class="col-8 p-0">
        <div>
          <div class="">
            <div class="input-group">
              <input
                id="validationDefaultUsername"
                type="text"
                class="form-control rounded-pill w-100 p-4 position-relative __write"
                placeholder="Say Something"
                required
                @focus="clickbutton"
              />
              <div class="position-absolute __mycustom">
                <b-button ref="button" v-b-modal.modal-1 class="px-4">
                  Share
                </b-button>

                <b-modal
                  id="modal-1"
                  title="Share Your Mood"
                  class="__mood"
                  ok-title="Post"
                  ok-disabled
                >
                  <b-form-textarea
                    id="textarea"
                    v-model="text"
                    placeholder="Say something"
                    rows="3"
                    max-rows="6"
                    class="__enter"
                  ></b-form-textarea>
                  <FileUpload />
                </b-modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FileUpload from './filesUpload'
export default {
  components: {
    FileUpload
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    clickbutton() {
      this.$refs.button.click()
    }
  }
}
</script>

<style></style>
