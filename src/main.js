import Vue from "vue";
import App from "./App.vue";
import { router } from "./routes";
import store from "./store";
import "./httpClient";
import "./form";
import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
