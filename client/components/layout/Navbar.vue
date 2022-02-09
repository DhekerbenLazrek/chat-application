<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Orizon
          </v-list-item-title>
          <v-list-item-subtitle>
            marriage
          </v-list-item-subtitle>
        </v-list-item-content>
          <button ref="Close" type="button" class="close" 
        @click="this.closeSideNav"> X  </button>
        
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
      
         <v-list-item >
              <router-link to="/EspaceUtilisateur" class="buttonrouter">Espace Utilisateur</router-link>
            </v-list-item>
            <v-list-item >
          
              <router-link to="/Service" class="buttonrouter">Service</router-link>
            </v-list-item>
            <v-list-item >

              <router-link to="/About" class="buttonrouter">About</router-link>
            </v-list-item>
             <v-list-item >
              
            
              <router-link to="/ContactUs" class="buttonrouter">Contact Us</router-link>
            </v-list-item>
             <v-list-item >
             
            
              <router-link to="/Team" class="buttonrouter">Team</router-link>
            </v-list-item>
      </v-list>

<!-- DIVIDER -->
      <v-divider></v-divider>
      <span class="navbar__toggle">
                <ion-icon
                    name="menu"
                    @click="navToggleState = !navToggleState"
                    class="navbar__icon navbar__toggle--icon"
                ></ion-icon>
            </span>
           
           
            
          <div v-bind:class="{ 'snav--shown': navToggleState }">
            <!-- <Particle name="particlejs-nav" /> -->

            <div v-if="isAuthorized">
             <v-icon>mdi-view-dashboard</v-icon>
                <button @click="this.closeSideNav">
                    <router-link
                        v-if="Object.keys(user).length > 0"
                        :to="{ name: 'UserProfile', params: { handle: user.handle } }"
                        class="buttonrouter"
                        >{{ user.handle }}</router-link
                    >
                     
                </button>
                <div @click="this.closeSideNav" >
                    <button
                        @click.prevent="logout"
                        class="buttonrouter"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </v-navigation-drawer>

    <v-app-bar 
    :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      permanent
      color="black"
      dark
      
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>
          <a href="/" class="white--text" style="text-decoration: none">
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
    </v-app-bar>

    <!-- <v-content>
       <v-bottom-navigation
        horizontal
      >
        <a href="/" class="v-btn">
          <span>Home</span>
        </a>
        <a href="/shop" class="v-btn">
          <span>Shop</span>
        </a>
        <a href="/product" class="v-btn">
          <span>Product</span>
        </a>
        <v-btn href="/blog">
          <span>Blog</span>
        </v-btn>
      </v-bottom-navigation>
      
    </v-content> -->

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
.buttonrouter {
  border-radius: 100px;
  color: rgb(14, 12, 12);
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 10px 10px;
  cursor: pointer ;
  border: 1px solid #e9e6e6fd;
  
}
</style>