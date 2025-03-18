import { createRouter, createWebHistory } from "vue-router";
import Success from "../views/Success.vue";
import Cancelled from "../views/Cancelled.vue";
import Failed from "../views/Failed.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Success,
  },
  {
    path: "/success",
    name: "success",
    component: Success,
  },
  {
    path: "/cancelled",
    name: "cancelled",
    component: Cancelled,
  },
  {
    path: "/failed",
    name: "failed",
    component: Failed,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
