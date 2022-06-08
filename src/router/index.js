import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import MovieView from "../views/MovieView.vue";
import PortView from "../views/PortView.vue";
import ReferView from "../views/ReferView.vue";
import YoutubeView from "../views/YoutubeView.vue";
import MainView from "../views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/movie",
    name: "Movie",
    component: MovieView,
  },
  {
    path: "/port",
    name: "Port",
    component: PortView,
  },
  {
    path: "/refer",
    name: "Refer",
    component: ReferView,
  },
  {
    path: "/youtube",
    name: "Youtube",
    component: YoutubeView,
  },
  {
    path: "/",
    name: "main",
    component: MainView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
