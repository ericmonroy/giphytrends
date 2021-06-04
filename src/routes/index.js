import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "../components/home.component.vue";
import FavoritesComponent from "../components/favorites.component.vue";


/**rutas base */
const routes = [
  {
    path: "/",
    component: HomeComponent,
    name: "home",
  },
  {
    path: "/favoritos/",
    component: FavoritesComponent,
    name: "favoritos",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
