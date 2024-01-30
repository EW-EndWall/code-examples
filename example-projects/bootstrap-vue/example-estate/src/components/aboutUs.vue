<script>
export default {
  name: "aboutUs",
  data() {
    return {
      dataImg: "/assets/img/sydney-4078776_640.jpg",
      dataTitle: "about us",
      dataText_1:
        "At Example Estate, we understand that buying, selling, orrenting a property can be a significant and sometimesoverwhelming decision. That's why our team of experienced realestate professionals is dedicated to guiding you through the process with expertise, transparency, and a commitment to your satisfaction.",
      dataText_2:
        "Our mission is to create a seamless and enjoyable real estate experience for our clients by leveraging cutting-edge technology, market insights, and a personalized approach. We aim to be the go-to platform for individuals and businesses seeking reliable and efficient real estate solutions.",
    };
  },
};
</script>

<template>
  <div>
    <div class="container">
      <div class="bg-secondary rounded my-4 mx-2 p-3">
        <!--  -->
        <h2
          class="bg-box rounded p-3 text-uppercase fw-bold fs-3 text-center wow fadeInUp"
          data-wow-delay="0.3s"
        >
          {{ this.dataTitle }}
        </h2>
        <div class="row row-cols-1 row-cols-lg-2 align-items-stretch g-4">
          <div class="col wow fadeInDown" data-wow-delay="0.3s">
            <div class="w-100 h-100">
              <img
                :src="this.dataImg"
                alt="logo"
                class="d-inline-block w-100 h-100 m-auto rounded"
              />
            </div>
          </div>
          <div class="col wow fadeInDown" data-wow-delay="0.3s">
            <div class="bg-box rounded p-3">
              <p>
                {{ this.dataText_1 }}
              </p>
              <p>
                {{ this.dataText_2 }}
              </p>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>
