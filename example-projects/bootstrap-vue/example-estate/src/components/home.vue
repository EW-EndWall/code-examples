<script setup>
import componentEntrance from "./home/componentEntrance.vue";
import componentContent from "./home/componentContent.vue";
import componentServices from "./home/componentServices.vue";
</script>

<script>
export default {
  name: "home",
  data() {
    return {
      entranceData: {
        title: "Discover Houses",
        text: "New, modern houses",
        img: "/assets/img/residence-2219972_640.jpg",
        button: {
          text: "All Home",
          link: "/products/",
        },
        award: [
          {
            title: "15Y+",
            text: "Years Of Experience",
          },
          {
            title: "10M+",
            text: "Happy Customer",
          },
          {
            title: "4M+",
            text: "Houses On Sale",
          },
        ],
      },
      contentData: [
        {
          title: "Welcome To Your Dream Home!",
          text: "Are you currently on the quest to find your ideal home sweet home, that perfect sanctuary where cherished memories are made? Your search concludes here! Our real estate platform is wholeheartedly committed to transforming the dream of owning a home into a tangible and fulfilling reality, ensuring that every step of your journey is marked by unparalleled support and exceptional service.",
          list: [
            {
              title: "In The City A House",
              img: "/assets/img/sydney-4078776_640.jpg",
              location: "Dubai",
            },
            {
              title: "Detached Housee",
              img: "/assets/img/house-1867187_640.jpg",
              location: "America",
            },
            {
              title: "Modern House",
              img: "/assets/img/building-7077718_640.jpg",
              location: "California",
            },
          ],
        },
        {
          title:
            "Your All-In-One Destination For Home, Office, Hotel, And Rental Dreams!",
          text: "Are you on the lookout for the ideal workplace, a thriving hotel, or a rental space that perfectly aligns with your needs? Look no further! Our comprehensive real estate platform is not only dedicated to turning your dream of owning a home into a reality but is also your ultimate destination for securing the perfect business premises, a flourishing hotel, or a rental space that suits your preferences. With a commitment to excellence, we aim to provide unparalleled support throughout your journey, ensuring that whether you're establishing a new business, managing a hotel, or seeking the ideal rental, every step is marked by exceptional service and utmost satisfaction.",
        },
      ],
      servicesData: [
        {
          title: "Workplace",
          text: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
          icon: "fa-solid fa-building",
          link: "/products/",
        },
        {
          title: "Hotel",
          text: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
          icon: "fa-solid fa-briefcase",
          link: "/products/",
        },
        {
          title: "For Rent",
          text: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
          icon: "fa-solid fa-sign-hanging",
          link: "/products/",
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <div class="container">
      <componentEntrance :entranceData="entranceData" />
      <!--  -->
      <hr />
      <componentContent :contentData="contentData" />
      <!--  -->
      <componentServices :servicesData="servicesData" />
      <!--  -->
    </div>
  </div>
</template>
