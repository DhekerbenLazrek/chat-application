<template>
  <v-app id="inspire">
    <Sidebar :drawer="drawer" />
    <Topbar @drawerEvent="drawer = !drawer" />
    <v-main style="background: #f5f5f540">
      <v-container class="py-9 px-0" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import Footer from '@/components/layout/Footer.vue'
import Particle from '@/components/layout/Particle.vue';
// import _ from 'lodash';



export default {
    name: 'App',
    components: {
        Topbar,
        Sidebar,
        Footer,
        Particle,
        
    },
    data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
  }),
    
};
</script>

<style lang="scss">
@import '@/assets/scss/base/base.scss';
</style>
