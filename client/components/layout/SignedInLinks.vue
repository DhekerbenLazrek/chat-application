<template>
    <div>
        <v-list>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-clipboard-list-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
             <div>
              <button>
                     <router-link to="/Dashboard" class ="black--text">Dashboard</router-link>
                </button>
                    </div> 
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
        
            <v-list>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon> mdi-logout</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
                <button
                @click.prevent="logout"
                class="nav__link nav__link--btn nav__link--rounded"
            >Logout</button>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
            
        </div>
   
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'SignedInLinks',
    props: ['logout', 'user'],
    data: function() {
        return {};
    },
    computed: {
        ...mapGetters(['getUserData', 'isAuthorized'])
    },
    methods: {},
    created() {},
    mounted() {}
};
</script>

<!-- <style lang="scss" scoped>
// @import '@/assets/scss/components/navbar.scss';
// </style>


          