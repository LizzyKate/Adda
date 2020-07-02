<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="primary"
      class="navbar-horizontal __space "
      fixed="top"
    >
      <div class="col">
        <ul class="navbar-nav justify-content-around">
          <li class="nav-item">
            <a class="nav-link nav-link-icon __diff" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <div class="nav-link nav-link-icon __spec " @click="pop()">
              Message
            </div>
          </li>
          <li class="nav-item">
            <div
              class="nav-link nav-link-icon __spec"
              href="#"
              @click="notify()"
            >
              Notification
            </div>
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
    <div>
      <message v-show="message" />
    </div>
    <div>
      <notifications v-show="notifications" />
    </div>
  </div>
</template>

<script>
import message from './Dropdowns/message'
import notifications from './Dropdowns/notification'

export default {
  components: {
    message,
    notifications
  },
  data() {
    return {
      message: false,
      notifications: false
    }
  },
  methods: {
    pop() {
      this.message = !this.message
      this.notifications = false
    },
    notify() {
      this.notifications = !this.notifications
      this.message = false
    }
  }
}
</script>

<style></style>
