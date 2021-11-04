import Vue from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dotenv from "dotenv";
dotenv.config();

Vue.config.productionTip = false;

new Vue({
  router,
  store: store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
