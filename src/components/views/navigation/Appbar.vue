<template>

  <div>
    <v-app-bar app flat dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="TOGGLE_DRAWER" />
      <v-container class="mx-auto py-0">
        <v-row align="center">
          <router-link to="/">
            <v-img
              :src="require('@/assets/logo.png')"
              class="mr-10"
              contain
              height="56"
              width="110"
              max-width="110"
            />
          </router-link>
          
                   <toast-component />

          <div
            class="hidden-sm-and-down v-btn v-btn--flat v-btn--text theme--light v-size--default"
          >
            <router-link active-class="active" to="/" exact>Home</router-link>
          </div>
          <div
            class="hidden-sm-and-down v-btn v-btn--flat v-btn--text theme--light v-size--default"
          >
            <router-link active-class="active" to="/favorites/" exact>Favorites</router-link>
          </div>
          <v-spacer />
          <search-component />
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { mapMutations, mapState } from "vuex";
import Vue from "vue";
import SearchComponent from "@/components/views/layout/SearchComponent.vue";
import ToastComponent from "@/components/views/layout/Toast.vue";
export default Vue.extend({
  name: "AppBar",
  components: {
    SearchComponent,
    ToastComponent,
  },
  methods: {
    ...mapMutations(["TOGGLE_DRAWER","SHOW_SEARCH"]),
  },
  computed: {
     ...mapState([
      "showSearch",
    ]),
  },
  watch: {
    
$route: function () {
      if (this.$route.path !== "/") {
        this.SHOW_SEARCH(false);
      } else {
        this.SHOW_SEARCH(true);
      }
    },
  }
 
});
</script>

<style scoped lang="scss">
.v-btn--fab.v-size--default .v-icon,
.v-btn--fab.v-size--small .v-icon,
.v-btn--icon.v-size--default .v-icon,
.v-btn--icon.v-size--small .v-icon {
  color: white !important;
}
</style>
