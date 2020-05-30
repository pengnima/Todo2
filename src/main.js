import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";

Vue.config.productionTip = false;

Vue.directive("focus", {
  // 当被绑定的元素插入到 DOM 中时……配合 v-if
  inserted: function(el) {
    // 聚焦元素
    el.focus();
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
