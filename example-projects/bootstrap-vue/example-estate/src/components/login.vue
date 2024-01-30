<script>
export default {
  name: "login",
  methods: {
    loginFunc() {
      this.$router.push("/products/");
    },
  },
};
</script>

<template>
  <div>
    <div class="container">
      <div class="my-4 mx-2 p-3">
        <!--  -->
        <h2
          class="bg-box rounded p-3 text-uppercase fw-bold fs-3 text-center wow fadeInUp"
          data-wow-delay="0.3s"
        >
          login
        </h2>
        <div
          class="bg-secondary modal-content rounded-4 wow fadeInDown"
          data-wow-delay="0.5s"
        >
          <div class="modal-body p-5">
            <form class="">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control rounded-3"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <button
                class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                type="submit"
                @click="loginFunc()"
              >
                Login
              </button>
              <hr class="my-4" />
              <h2 class="fs-5 fw-bold mb-3 text-center">
                Or use a third-party
              </h2>
              <button
                class="w-100 py-2 mb-2 btn btn-outline-light rounded-3"
                type="submit"
              >
                Login with Twitter
              </button>
              <button
                class="w-100 py-2 mb-2 btn btn-outline-dark rounded-3"
                type="submit"
              >
                Login with Facebook
              </button>
              <button
                class="w-100 py-2 mb-2 btn btn-outline-light rounded-3"
                type="submit"
              >
                Login with GitHub
              </button>
            </form>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>
