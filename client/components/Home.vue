<template>
  <div>
  <Slide/>
<br> 
<!-- TOP PICKS CARD -->
    <div class="pl-6 pr-6 row">
      <div
       class="col-md-6 col-sm-6 col-xs-12"
      >
         <v-card >

          <v-img
            :src="require('../assets/img/toppicks.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="320px"
          >
           <h1 class="centered">Top Picks</h1>
            <div class="text-center">
              <button href="/shop" class="button button1" outlined>SHOP NOW</button>
            </div>
          </v-img>
        </v-card>
      </div>

<!-- WHATS NEW CARD -->
      <div
        class="col-md-6 col-sm-6 col-xs-12"
      >
        <v-card>
          <v-img
            :src="require('../assets/img/Capnew.png')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="320px"
          >
            <h1 class="centered">New</h1>
            
            <div class="text-center">
              <v-spacer />
               <button href="/shop" class="button button1" outlined>SHOP NOW</button>
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
<!-- les cotées -->
    <div class="pl-10 pr-8 row">
      <!-- CATEGORIES -->
      <div
       class="col-md-3 col-sm-3 col-xs-12"
      >
        <card class="pa-1 rounded-circle d-inline-block">
          <v-img
            :src="require('../assets/img/deal2.jpg')"
            class="rounded-circle"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="230px"
            width="230px"
          >
            <h3 class="centered">Salles des fetes </h3>
            <div class="text-center mt-2">
        <router-link to="/sallesdesfetes" class="buttonn">RESERVE NOW</router-link>
            </div>
          </v-img>
        </card>
      </div>
      <!-- ORCHESTRES -->
      <div
        class="col-md-3 col-sm-3 col-xs-12"
      >
      
      <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <card class="pa-1 rounded-circle d-inline-block"  :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/cars.jpg')"
            class="rounded-circle"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="230px"
            width="230px"
          >
            <h3 class="centered">Orchestres</h3>
            <div class="text-center mt-2">
             <router-link to="/orchestres" class="buttonn">RESERVE NOW</router-link>
            </div>
          </v-img>
        </card>
        </v-hover>
      </div>


      <div class="col-md-3 col-sm-3 col-xs-12">
      <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/band.jpg')"
            class="rounded-circle"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="230px"
            width="230px"
          >
            <h3 class="centered">Soulamia/Issawia</h3>
            <div class="text-center mt-2">
               <router-link to="/Soulamia" class="buttonn">RESERVE NOW</router-link>
            </div>
          </v-img>
        </card>
        </v-hover>
        </div>

        <div class="col-md-3 col-sm-3 col-xs-12">
        <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/salle.jpg')"
            class="rounded-circle"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="230px"
            width="230px"
          >
            <h3 class="centered"> Hadhra </h3>
            <div class="text-center mt-2">
           <router-link to="/Hadhra" class="buttonn">RESERVE NOW</router-link>
            </div>
          </v-img>
        </card>
        </v-hover>
        </div>

      <div class="col-md-3 col-sm-3 col-xs-12">
      <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/beauty.jpg')"
            class="rounded-circle"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="230px"
            width="230px"
          >
            <h3 class="centered"> Organiste & Disceur(dj) </h3>
            <div class="text-center mt-2">
               <router-link to="/Disceur" class="buttonn">RESERVE NOW</router-link>
            </div>
          </v-img>
        </card>
        </v-hover>
        </div>
      
  <div class="col-md-3 col-sm-3 col-xs-12">
  <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <card class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/restaurant.jpg')"
            class="rounded-circle"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="230px"
            width="230px"
          >
            <h3 class="centered"> Locations des maisons de marriage </h3>
            <div class="text-center mt-2">
           <router-link to="/Locationmaison" class="buttonn">RESERVE NOW</router-link>
            </div>
          </v-img>
        </card>
        </v-hover>
        </div>

        <div class="col-md-3 col-sm-3 col-xs-12">
        <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <card class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/restaurant.jpg')"
            class="rounded-circle"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="230px"
            width="230px"
          >
            <h3 class="centered"> Locations des voitures de marriage </h3>
            <div class="text-center mt-2">
              <router-link to="/Locationvoiture" class="buttonn">RESERVE NOW</router-link>
            </div>
          </v-img>
        </card>
        </v-hover>
        </div>
         <div class="col-md-3 col-sm-3 col-xs-12">
          <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/restaurant.jpg')"
            class="rounded-circle"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="230px"
            width="230px"
          >
            <h3 class="centered"> Sallon de coiffure et SPA </h3>
            <div class="text-center mt-2">
              <router-link to="/Coiffurespa" class="buttonn">RESERVE NOW</router-link>
              
            </div>
          </v-img>
        </card>
        </v-hover>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-12">
        <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/beauty.jpg')"
            class="rounded-circle"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="230px"
            width="230px"
          >
            <h3 class="centered"> Traiteur </h3>
            <div class="text-center mt-2">
              <router-link to="/Traiteur" class="buttonn">RESERVE NOW</router-link>
            </div>
          </v-img>
        </card>
         </v-hover>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-12">
        <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/beauty.jpg')"
            class="rounded-circle"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="230px"
            width="230px"
          >
            <h3 class="centered"> Photographe pour marriage </h3>
            <div class="text-center mt-2">
              <router-link to="/Photomarriage" class="buttonn">RESERVE NOW</router-link>
            </div>
          </v-img>
        </card>
        </v-hover>
        </div>

        <div class="col-md-3 col-sm-3 col-xs-12">
        <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/beauty.jpg')"
            class="rounded-circle"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
             height="230px"
            width="230px"
          >
            <h3 class="centered"> Salés & Sucrés  </h3>
            <div class="text-center mt-2">
              <router-link to="/Hloudraggi" class="buttonn">RESERVE NOW</router-link>
            </div>
          </v-img>
        </card>
        </v-hover>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-12">
        <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/beauty.jpg')"
            class="rounded-circle"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="230px"
            width="230px"
          >
            <h3 class="centered"> Décoration du marriage  </h3>
            <div class="text-center mt-2">
              <router-link to="/Decorationmarriage" class="buttonn">RESERVE NOW</router-link>
            </div>
          </v-img>
        </card>
        </v-hover>
        </div>

        <div class="col-md-3 col-sm-3 col-xs-12">
        <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/beauty.jpg')"
            class="rounded-circle"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="230px"
            width="230px"
          >
            <h3 class="centered"> Fleuriste  </h3>
            <div class="text-center mt-2">
              <router-link to="/Fleuriste" class="buttonn">RESERVE NOW</router-link>
            </div>
          </v-img>
        </card>
        </v-hover>
        </div>
    </div> 


    <Dealsofday/>
  </div>
</template>


<script>
import Slide from '@/components/slide/Slide.vue';
import Dealsofday from '@/components/dealsofday/Dealsofday.vue';
    export default {
      name:"",
     components: {
       Slide,
       Dealsofday
     },
        data :() => {
            return {
                items: [
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me 2' },
                ],
                activeBtn: 1,
               
                
            }
        },
            methods () {
              
            }
    }
</script>
<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }
.rounded-circle {
  border-radius:320%;
  scroll-padding-inline:40%;
}

  .rounded-card {
      border-radius: 240px;
  }
  .v-card--shaped {
  border-radius: 24px 4px;
}
.centered{
  color: white;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.button {
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 190px -70px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button1 {
  background-color: transparent; 
  color: white; 
  border: 2px solid #fafafafd;
}

.button1:hover {
  background-color: #000000;
  color: white;
}

 .buttonn {
  border-radius: 100px;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 11px;
  margin: 150px -60px;
  transition-duration: 0.4s;
  cursor: pointer ;
  background-color: transparent; 
  color: white; 
  border: 2px solid #fafafafd;
}

.buttonn:hover {
  background-color: #080808;
  color: white;
} 


</style>
