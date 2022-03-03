<template>
   <v-footer
    dark
    padless
    class="footer"
  >
    <v-card
      class=".d-flex"
      flat
      tile
      color="black"
    >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        href="/Dashboard"
        color="white"
        text
        class="my-2"
      >
        Espace utilisateur
      </v-btn>
       <v-btn
        href="/About"
        color="white"
        text
        class="my-2"
      >
        About Us
      </v-btn>
      <v-btn
        href="/Team"
        color="white"
        text
        class="my-2"
      >
        Team
      </v-btn>
      <v-btn
        href="/Services"
        color="white"
        text
        class="my-2"
      >
        Services
      </v-btn>
      <v-btn
        href="/ Blog"
        color="white"
        text
        class="my-2"
      >
         Blog
      </v-btn>
      <v-btn
        href="/Contact"
        color="white"
        text
        class="my-2"
      >
         Contact Us
      </v-btn>
      <v-card-text class="white--text pt-0">
        Phasellus feugiat a Maurisultrices sa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>
      
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>

      </v-card-text>
       
     
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —   <h1 class="subheading"> Orizon </h1>
        
        
      </v-card-text>
      </v-row>
    </v-card>
  </v-footer>
</template>


<script>
export default {
    name: 'Footer',
   data: () => ({
    
     icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
       
  }),
    
};
</script>


<style>
 .footer { 
    
    width: 120%;
    height:10%;
    padding: 1em;
    margin: 0 auto;
    background: rgb(5, 5, 5);
    text-align: center;
    border-top: 1px solid rgb(12, 11, 11);
    font-weight: bold;
    text-transform: uppercase;
 }
   

</style>
