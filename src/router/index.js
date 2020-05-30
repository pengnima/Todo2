import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/all",
  },
  {
    path: "/all",
    name: "All",
    component: () => import(/* webpackChunkName: "all" */ "../views/All.vue"),
  },
  {
    path: "/completed",
    component: () =>
      import(/* webpackChunkName: "com" */ "../views/Completed.vue"),
  },
  {
    path: "/fail",
    component: () => import(/* webpackChunkName: "fail" */ "../views/Fail.vue"),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
