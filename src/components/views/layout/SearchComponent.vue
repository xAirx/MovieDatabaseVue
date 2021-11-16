<template>
  <div>
    <v-text-field
      v-if="showSearch"
      v-model="searchQuery"
      append-icon="mdi-magnify"
      solo-inverted
      :rules="[rules.counter, rules.empty, rules.minfivechars]"
      style="max-width: 500"
      placeholder="Search for a Movie"
    />
    <Debounce :search-query="searchQuery" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapMutations, mapState } from "vuex";
import Debounce from "@/components/views/utils/helpers/Debounce.vue";
import { isEmpty } from "lodash";

export default Vue.extend({
  name: "SearchComponent",
  components: {
    Debounce,
  },
  data() {
    return {
      searchQuery: "",
      rules: {
        counter: (value) => value.length <= 20 || "Max 20 characters",
        minfivechars: (value) => value.length >= 5 || "Min 5 characters",
        empty: (value) => !isEmpty(value) || "Please don´t leave me empty",
      },
    };
  },
  computed: {
    ...mapState(["showSearch", "Error", "Empty"]),
  },
  methods: {
    ...mapMutations(["SHOW_SEARCH"]),
  },
});
</script>
