<template>
<v-app> 
<div id="nav"> 
  <h1> Les Salles Des Fetes </h1>
  <v-btn class="mx-3 black--text" elevation="2" small rounded color="white" to="/">
            Home
          </v-btn>
          <v-btn class="mx-3 black--text" elevation="2"  small rounded color="white" to="/About">
            About
          </v-btn>
          <v-btn class="mx-3 black--text" elevation="2"  small rounded color="white" to="/Categories">
            Categories
          </v-btn>
          <br>
          <v-divider> </v-divider>
          <v-select
          rounded
          small
          class="selectfilter"
          :items="items"
          label="Villes"
          dense
          solo
        ></v-select>
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
    <v-row class="pl-10 pr-8 row">
 <v-col cols="3" v-for="(salle, index) in salles" :key="salle._id"
    sm="5"
    md="4"
    lg="5"
        >
<div>
   <v-hover
        v-slot="{ hover }"
        open-delay="200"
      >
  <v-card id="cards" class="mx-auto"
      color="grey lighten-4"
       :elevation="hover ? 16 : 2"
  >
  <div >
    <v-avatar>
      <img
        class="avatar" size="37"
        :src="salle.avatar"

      >
    </v-avatar>
      <v-card-title class="title" color="black"> <strong>{{salle.title}}</strong> </v-card-title>   

 </div>

        <v-carousel 
       
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        class = "inline-block"
        id="photocarousel"
        height="200"
        width="400"
        cycle
        hide-delimiter-background
        show-arrows-on-hover
        >
        <v-carousel-item
        @click="myMethod"  
        
        :src="salle.images"
            >
        </v-carousel-item>
          </v-carousel>
  <v-btn class="mx-4" small color="transparent" @click="watchVideo(index)" > Video </v-btn>
  <v-btn class="mx-4" small color="transparent" @click="revealEv(index)"> Discription </v-btn> 
  <v-btn class="mx-3" small color="transparent" @click="showsalle(event._id)" > Reservation </v-btn>
    <router-link to="/Reservationform"> </router-link> 
  
  <v-btn v-if="userstatus === 'admin'" 
  class="ma-1" color="red" 
  @click="remove(salle._id)">
    Delete  
      <v-icon dark right>
    mdi-cancel
      </v-icon>
      </v-btn>
    <v-expand-transition>
      <v-card v-if="salle.reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
        <v-card-text color="black" >
         
    <strong> <p> {{salle.description}} </p> </strong> 
    <strong> Adresse : {{salle.adresse}} </strong>
    <strong> Prix : {{salle.prix}} </strong>
    
              
        </v-card-text>

    <v-card-actions class="pt-0">
          <v-btn
          small
            color="grey"
            @click="revealEv(index)"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-if="salle.watchVideo" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
        
        <v-card-text class="pb-0">
       <iframe class="videoframe" :src="salle.youtubeLink"
        width="280" height="200" frameborder="0" allowfullscreen></iframe>
        </v-card-text>

    <v-card-actions class="pt-0">
          <v-btn
          small
          color="grey"
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


 
  
  </div>
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
      salles: [],
      show: false,
      userstatus:Cookie.get('status'),
      apear : false,
      showPic:true,
      items: ['Sousse', 'Tunis', 'Monastir', 'Mahdia','Sfax','Hammamet',],
        }
      },
        components: {
          createSalle,
        },


    async mounted() {
    const response = await axios.get("http://localhost:5000/api/Salles"); 
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
     myMethod(){
      showPic = false
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
  width: 400px;
  top:35px;
  
  
}
.container{
  width:700px;
}

.title{
 left:-100px;
}
#nav {
  padding:38px;
}
.selectfilter{
   padding:30px;
   width:150px;
   left:350px;
   top:-40px;
}
</style>