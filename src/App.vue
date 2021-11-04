<template>
  <v-app>
    <app-bar />
    <drawer />
    <app-view />
  </v-app>
</template>

<script lang="ts">
export default {
  name: "App",

  components: {
    AppBar: () => import("@/components/views/navigation/Appbar.vue"),
    Drawer: () => import("@/components/views/navigation/Drawer.vue"),
    AppView: () => import("@/components/views/layout/View.vue"),
  },
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
.NavActive {
  color: white !important;
  text-decoration: underline;
}
</style>
