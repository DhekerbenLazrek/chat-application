<!--<template>
  <v-app id="inspire">
    <v-navigation-drawer 
    v-model="drawer"
    app
    >
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
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="appbar">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
        
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
         items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard',to:"/" },
          { title: 'Photos', icon: 'mdi-image',to:"/" },
          { title: 'About', icon: 'mdi-help-box',to:"/" },
        ],
        drawer: null 
        }),
  }
</script>


<style>
.appbar {
border: none;
  color: rgb(202, 12, 12);
  padding: 2px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  position:bottom;
  margin: 10px -10px;
  transition-duration: 0.4s;
  
}
</style>