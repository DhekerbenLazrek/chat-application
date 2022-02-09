<!--<template>
    <v-app>
     <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer 
    v-model="drawer"
    app
    >
     <!-- <SignedInLinks :logout="logout" :user="user" v-if="isAuthorized" /> 
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
      
         <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-icon>
            
              <router-link to="/Espace Utilisateur" class="buttonrouter">Espace Utilisateur</router-link>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-icon>
            
              <router-link to="/Service" class="buttonrouter">Service</router-link>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-icon>
            
              <router-link to="/About" class="buttonrouter">About</router-link>
            </v-list-item>
             <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-icon>
            
              <router-link to="/ContactUs" class="buttonrouter">Contact Us</router-link>
            </v-list-item>
             <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-icon>
            
              <router-link to="/Team" class="buttonrouter">Team</router-link>
            </v-list-item>
      </v-list>

 DIVIDER 
      <v-divider></v-divider>
      <v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title >
                 <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
            <router-link class="buttonrouter"
                v-if="Object.keys(this.user).length > 0"
                :to="{name: 'UserProfile', params: { handle: this.user.handle  }}"
            >{{ this.user.handle }}</router-link>
              </v-list-item-icon>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
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
          </v-list>

         <v-btn class="buttonrouter"
              color="error"
              dark
              small
        
            @click.prevent="logout"
            >Logout
            
            </v-btn>

    </v-navigation-drawer>


    </v-app>
</template>

<script>
   
    export default {
       name: "sidebar",
      components: {
  
  },
     data: () => ({
    drawer: null,
        
          
  }),
  
    }
</script>

<v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title >
                 <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
            <router-link class="buttonrouter"
                v-if="Object.keys(this.user).length > 0"
                :to="{name: 'UserProfile', params: { handle: this.user.handle  }}"
            >{{ this.user.handle }}</router-link>
              </v-list-item-icon>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
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

          </v-list>

         <v-btn class="buttonrouter"
              color="error"
              dark
              small
        
            @click.prevent="logout"
            >Logout
            
            </v-btn>