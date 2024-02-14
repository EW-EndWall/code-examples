<script>
export default {
  name: "componentFooter",
  props: {
    socialData: Array,
  },
};
</script>

<template>
  <div>
    <footer>
      <ul
        class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 mx-3 wow fadeInUp"
        data-wow-delay="0.3s"
      >
        <li v-for="(item, index) in this.socialData" :key="index">
          <a class="nav-link" :href="item.link" v-if="item.text == 'facebook'">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a
            class="nav-link"
            :href="item.link"
            v-else-if="item.text == 'twitter'"
          >
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a
            class="nav-link"
            :href="item.link"
            v-else-if="item.text == 'instagram'"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
      <hr class="wow fadeInUp" data-wow-delay="0.5s" />
      <div class="wow fadeInUp" data-wow-delay="0.8s">
        <small>
          developed by
          <a
            href="https://endwall.pw"
            rel="nofollow"
            target="_blank"
            title="Designed by EWT"
            className="ml-1"
          >
            EWT
          </a>
        </small>
        <br />
        <strong>© <span id="currentDate"></span> Company, Inc</strong>
      </div>
    </footer>
  </div>
</template>
