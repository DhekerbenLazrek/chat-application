<template>
<v-app> 
  <createSalle v-if="apear"/>
  <v-btn
      v-if="userstatus === 'admin'"
      class="mx-2"
      dark
      large
      color="cyan"
   @click="apearsallecreate"
    > create salle
      <v-icon dark>
        mdi-pencil
      </v-icon>
    </v-btn>
    <!-- CARDS -->
    <v-row justify="space-around">
 <v-col cols="4" v-for="(salle, index) in salles" :key="salle.id">
<div>
   <v-hover
        v-slot="{ hover }"
        open-delay="200"
      >
  <v-card id="cards" outlined class="mx-auto"  color="teal lighten-2" :elevation="hover ? 16 : 2"
  
  >
<v-avatar class="avatar" color="grey lighten-1" size="37">
      {{salle.avatar}}
    </v-avatar>
<v-card-title color="black"> <strong>{{salle.title}}</strong> </v-card-title>   
 <v-card-subtitle>
    <strong> {{salle.adresse}} </strong>
    </v-card-subtitle>
     <v-card-subtitle>
    <strong> {{salle.prix}} </strong>
    </v-card-subtitle>
        <v-carousel 
        class = "inline-block"
        id="photocarousel"
        height="200"
        width="200"
        cycle
        hide-delimiter-background
        show-arrows-on-hover
        >
        <v-carousel-item
        :src="salle.images"
            >
        </v-carousel-item>
          </v-carousel>
  <v-btn small color="black" @click="revealEv(index)"> More details </v-btn>  <v-btn small color="black" @click="showevent(salle._id)"> Reservation</v-btn>
  <v-btn v-if="userstatus === 'admin'" 
  class="ma-1" color="red" 
  @click="remove(event._id)">
    Delete  
      <v-icon dark right>
    mdi-cancel
      </v-icon>
      </v-btn>
    <v-btn small block color="teal accent-2" @click="watchVideo(index)" > Video <v-icon>mdi-television-play</v-icon></v-btn>
    <v-expand-transition>
      <v-card v-if="salle.reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
        <v-card-text color="black" >
         
         <strong> <p> {{salle.description}} </p> </strong> 
              
        </v-card-text>

    <v-card-actions class="pt-0">
          <v-btn
          small
            color="teal accent-2"
            @click="revealEv(index)"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-if="salle.watchVideo" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
        
        <v-card-text class="pb-0">
       <iframe :src="salle.youtubeLink"
        width="400" height="400" frameborder="0" allowfullscreen></iframe>
        </v-card-text>

    <v-card-actions class="pt-0">
          <v-btn
          small
          color="teal accent-2"
            @click="watchVideo(index)"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
     </v-card>
     </v-hover>
    </div>
    </v-col>
    </v-row>


 
  
  </v-app> 
</template>


<script> 
import axios from 'axios'
import createSalle from './createSalle';
const Cookie =require('js-cookie');

  export default {
   name: "salles",
  props: {},
    data: () => {
      return {
      salles: [
        {
        id:1,
        avatar:"https://scontent.ftun9-1.fna.fbcdn.net/v/t1.18169-9/1471142_237116886466640_1168282865_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rY6nWFc2U68AX8duHkG&_nc_ht=scontent.ftun9-1.fna&oh=00_AT_YX9jMcPiwbp9hngihuBIU__Rs0E87f7uAdsP7wDKyWw&oe=622B70BD",
        city: "Tunis",
        title:"La Marquise",
        adresse:"Route Tunis GP1 ZI Akouda",
        prix:"6000100",
        images:"https://www.marhba.com/media/k2/items/cache/00d9b1e39f02d57be65ad2a9a6eaa3b8_XL.jpg",
        description:"Pour un accueil personnalisé adaptable pour votre événement, la marquise est l’endroit idéal  pour lequel vous pouvez opter.Pour une réussite totale de votre mariage la marquise figure parmi les meilleurs choix.",
        youtubeLink:"https://www.youtube.com/watch?v=FYvjCNav49o&ab_channel=salledesf%C3%AAteslamarquiseetlatroupemehrezsoltan"
        }
      ],
      show: false,
      userstatus:Cookie.get('status'),
      apear : false,
      
    
        }},
        components: {
          createSalle,
        },


    async mounted() {
    const response = await axios.get("http://localhost:5000/api/Salles/allsalles"); 
    for(var i = 0; i < response.data.length; i++) {
      response.data[i].reveal = false
      response.data[i].watchVideo = false
    }
    this.salles = response.data;
  },

    methods: {
      revealEv(index){
      this.salles[index].reveal = !this.salles[index].reveal
    },
    watchVideo(index){
      console.log(this.salles[index])
      this.salles[index].watchVideo = !this.salles[index].watchVideo
    },
    showsalle(id){
      this.$router.push(`/sallesShow/${id}`)
    },
    
    apearsallecreate(){
      this.apear = !this.apear;
    },
      async remove(id){
            await axios.delete(`/api/Salles/${id}`);
            window.location.replace("/salles");
        }
  },
  
  }



</script>

<style> 
.avatar { 
  
  padding: 5px -15px;
  left:-10px;
  display: inline-block;
  
} 
#cards {
  max-width: 300%;
  top:60px;
  
}
.container{
  width:700px;
}



</style>