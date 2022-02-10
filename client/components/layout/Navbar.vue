<template>
  <v-app id="inspire">
    <v-app-bar
    class=".d-flex"
      app 
      fixed 
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="black"
      dark
    >
      <v-app-bar-title permanent>
          <a href="/" class=".d-flex" style="text-decoration: none">
         <img class="orizon"
            :src="require('../../assets/img/orizon.png')"
          width="130px" height="110px " > 
          </a>
      </v-app-bar-title>
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
      label="Search..."
      solo-inverted
    ></v-autocomplete>
      <v-spacer />
      
  
           <v-btn class="mx-2 white--text" elevation="2"  rounded color="black" to="/">
            Home
          </v-btn>
          <v-btn class="mx-2 white--text" elevation="2"  rounded color="black" to="/signup">
            Contact
          </v-btn>
          <v-btn class="mx-2 white--text" elevation="2"  rounded color="black" to="/signup">
            Team
          </v-btn>
           <v-btn class="mx-2 white--text" elevation="2"  rounded color="black" to="/signup">
            Service
          </v-btn>
     
         
    </v-app-bar>

    <v-main>
      <router-view> </router-view>
      </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Particle from '@/components/layout/Particle.vue';
import SignedInLinks from '@/components/layout/SignedInLinks.vue';

export default {
    name: "navbar",
    props: ['logout', 'user'],
    components: {
        Particle: Particle,
        SignedInLinks
    },
    data: function() {
        return {
           open: false ,
          loading: false,
        items: [],
        search: null,
        select: null,
        states: [],
          drawer: null,
          search:"",
            navToggleState: false,
             value: 1 
        };
    },
    computed: {
        ...mapGetters(['getUserData', 'isAuthorized']),
        user() {
            return this.getUserData;
        }
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
    },
    methods: {
        ...mapActions(['toggleAuthState']),
        closeSideNav() {
            this.navToggleState = false;
        },
        logout() {
            if (localStorage.getItem('authToken')) {
                localStorage.clear();
                this.$store.dispatch('toggleAuthState', false);
                this.$router.push({ name: 'Login' });
            }
        },
        closeSideNav() {
        this.$refs.Close.click();
      },
        querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
    },
    
    created() {
        if (localStorage.getItem('authToken')) {
            this.$store.dispatch('toggleAuthState', true);
        } else {
            localStorage.clear();
            this.$store.dispatch('toggleAuthState', false);
        }
    }
};
</script>>

<style> 
.search {
  font-size: 12px;
}
.buttonnav {
  border-radius: 100px;
  color: rgb(206, 13, 13);
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 10px 10px;
  cursor: pointer ;
  border: 1px solid #080808fd;
  
}
/* #navigation{
  top:-70px;
} */

</style>