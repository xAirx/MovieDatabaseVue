import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css";
/* Vuetify-loader

Keeping track of all the components you’re using can be a real chore. The vuetify-loader
alleviates this pain by automatically importing all the Vuetify components you use, where you use them.
This will also make code - splitting more effective, as webpack will only load the components required for that chunk to be displayed. */

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#4CAF50",
        secondary: "#424242",
        accent: "#82B1FF",
      },
    },
  },
});
