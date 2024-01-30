<script>
export default {
  name: "home",
  data() {
    return {
      contentData: {
        img: "/assets/img/mia.jpg",
        title: "About [Your Name]",
        text: [
          "Hello there! I’m [Your Name], and I’m delighted to have you visit my corner of the internet. Allow me to introduce myself and give you a glimpse into who I am.",
          "I’m a [Your Age]-year-old [Your Occupation/Student Status] from [Your Location]. I have a passion for [Your Interests/Hobbies], and  you’ll often find me [a description of what you love to do in your free time, e.g., hiking in the great outdoors, experimenting with new recipes in the kitchen, or delving into a good book].",
        ],
      },
    };
  },
};
</script>

<template>
  <div>
    <div class="container wow fadeInUp" data-wow-delay="0.3s">
      <div class="row col-xl-10 col-xxl-8">
        <div class="col-lg-4 p-0">
          <div class="rounded p-3 wow fadeInUp" data-wow-delay="0.5s">
            <img :src="this.contentData.img" class="w-100 rounded" />
          </div>
        </div>
        <div class="col-lg-8 p-3 p-lg-5 pt-lg-3">
          <div class="wow fadeInUp" data-wow-delay="0.8s">
            <h1 class="text-capitalize">{{ this.contentData.title }}</h1>
            <hr />
          </div>
          <div v-for="(item, index) in this.contentData.text" :key="index">
            <p class="fs-5 wow fadeInUp" data-wow-delay="1.0s">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
