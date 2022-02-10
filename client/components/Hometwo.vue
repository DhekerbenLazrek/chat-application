<template>
  <div class="ma-12 pa-12">
<v-card
    height="400"
    width="256"
    class="mx-auto"
  >
    <v-navigation-drawer 
          permanent
          expand-on-hover>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
                <v-list-item-title class="title">
                 <li class="nav__item">
            <router-link
                v-if="Object.keys(this.user).length > 0"
                :to="{name: 'UserProfile', params: { handle: this.user.handle  }}"
                class="nav__link nav__link--rounded"
            >{{ this.user.handle }}</router-link>
        </li>
                </v-list-item-title>
               
              </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
                <v-list-item class="title">
                <li class="nav__item">
    <v-btn class="mx-2" fab dark color="teal">
      <v-icon dark>
        mdi-format-list-bulleted-square
      </v-icon>
    </v-btn>
            <router-link to="/rooms" class="nav__link nav__link--rounded"> Mes reservations </router-link>
        </li>
                </v-list-item>
               
              </v-list-item-content>
        </v-list-item>


      <li class="nav__item">
            <v-btn depressed
                @click.prevent="logout"
            >Logout</v-btn>
        </li>

      </v-list>
    </v-navigation-drawer>
  </v-card>
 </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {  icon: 'mdi-view-dashboard', to :"/" },
          {  icon: 'mdi-image', to :"/"},
          {  icon: 'mdi-help-box', to :"/" },
        ],
        right: null,
      }
    },
  }
</script>

<v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Orizon
          </v-list-item-title>
          <v-list-item-subtitle>
            marriage
          </v-list-item-subtitle>
        </v-list-item-content>
         
        
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