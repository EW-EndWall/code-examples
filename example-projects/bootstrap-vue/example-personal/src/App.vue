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
          text: "About",
          link: "/",
        },
        {
          text: "Time Line",
          link: "/time-line/",
        },
        {
          text: "Contact",
          link: "/contact/",
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
      <componentFooter :socialData="footerSocialData" />
    </keep-alive>
  </div>
</template>
