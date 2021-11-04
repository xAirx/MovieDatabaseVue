import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MovieDetails from "../components/views/moviecomponents/MovieDetails.vue";
import MainComponent from "../components/MainComponent.vue";
import FavoritesComponent from "../components/views/favoritescomponents/FavoritesComponent.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: MainComponent,
  },
  {
    path: "/favorites/",
    name: "favorites",
    component: FavoritesComponent,
  },
  {
    path: "/details/:id",
    name: "details",
    props: true,
    component: MovieDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  linkExactActiveClass: "NavActive", // active class for *exact* links.
});

export default router;
