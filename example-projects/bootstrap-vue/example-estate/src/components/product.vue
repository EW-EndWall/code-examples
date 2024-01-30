<script>
export default {
  name: "product",
  data() {
    return {
      productData: Array,
      products: {
        1: {
          img: "/assets/img/residence-2219972_640.jpg",
          title: "3 + 1 Home",
          text: "Adorable 2-Bedroom Cottage Nestled In A Quiet Neighborhood. Escape The Hustle And Bustle In This Charming Retreat. Surrounded By Nature, Yet Close To Essential Amenities.",
          price: "10.000",
        },
        2: {
          img: "/assets/img/san-francisco-4674351_640.jpg",
          title: "2 + 1 Home",
          text: "Bright And Airy Studio Apartment With Floor-To-Ceiling Windows. Enjoy Abundant Natural Light And City Views. Perfect For Professionals Or Students. Make This Stylish Space Your Own!",
          price: "10.000",
        },
        3: {
          img: "/assets/img/sydney-4078776_640.jpg",
          title: "3 + 2 Home",
          text: "Elegant 4-Bedroom Home With High-End Finishes. Features A Gourmet Kitchen, Private Garden, And A Luxurious Master Suite. Experience The Epitome Of Luxury Living In This Prestigious Neighborhood.",
          price: "10.000",
        },
        4: {
          img: "/assets/img/house-1867187_640.jpg",
          title: "1 + 0 Home",
          text: "Spacious 3-Bedroom House With A Stunning View. Ideal For Families, Close To Schools And Parks. Enjoy The Tranquility Of The Neighborhood While Being Just Minutes Away From The City Center.",
          price: "10.000",
        },
        5: {
          img: "/assets/img/building-7077718_640.jpg",
          title: "1 + 1 Home",
          text: "Charming 2-Bedroom Apartment With Modern Amenities. Conveniently Located Near Shops, Restaurants, And Public Transportation. Perfect For Urban Living. Don't Miss Out On This Opportunity!",
          price: "10.000",
        },
      },
    };
  },
  created() {
    const dataId = this.$route.params.id;
    this.productData = this.products[dataId];
  },
};
</script>

<template>
  <div>
    <div class="container my-5 wow fadeInUp" data-wow-delay="0.3s">
      <div class="card details-card p-0">
        <div class="row" v-if="this.productData">
          <div class="col-md-6 col-sm-12 my-auto">
            <img
              class="img-fluid p-1"
              :src="this.productData.img"
              style="border-radius: 0.5rem"
            />
          </div>
          <div class="col-md-6 col-sm-12 description-container p-5 bg-box">
            <div class="main-description">
              <p class="product-category mb-0">Sell</p>
              <h3>{{ this.productData.title }}</h3>
              <hr />
              <p class="product-price">{{ this.productData.price }}$</p>
              <router-link class="btn btn-light btn-lg" to="/contact/">
                Contact Us
              </router-link>
              <hr />
              <p class="mb-4">
                {{ this.productData.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
