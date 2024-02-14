<script>
export default {
  name: "componentFooter",
  props: {
    menuData: Array,
    socialData: Array,
  },
};
</script>

<template>
  <div>
    <footer class="py-3">
      <div class="row g-4 row-cols-1 row-cols-lg-3 w-100 px-5">
        <div class="col">
          <div
            class="d-flex text-center m-auto w-100 h-100 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <img
              src="/assets/img/logo.png"
              alt="logo"
              class="d-inline-block w-75 h-auto m-auto"
            />
          </div>
        </div>
        <div class="col wow fadeInUp" data-wow-delay="0.5s">
          <p class="text-uppercase fw-bold fs-3 bg-box p-2 rounded">
            quick menu
          </p>
          <ul class="navbar-nav mx-3 text-capitalize" v-if="menuData">
            <li class="nav-item" v-for="(item, index) in menuData" :key="index">
              <router-link class="nav-link" :to="item.link">
                <i class="fa-solid fa-chevron-right"></i>
                {{ item.text }}</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col wow fadeInUp" data-wow-delay="0.8s">
          <p class="text-uppercase fw-bold fs-3 bg-box p-2 rounded">social</p>
          <ul
            class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 mx-3"
            v-if="socialData"
          >
            <li v-for="(item, index) in socialData" :key="index">
              <a
                class="nav-link"
                v-if="item.text == 'facebook'"
                :href="item.link"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a
                class="nav-link"
                v-else-if="item.text == 'twitter'"
                :href="item.link"
              >
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a
                class="nav-link"
                v-else-if="item.text == 'instagram'"
                :href="item.link"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div
            class="d-flex justify-content-center align-items-center gap-2 m-auto"
          >
            <i class="fa-solid fa-map-location-dot"></i>
            <p class="my-auto">123 Street, New York, USA</p>
          </div>
        </div>
      </div>
      <hr />
      <div class="text-center mt-2 wow fadeInDown" data-wow-delay="0.3s">
        <p id="currentDate">2023-</p>
        <p class="m-0">all rights reserved.</p>
        <br />
        <small>
          developed by
          <a
            href="https://endwall.pw"
            rel="nofollow"
            target="_blank"
            title="Designed by EWT"
          >
            EWT
          </a>
        </small>
      </div>
    </footer>
  </div>
</template>
