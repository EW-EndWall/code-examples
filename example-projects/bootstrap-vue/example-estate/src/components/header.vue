<script>
export default {
  name: "componentHeader",
  props: {
    menuData: Array,
  },
};
</script>

<template>
  <div>
    <header class="px-5 py-2 wow fadeInDown" data-wow-delay="0.3s">
      <div class="container">
        <div
          class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
        >
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            style="width: 100px"
          >
            <img src="/assets/img/logo.png" alt="logo" class="w-100 h-100" />
          </a>

          <ul
            class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 mx-3 text-capitalize"
            v-if="menuData"
          >
            <li v-for="(item, index) in menuData" :key="index">
              <router-link class="nav-link px-2" :to="item.link">{{
                item.text
              }}</router-link>
            </li>
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              class="form-control form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div class="text-end">
            <router-link class="btn btn-outline-secondary me-2" to="/login/">
              Login
            </router-link>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
