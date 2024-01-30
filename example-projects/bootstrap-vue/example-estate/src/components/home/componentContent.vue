<script>
export default {
  name: "componentContent",
  props: {
    contentData: Array,
  },
};
</script>

<template>
  <div>
    <div v-for="(item, index) in this.contentData" :key="index">
      <div class="text-center">
        <h1
          class="bg-title text-capitalize my-3 p-2 rounded wow fadeInUp"
          data-wow-delay="0.3s"
        >
          {{ item.title }}
        </h1>
        <div class="bg-box rounded p-3 wow fadeInUp" data-wow-delay="0.5s">
          {{ item.text }}
        </div>
      </div>
      <!--  -->
      <div
        class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5"
        v-if="item.list"
      >
        <div
          class="col wow fadeInDown"
          data-wow-delay="0.3s"
          v-for="(item2, index) in item.list"
          :key="index"
        >
          <div
            class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg position-relative"
          >
            <img :src="item2.img" class="position-absolute t-0 z-0" />
            <div
              class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 z-1"
            >
              <h3
                class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-capitalize wow fadeInUp"
                data-wow-delay="0.3s"
              >
                {{ item2.title }}
              </h3>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                  <div
                    class="rounded-circle border border-white p-2 wow fadeInLeft"
                    data-wow-delay="0.5s"
                    width="55"
                    height="55"
                  >
                    <i class="fa-solid fa-house-chimney fa-xl"></i>
                  </div>
                </li>
                <li
                  class="d-flex align-items-center me-3 gap-2 text-capitalize wow fadeInRight"
                  data-wow-delay="0.8s"
                >
                  <i class="fa-solid fa-earth-americas"></i>
                  <small class="fst-italic">{{ item2.location }}</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <!--  -->
    </div>
  </div>
</template>
