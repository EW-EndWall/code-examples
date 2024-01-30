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
    <header class="wow fadeInDown" data-wow-delay="0.3s">
      <a
        href="/"
        class="d-block text-center mt-3 wow fadeInDown"
        data-wow-delay="0.5s"
      >
        <img src="/assets/img/favicon2.png" alt="logo" width="90" height="90" />
      </a>
      <p class="text-center my-3 wow fadeInDown" data-wow-delay="0.8s">
        “ sample slogan ”
      </p>
      <nav
        class="navbar navbar-expand-lg text-center text-center wow fadeInDown"
        data-wow-delay="1.0s"
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler m-auto border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbars"
            aria-controls="navbars"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="navbar-collapse justify-content-md-center collapse"
            id="navbars"
          >
            <ul class="navbar-nav">
              <li
                class="nav-item"
                v-for="(item, index) in menuData"
                :key="index"
              >
                <router-link class="nav-link" :to="item.link">{{
                  item.text
                }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
