<template>
 <div class="pl-10 pr-8 row">
<div class="col-md-4 col-sm-4 col-xs-10">
  <v-card
    class="mx-auto"
    max-width="344"
  >
  <v-img
      height="200"
      src="https://img5.findglocal.com/178/451/717362951784510.jpg" 
    ></v-img>

    <v-card-title>
      La Marquise
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</div>
<!-- card 2 -->
<div class="col-md-4 col-sm-4 col-xs-10">
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://i.zafaf.net/providers/2917/preview_fyvzawqwiuribcnzlrbjdpdwb.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
     Le Palace
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
  <!-- card 3 -->
<div class="col-md-4 col-sm-4 col-xs-10">
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpusNmImHnvWpr35vMpRxPJsx0l7-Auz2Mw&usqp=CAU"
      height="200px"
    ></v-img>

    <v-card-title>
      Le Serail
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
  
  
  
  </div>
</template>


<script> 
import axios from "axios";

  export default {

   name: "Sallesdesfetes",


    data: () => ({
      show: false,
      selection: 1,
    items: [
      {
        text: 'Photos',
          disabled: false,
          href: '',
        },
        {
          text: 'Videos',
          disabled: false,
          href: '',
        },
       
      ],
        }),


    async mounted() {
    const response = await axios.get("http://localhost:4000/api/Salle");
    console.log(response.data)
    this.salles = response.data;
  },

    methods: {
      revealEv(index){
      this.events[index].reveal = !this.events[index].reveal
    },

    },
  }



</script>

<style> 
/* .mx-auto { 
 width: 600px;
 height:300;
} */

</style>