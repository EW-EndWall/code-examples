<script>
export default {
  name: "contact",
  data() {
    return {
      dataTitle: "contact",
      dataAddress: "123 Street, New York, USA",
      dataMail: "info@example.com",
      dataPhone: "+012 345 6789",
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
        <div
          class="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 text-capitalize text-center"
        >
          <div class="col wow fadeInDown" data-wow-delay="0.3s">
            <iframe
              src="https://yandex.com.tr/map-widget/v1/-/CCUZBcqGOA"
              class="rounded"
              width="100%"
              height="400"
              frameborder="0"
            ></iframe>
          </div>
          <div class="col m-auto wow fadeInDown" data-wow-delay="0.3s">
            <div class="bg-box rounded p-3">
              <div
                class="d-flex justify-content-center align-items-center gap-2 m-auto"
              >
                <i class="fa-solid fa-map-location-dot"></i>
                <p class="my-auto">{{ this.dataAddress }}</p>
              </div>
              <div
                class="d-flex justify-content-center align-items-center gap-2 m-auto"
              >
                <i class="fa-regular fa-envelope"></i>
                <p class="my-auto">{{ this.dataMail }}</p>
              </div>
              <div
                class="d-flex justify-content-center align-items-center gap-2 m-auto"
              >
                <i class="fa-solid fa-phone"></i>
                <p class="my-auto">{{ this.dataPhone }}</p>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>
