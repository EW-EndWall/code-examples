<script>
export default {
  name: "products",
  data() {
    return {
      products: [
        {
          img: "/assets/img/residence-2219972_640.jpg",
          text: "Adorable 2-Bedroom Cottage Nestled In A Quiet Neighborhood. Escape The Hustle And Bustle In This Charming Retreat. Surrounded By Nature, Yet Close To Essential Amenities.",
          price: "10.000",
          link: "/product/1",
        },
        {
          img: "/assets/img/san-francisco-4674351_640.jpg",
          text: "Bright And Airy Studio Apartment With Floor-To-Ceiling Windows. Enjoy Abundant Natural Light And City Views. Perfect For Professionals Or Students. Make This Stylish Space Your Own!",
          price: "10.000",
          link: "/product/2",
        },
        {
          img: "/assets/img/sydney-4078776_640.jpg",
          text: "Elegant 4-Bedroom Home With High-End Finishes. Features A Gourmet Kitchen, Private Garden, And A Luxurious Master Suite. Experience The Epitome Of Luxury Living In This Prestigious Neighborhood.",
          price: "10.000",
          link: "/product/3",
        },
        {
          img: "/assets/img/house-1867187_640.jpg",
          text: "Spacious 3-Bedroom House With A Stunning View. Ideal For Families, Close To Schools And Parks. Enjoy The Tranquility Of The Neighborhood While Being Just Minutes Away From The City Center.",
          price: "10.000",
          link: "/product/4",
        },
        {
          img: "/assets/img/building-7077718_640.jpg",
          text: "Charming 2-Bedroom Apartment With Modern Amenities. Conveniently Located Near Shops, Restaurants, And Public Transportation. Perfect For Urban Living. Don't Miss Out On This Opportunity!",
          price: "10.000",
          link: "/product/5",
        },
      ],
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
          list of products
        </h2>
        <div
          class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 p-3 text-capitalize text-center"
        >
          <!--  -->
          <div
            class="col wow fadeInUp"
            data-wow-delay="0.3s"
            v-for="(item, index) in products"
            :key="index"
          >
            <div class="card shadow-sm bg-box h-100">
              <div class="w-100 position-relative" height="200">
                <img
                  :src="item.img"
                  alt=""
                  class="w-100 h-100 rounded object-fit-cover"
                />
                <div
                  class="text-body-secondary position-absolute top-0 bg-box p-2 rounded m-3"
                >
                  {{ item.price }}$
                </div>
              </div>
              <div class="card-body">
                <p class="card-text">
                  {{ item.text }}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <router-link
                    class="btn btn-sm btn-outline-secondary w-100"
                    :to="item.link"
                  >
                    View
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>
