<script>
export default {
  name: "componentServices",
  props: {
    servicesData: Array,
  },
};
</script>

<template>
  <div>
    <h1
      class="bg-title text-capitalize my-3 p-2 rounded text-center wow fadeInUp"
      data-wow-delay="0.3s"
    >
      services
    </h1>
    <div
      class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 p-3 text-center mb-5"
    >
      <div
        class="col wow fadeInUp"
        data-wow-delay="0.3s"
        v-for="(item, index) in this.servicesData"
        :key="index"
      >
        <div class="feature rounded bg-box p-3">
          <div
            class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-1 mb-3 p-3 rounded wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <i :class="item.icon"></i>
          </div>
          <h3
            class="fs-2 text-body-emphasis text-capitalize wow fadeInUp"
            data-wow-delay="0.5s"
          >
            {{ item.title }}
          </h3>
          <p class="wow fadeInUp" data-wow-delay="0.8s">
            {{ item.text }}
          </p>
          <router-link
            :to="item.link"
            class="icon-link text-uppercase fw-bold wow fadeInUp"
            data-wow-delay="1s"
          >
            detail
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
