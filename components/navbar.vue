<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="primary"
      class="navbar-horizontal __space"
    >
      <div class="col">
        <ul class="navbar-nav justify-content-around">
          <li class="nav-item">
            <a class="nav-link nav-link-icon __diff" href="#">
              Home
            </a>
          </li>
          <li v-for="(spec, i) in list" :key="i" class="nav-item">
            <a class="nav-link nav-link-icon __spec" href="#">
              {{ spec }}
            </a>
          </li>
        </ul>
      </div>
      <div class="__shift">
        <a href="#">
          <img src="/img/logo.png" alt="" />
        </a>
      </div>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <!-- <b-navbar-nav class="ml-auto"> -->
        <div class="d-flex align-items-center ml-auto">
          <div class="d-flex align-items-center mr-5">
            <div>
              <b-form-input
                class=" border-bottom border-top-0 border-right-0 border-left-0 __parent "
                placeholder="Search"
              ></b-form-input>
            </div>
            <div>
              <i class="fas fa-search"></i>
            </div>
          </div>
          <div>
            <img
              src="/img/profile-small-1.jpg"
              class="rounded-circle __profile"
              alt=""
            />
          </div>
        </div>
        <!-- </b-navbar-nav> -->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['Message', 'Notification']
    }
  }
}
</script>

<style></style>
