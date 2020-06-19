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
        <form>
          <div class="">
            <div class="input-group">
              <input
                id="validationDefaultUsername"
                type="text"
                class="form-control rounded-pill w-100 p-4 position-relative __write"
                placeholder="Say Something"
                required
              />
              <div class="position-absolute __mycustom">
                <button type="submit" vlaue="submit" class="btn px-4">
                  SHARE
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style></style>
