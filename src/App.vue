<template>
  <v-app>
    <AppBar />
    <Drawer />
    <AppView />
  </v-app>
</template>

<script lang="ts">
export default {
  name: "App",

  components: {
    AppBar: () => import("@/components/views/navigation/Appbar.vue"),
    Drawer: () => import("@/components/views/navigation/Drawer.vue"),
    AppView: () => import("@/components/views/layout/AppView.vue"),
  },
  methods: {
    test() {
      return;
    },
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
