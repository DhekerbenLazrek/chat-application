<template>
   <v-footer
    dark
    padless
  >
    <v-card
      id=footer
      flat
      tile
      class="black"
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
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      
      

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>
       <v-toolbar-title
      >
        <a href="/" class="white--text" style="text-decoration: none">
         <img class="orizon"
            :src="require('../../assets/img/orizon.png')"
          width="100px" height="110px" fixed > 
          </a>
      </v-toolbar-title>
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
        {{ new Date().getFullYear() }} — <strong>Orizon</strong>
        
        
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


   

</style>
