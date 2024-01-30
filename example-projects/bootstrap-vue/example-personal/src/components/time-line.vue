<script>
export default {
  name: "timeLine",
  data() {
    return {
      datatimeLine: [
        {
          date: "01.01.2015",
          title: "first job",
          text: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          date: "01.01.2014",
          title: "university completed",
          text: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <div class="container wow fadeInUp" data-wow-delay="0.3s">
      <div v-for="(item, index) in datatimeLine" :key="index">
        <div class="row col-xl-10 col-xxl-8" v-if="index % 2">
          <div
            class="col-lg-4 p-0 m-auto p-3 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div class="date">
              <span>{{ item.date }}</span>
            </div>
          </div>
          <div class="col-lg-8 p-3 p-lg-5 pt-lg-3">
            <div class="wow fadeInUp" data-wow-delay="0.8s">
              <h1 class="text-capitalize">{{ item.title }}</h1>
              <hr />
            </div>
            <p class="fs-5 wow fadeInUp" data-wow-delay="1.0s">
              {{ item.text }}
            </p>
          </div>
        </div>
        <!--  -->
        <div class="row col-xl-10 col-xxl-8 flex-lg-row-reverse" v-else>
          <div
            class="col-lg-4 p-0 m-auto p-3 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div class="date">
              <span>{{ item.date }}</span>
            </div>
          </div>
          <div class="col-lg-8 p-3 p-lg-5 pt-lg-3">
            <div class="wow fadeInUp" data-wow-delay="0.8s">
              <h1 class="text-capitalize text-end">{{ item.title }}</h1>
              <hr />
            </div>
            <p class="fs-5 wow fadeInUp" data-wow-delay="1.0s">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
