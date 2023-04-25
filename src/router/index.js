import { createRouter, createWebHistory } from 'vue-router';
import Registration from "../views/Registration.vue";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/",
    name: "auth",
    component: Auth,
  },
  {
    path: "/reg",
    name: "registration",
    component: Registration,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
