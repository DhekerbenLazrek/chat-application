<template>
  <v-app id="inspire">
    <v-app-bar 
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="black"
      dark
    >
 
      <v-toolbar-title
      >
        <a href="/" class="white--text" style="text-decoration: none">
         <img class="orizon"
            :src="require('../../assets/img/orizon.png')"
          width="150px" height="160px " fixed > 
          </a>
         
      </v-toolbar-title>
      <v-text-field
      fixed
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
       
      >
      </v-text-field>
      
      
      <v-spacer />
      

    </v-app-bar>
    
    <v-content>
      <v-bottom-navigation
        
        color="black"
        horizontal
      >
        <a href="/" class="v-btn" >
          <v-btn color ="white">Home</v-btn>
        </a>
        <a href="/shop" class="v-btn">
           <v-btn color ="white">Shop</v-btn>
        </a>
        <a href="/product" class="v-btn">
          <v-btn color ="white">Product</v-btn>
        </a>
        <v-btn href="/blog">
          <v-btn color ="white">Blog</v-btn>
        </v-btn>
      </v-bottom-navigation>
    </v-content>
      <router-view/>

    
  </v-app>
</template>
<script>
   
    export default {
       name: "App",
      components: {
  
  },
     data: () => ({
    drawer: null,
    
  }),
  
    }
</script>

<style> 

.container-scoped{ position: absolute; top: -50px; right: 30px }
.orizon{ position: static;}
</style>