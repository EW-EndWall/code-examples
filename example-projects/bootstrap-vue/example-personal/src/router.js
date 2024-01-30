import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // * header link
  {
    path: "/",
    name: "home",
    component: () => import("@/components/home.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/time-line",
    name: "timeLine",
    component: () => import("@/components/time-line.vue"),
    meta: {
      title: "Time Line",
    },
  },
  {
    path: "/contact/",
    name: "contact",
    component: () => import("@/components/contact.vue"),
    meta: {
      title: "Contact",
    },
  },
];

const router = createRouter({
  history: createWebHistory(), // * remember previous page
  routes,
});

export default router;
