<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-img
        :src="require('../../assets/img/oriz.png')"
      height="120"
      class="pa-4"
      
    >
      <!-- <div class="text-center">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <v-img
            aspect-ratio="30"
            src="https://yt3.ggpht.com/esazPAO03T0f0vKdByJvkDy6MSwjyG5f-c_2S2CJapszQ3KPQyZarpoqvgv0Us0atUbILytj=s88-c-k-c0x00ffffff-no-rj"
          />
        </v-avatar>
        <h2 class="white--text">Web Burden</h2>
      </div> -->
    </v-img>
    <v-divider></v-divider>
    <!-- Contact -->
    <v-list>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-microsoft-windows</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            <router-link to="/Contact" class ="black--text" >Contact</router-link>
            </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!-- Team -->
    <v-list>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-microsoft-windows</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            <router-link to="/Team" class ="black--text" >Team</router-link>
            </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
     <v-list>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-microsoft-windows</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            <router-link to="/Service" class ="black--text" >Service</router-link>
            </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!-- Dashboard -->
    <!-- <v-list>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-microsoft-windows</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            <router-link to="/Dashboard" class ="black--text" >Dashboard</router-link>
            </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list> -->

    <v-list>
      <v-list-item link>
       

        <v-list-item-content>
          <v-list-item-title>
             <div v-if="isAuthorized">
                     <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
              <button @click="this.closeSideNav">
                    <router-link
                        v-if="Object.keys(user).length > 0"
                        :to="{ name: 'UserProfile', params: { handle: user.handle } }"
                        class ="black--text"
                        >{{ user.handle }}
                    </router-link>
                </button>
                    </div> 
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
   
    <div>
            <!-- <Particle name="particlejs-nav" /> -->

            <div v-if="isAuthorized">
                <div>
                     <SignedInLinks :logout="logout" :user="user" v-if="isAuthorized" />
                </div>
            </div>
        </div>
  </v-navigation-drawer>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import Particle from '@/components/layout/Particle.vue';
import SignedInLinks from '@/components/layout/SignedInLinks.vue';
export default {
  name: "Sidebar",
  props: ["drawer"],

  components: {
        Particle: Particle,
        SignedInLinks
    },
  data() {
    return {
      
          loading: false,
          items: [],
          select: null,
          states: [],
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
</script>

<style scoped></style>