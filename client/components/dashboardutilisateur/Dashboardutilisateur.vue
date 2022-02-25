<!--<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        ></v-avatar>

        <div>john@vuetifyjs.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <div>
            <!-- <Particle name="particlejs-nav" /> 

            <div v-if="isAuthorized">
             <v-icon>mdi-view-dashboard</v-icon>
                <button @click="this.closeSideNav">
                    <router-link
                        v-if="Object.keys(user).length > 0"
                        :to="{ name: 'UserProfile', params: { handle: user.handle } }"
                        class="buttonrouter"
                        >{{ user.handle }}
                    </router-link>
                     
                </button>
          
                <div>
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

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card"
            cols="12"
          >
            <v-card>
              <v-subheader>{{ card }}</v-subheader>

              <v-list two-line>
                <template v-for="n in 6">
                  <v-list-item

                    :key="n"
                  >
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Message {{ n }}</v-list-item-title>

                      <v-list-item-subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Particle from '@/components/layout/Particle.vue';
import SignedInLinks from '@/components/layout/SignedInLinks.vue';
 export default {
    name: "Dashboardutilisateur",
    props: ['logout', 'user'],
    components: {
        Particle: Particle,
        SignedInLinks
    },
    data: function() {
        return {
          
          loading: false,
          items: [],
          select: null,
          states: [],
          drawer: null,
          cards: ['Today', 'Yesterday'],
            
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
</script>>

<style> 

