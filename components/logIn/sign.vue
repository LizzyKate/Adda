<template>
  <div>
    <div class="px-5 mx-auto">
      <h3 class="text-center my-5 __create font-weight-bolder">
        Create An Account
      </h3>
      <form action="" class="text-center fill mb-5">
        <div class="__newComer p-3">
          <h5 class="text-white ">Welcome To Adda</h5>
        </div>
        <div class="detail bg-white p-5">
          <input
            id="defaultRegisterFormEmail"
            type="email"
            class="form-control mb-4 border-top-0 border-right-0 border-left-0 __info"
            placeholder="E-mail"
          />

          <div class="form-row mb-4">
            <div class="col">
              <!-- First name -->
              <input
                id="defaultRegisterFormFirstName"
                type="text"
                class="form-control border-top-0 border-right-0 border-left-0 __info"
                placeholder="First name"
              />
            </div>
            <div class="col ml-4">
              <!-- Last name -->
              <input
                id="defaultRegisterFormLastName"
                type="text"
                class="form-control border-top-0 border-right-0 border-left-0 __info"
                placeholder="Last name"
              />
            </div>
          </div>

          <!-- Password -->
          <input
            id="defaultRegisterFormPassword"
            type="password"
            class="form-control border-top-0 border-right-0 border-left-0 __info mb-4"
            placeholder="Password"
            aria-describedby="defaultRegisterFormPasswordHelpBlock"
          />

          <div class="form-row mb-4">
            <div class="col">
              <select
                class="browser-default custom-select mb-4 border-top-0 border-right-0 border-left-0 __info "
              >
                <option
                  value=""
                  disabled
                  selected
                  class="font-weight-bolder __select"
                  >Gender</option
                >
                <option value="1" class="__select font-weight-light"
                  >Male</option
                >
                <option value="2" class="__select font-weight-light"
                  >Female</option
                >
              </select>
            </div>
            <div class="col ml-4">
              <!-- Last name -->
              <select
                class="browser-default custom-select mb-4 border-top-0 border-right-0 border-left-0 __info "
              >
                <option
                  value=""
                  disabled
                  selected
                  class="font-weight-bolder __select"
                  >Age</option
                >
                <option value="1" class="__select font-weight-light"
                  >18+</option
                >
                <option value="2" class="__select font-weight-light"
                  >18-</option
                >
              </select>
            </div>
          </div>

          <select
            class="browser-default custom-select mb-4 border-top-0 border-right-0 border-left-0 __info"
          >
            <option
              value=""
              disabled
              selected
              class="font-weight-bolder __select"
              >Country</option
            >
            <option value="1" class="__select font-weight-light"
              >Bangladesh</option
            >
            <option value="2" class="__select font-weight-light"
              >Noakhali</option
            >
            <option value="3" class="__select font-weight-light"
              >Austraila</option
            >
            <option value="4" class="__select font-weight-light">China</option>
          </select>
          <button
            class="text-white font-weight-bolder py-3 border-0 w-100 __account mb-3"
          >
            Create Account
          </button>
          <h6 class="__accept font-weight-bold mb-0">
            I have read & accepted the
            <span class="__terms">terms of use</span>
          </h6>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped></style>
