<template>
<v-app> 
<div id="nav" class="pl-13 pr-4 row"
    sm="4"
    md="4"
    lg="4"
> 


        <v-subheader id="subheader"  align="center"
          justify="center" class="rounded-lg">
            <h2 id="subheader">Les Salles Des Fetes</h2>
        </v-subheader>
    <v-btn id="butt" class="mx-3 white--text caption" elevation="2"  small color="black" to="/createSalle">
          Create
      </v-btn>
      <v-btn id="butt" class="mx-3 white--text caption" elevation="2" small color="black" to="/">
          Home
      </v-btn>
      <v-btn id="butt" class="mx-3 white--text caption" elevation="2"  small color="black" to="/About">
          About
      </v-btn>
      <v-btn id="butt" class="mx-3 white--text caption" elevation="2"  small color="black" to="/Categories">
          Categories
      </v-btn>
      
          <br>

         
         
          <div id="searchbutton">
  <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Chercher par ville ou nom .."/>
        <label> Chercher par ville ou nom ..</label>
  </div>
  <div class="wrapper">
    <div class="card" v-for="post in filteredList" :key="post._id">
      <a v-bind:href="post.link" target="_blank">
        <img v-bind:src="post.img"/>
        <small>posted by: {{ post.author }}</small>
        {{ post.title }}
      </a>
    </div>
  </div>
</div>
         
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
    <v-row >
 <v-col cols="3" v-for="(salle, index) in salles" :key="salle._id"
    sm="4"
    md="4"
    lg="4"
  >
<div>
   <v-hover
        v-slot="{ hover }"
        open-delay="200"
      >
  <v-card outlined id="cards" class="mx-auto"
          
        color="black"
       :elevation="hover ? 16 : 2"
       
  >
  <div>
    <v-avatar>
      <img
        class="avatar" 
        :src="salle.avatar"
      >
      
    </v-avatar>
 </div>
 <v-container class="title">
     <v-card-title id="title" class="white--text caption"> <strong>{{salle.title}}</strong>   
       </v-card-title> 
    </v-container >

        <v-carousel 
       
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        class = "inline-block"
        id="photocarousel"
        height="250"
        width="600"
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
  <v-btn  small block color="black" class="white--text caption" @click="watchVideo(index)" > Video </v-btn>
  <v-btn  small block color="black" class="white--text caption" @click="revealEv(index)"> Discription </v-btn> 
  <v-btn  small block color="black" class="white--text caption" @click="showsalle(salle._id)" > Reservation </v-btn>
 
  <!-- <div>
  <v-btn id="butt" class="mx-3 white--text caption" elevation="2" small color="black" to="/Reservationform">
          Reservation
      <v-icon class="white--text caption">mdi-arrow-right</v-icon>
      </v-btn>
      </div> -->
    <v-expand-transition>
      <v-card v-if="salle.reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
        <v-card-text color="white" >
    <strong> <p> {{salle.description}} </p> </strong> 
    <strong> Adresse : {{salle.adresse}} </strong>
    <strong> Prix : {{salle.prix}} </strong>
        </v-card-text>

    <v-card-actions class="pt-0">
          <v-btn
          small
            color="white"
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
          color="white"
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
import { mapState } from 'vuex';
import axios from 'axios'
import createSalle from './createSalle';
const Cookie =require('js-cookie');
  export default {
   name: "salles",
  
    data() {
      return {
      salles: [],
      show: false,
      apear : false,
      userstatus:Cookie.get('status'),
      showPic:true,
      items: ['Sousse', 'Tunis', 'Monastir', 'Mahdia','Sfax','Hammamet',],
        }},

        components: {
          createSalle,
        },
    async mounted() {
    const response = await axios.get("http://localhost:5000/api/Salles"); 
    console.log(response.data)
    console.log(this.userstatus)
    for(var i = 0; i < response.data.length; i++) {
      response.data[i].reveal = false
      response.data[i].watchVideo = false
    }
    this.salles = response.data;
  },
    methods:{
      showsalle(id){
      this.$router.push(`/sallesShow/${id}`)
    },
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

<style lang="scss"> 
.avatar { 
  top:-30px;
  padding: 10px -30px;
  display: inline-block;
  size:10px;
} 
#cards {
  width: 400px;
  top:35px;
  left:30px;
  
  
}
.container{
  width:1300px;
}
#title{
  padding: 4px 62px;
  font-size: 15px;
  right:-50px;
  top:100px;
}
.title{
  top:200px;
}

#nav {
  padding:38px;
  
}
#subheader{
  right:200px;
  
}
#butt{
  left:100px;
}
.create{
  left:150px;
  top:100px;
}

div#searchbutton {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  .search-wrapper {
    position: relative;
    top:-10px;
    left:170px;
    label {
      position: absolute;
      font-size: 12px;
      color: rgba(0,0,0,.50);
      top: 8px;
      left: 12px;
      z-index: -1;
      transition: .15s all ease-in-out;
    }
    input {
      
      padding: 4px 12px;
      color: rgba(0,0,0,.70);
      border: 2px solid rgba(0,0,0,.12);
      transition: .15s all ease-in-out;
      background: white;
      &:focus {
        outline: none;
        transform: scale(1.05);
        & + label  {
          font-size: 15px;
          transform: translateY(-24px) translateX(-12px);
        }
      }
      &::-webkit-input-placeholder {
          font-size: 12px;
          color: rgba(0,0,0,.50);
          font-weight: 100;
      }
    }
  }
}
</style>