<template>
  <v-navigation-drawer v-model="drawerModel" app dark temporary>
    <v-list>
      <div class="v-list v-sheet v-sheet--tile theme--dark">
        <v-img
          :src="require('@/assets/logo.png')"
          class="ml-2 mb"
          contain
          height="200"
          width="200"
          max-width="200"
        />
        <a tabindex="0" class="v-list-item v-list-item--link theme--dark">
          <div class="v-list-item__title">
            <router-link to="/">Home</router-link>
          </div>
        </a>
        <a
          tabindex="0"
          class="v-list-item v-list-item--link theme--dark"
        >
          <div class="v-list-item__title">
            <router-link to="/favorites/">Favorites</router-link>
          </div>
        </a>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";

export default Vue.extend({
  name: "Drawer",
  computed: {
    ...mapState(["drawer"]),
    drawerModel: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.TOGGLE_DRAWER(value);
      },
    },
  },
  methods: {
    ...mapMutations(["TOGGLE_DRAWER"]),
  },
});
</script>
