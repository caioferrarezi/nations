import Vue from "vue";
import Nations from "./Nations.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Nations)
}).$mount("#app");
