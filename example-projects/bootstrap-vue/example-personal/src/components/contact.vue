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
    <div class="container wow fadeInUp" data-wow-delay="0.3s">
      <div class="p-3 p-lg-5 pt-lg-3">
        <div class="wow fadeInUp" data-wow-delay="0.5s">
          <h1 class="text-capitalize">{{ this.dataTitle }}</h1>
          <hr />
        </div>
        <p class="fs-5 wow fadeInUp" data-wow-delay="0.8s">
          <strong> Mail : </strong>
          {{ this.dataMail }}
        </p>
        <p class="fs-5 wow fadeInUp" data-wow-delay="1.0s">
          <strong> Address : </strong>
          {{ this.dataAddress }}
        </p>
        <p class="fs-5 wow fadeInUp" data-wow-delay="1.3s">
          <strong> Telephone : </strong>
          {{ this.dataPhone }}
        </p>
      </div>
    </div>
  </div>
</template>
