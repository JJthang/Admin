// import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../pages/HomeView.vue";
// import E_Commerce from "../pages/Admin/E_Commerce/index.vue";
// import CRUD from "../pages/Admin/Product/AddProduct.vue";

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: HomeView,
//     },
//     {
//       path: "/ecommerce",
//       name: "admin",
//       component: E_Commerce,
//     },
//     {
//       path: "/CRUD",
//       name: "CRUD",
//       component: CRUD,
//     },
//   ],
// });

// export default router;
import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
