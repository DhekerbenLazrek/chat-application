<template>
  <v-toolbar dark color="teal">
    <v-toolbar-title>Search</v-toolbar-title>
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="Search by city or name.."
      solo-inverted
    ></v-autocomplete>
    <v-btn icon>
      <v-icon>mdi-home</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
// import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      salle:[''],
    };
  },
 
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.hotels.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
    },
 
};
</script>
