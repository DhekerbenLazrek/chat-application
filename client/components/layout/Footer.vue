<template>
   <v-footer
    dark
    padless
    
  >
    <v-card
      class="center"
      flat
      tile
      color="black"
    >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        href="/EspaceUtilisateur"
        :key="link"
        color="white"
        text
        class="my-2"
      >
        {{ link }}
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
       links: [
        'EspaceUtilisateur',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
  }),
    
};
</script>


<style>
 .footer { 
    position:relative;
    width: 120%;
    height:10%;
    padding: 1em;
    margin: 0 auto;
    background: rgb(5, 5, 5);
    text-align: center;
    border-top: 1px solid #fff;
    font-weight: bold;
    text-transform: uppercase;
 }
   

</style>
