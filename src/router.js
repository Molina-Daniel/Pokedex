import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";
import Home from "./views/Home.vue";
import Pokemon from "./views/Pokemon.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/pokemon/:id", // :id can be whatever (:number, etc..)
      name: "pokemon",
      component: Pokemon,
      props: true
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
