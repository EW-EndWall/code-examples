<script setup>
import componentHeader from "@/components/header.vue";
import componentFooter from "@/components/footer.vue";
</script>
<script>
export default {
  data() {
    return {
      headerMenuData: [
        {
          text: "Home",
          link: "/",
        },
        {
          text: "Products",
          link: "/products/",
        },
        {
          text: "Contact",
          link: "/contact/",
        },
        {
          text: "About us",
          link: "/aboutus/",
        },
      ],
      footerMenuData: [
        {
          text: "Home",
          link: "/",
        },
        {
          text: "Products",
          link: "/products/",
        },
        {
          text: "Contact",
          link: "/contact/",
        },
        {
          text: "About us",
          link: "/aboutus/",
        },
      ],
      footerSocialData: [
        {
          text: "facebook",
          link: "https://facebook.com",
        },
        {
          text: "twitter",
          link: "https://x.com/",
        },
        {
          text: "instagram",
          link: "https://instagram.com/",
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <keep-alive>
      <componentHeader :menuData="headerMenuData" />
    </keep-alive>

    <router-view />

    <keep-alive>
      <componentFooter
        :menuData="footerMenuData"
        :socialData="footerSocialData"
      />
    </keep-alive>
  </div>
</template>
