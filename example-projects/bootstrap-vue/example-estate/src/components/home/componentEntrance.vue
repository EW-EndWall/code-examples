<script>
export default {
  name: "componentEntrance",
  props: {
    entranceData: Object,
  },
};
</script>

<template>
  <div>
    <div class="my-4 mx-2">
      <div class="w-100 position-relative" style="height: 60vh">
        <img
          :src="this.entranceData.img"
          class="w-100 h-100 rounded object-fit-cover wow fadeInDown"
          data-wow-delay="0.3s"
        />
        <div class="position-absolute opacity-50 top-0 p-3">
          <h1
            class="bg-light rounded d-inline-block p-2 mb-3 text-capitalize wow fadeInRight"
            data-wow-delay="0.8s"
          >
            {{ this.entranceData.title }}
          </h1>
          <br />
          <span
            class="bg-secondary p-2 rounded wow fadeInRight"
            data-wow-delay="0.8s"
          >
            {{ this.entranceData.text }}
          </span>
        </div>
        <div
          class="position-absolute opacity-75 bottom-0 p-3 w-100 text-center"
        >
          <router-link
            :to="this.entranceData.button.link"
            class="btn btn-lg btn-dark mb-5 text-capitalize wow fadeInDown"
            data-wow-delay="0.8s"
            type="submit"
          >
            {{ this.entranceData.button.text }}
          </router-link>
        </div>
      </div>
      <div
        class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 p-3 text-capitalize text-center position-relative"
        style="top: -3rem; margin-bottom: -3rem"
      >
        <div
          class="col"
          v-for="(item, index) in this.entranceData.award"
          :key="index"
        >
          <div
            class="bg-secondary rounded p-3 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <p class="fw-bold fs-2 wow fadeInDown" data-wow-delay="0.5s">
              {{ item.title }}
            </p>
            <p class="fst-italic wow fadeInDown" data-wow-delay="0.8s">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>
