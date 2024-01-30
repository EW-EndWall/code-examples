import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";

const app = createApp(App);

router.beforeEach((to, from, next) => {
  document.title = "Example Estate - " + to.meta.title || " Home";
  next();
});

app.use(router);

app.mount("#app");
