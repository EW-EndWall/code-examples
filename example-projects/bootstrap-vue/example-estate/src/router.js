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
    path: "/aboutus",
    name: "aboutUs",
    component: () => import("@/components/aboutUs.vue"),
    meta: {
      title: "About Us",
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
  {
    path: "/products/",
    name: "products",
    component: () => import("@/components/products.vue"),
    meta: {
      title: "Products",
    },
  },
  {
    path: "/product/:id",
    name: "product",
    component: () => import("@/components/product.vue"),
    meta: {
      title: "Product details",
    },
  },
  {
    path: "/login/",
    name: "login",
    component: () => import("@/components/login.vue"),
    meta: {
      title: "Login",
    },
  },
];

const router = createRouter({
  history: createWebHistory(), // * remember previous page
  routes,
});

export default router;
