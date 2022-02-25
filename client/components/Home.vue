<template>
  <div>
    
    <v-carousel
    id="carousel"
    cycle
    class=".d-flex"
    height="300"
    width="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
        :src="require('../assets/img/slider4.jpg')"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"></div>
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        :src="require('../assets/img/slider2.jpg')"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"></div>
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        :src="require('../assets/img/slider3.jpg')"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"></div>
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        :src="require('../assets/img/oriz.png')"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"></div>
        </v-row>
      </v-carousel-item>
  </v-carousel>
   
<br> 
    <div class="pl-6 pr-6 row">
      <div
       class="col-md-6 col-sm-6 col-xs-12"
      >
        <v-card class=".d-flex">

          <v-img
            :src="require('../assets/img/toppicks.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="350px"
          >
           <h1 class="text-center font-size">Top Picks</h1>
            <div class="text-center">
              <v-btn  href="/shop" class="white--text " outlined>SHOP NOW</v-btn>
            </div>
          </v-img>
        </v-card>
<!--        </v-hover>-->
      </div>

      <div
        class="col-md-6 col-sm-6 col-xs-12"
      >
        <v-card class=".d-flex">
          <v-img
            :src="require('../assets/img/newone.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="350px"
          >
            <h1 class="text-center font-size"></h1>
            <div class="text-center">
              <v-spacer />
              <v-btn  href="/shop" class="white--text" outlined>SHOP NOW</v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
<!-- les cotées -->
    <div class="pl-10 pr-8 row">
      <div
       class="col-md-3 col-sm-3 col-xs-12"
      >
        <v-hover
            v-slot="{ hover }"
            open-delay="200"
                >
        <v-card  class="pa-1 rounded-circle d-inline-block"  :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
          <v-img
            :src="require('../assets/img/deal2.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="210px"
            width="220px"
          >
            <h4 class="text-center font-size">Salles des fetes </h4>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/salles" text>RESERVE NOW <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
         </v-hover>
      </div>
      

      <div
        class="col-md-3 col-sm-3 col-xs-12"
      >
      <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <v-card class="pa-1 rounded-circle d-inline-block"  :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/cars.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="210px"
            width="220px"
          >
            <h4 class="text-center font-size">Orchestres</h4>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/Orchestres" text>RESERVE NOW<v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
        </v-hover>
      </div>

      <div class="col-md-3 col-sm-3 col-xs-12">
      <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <v-card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/band.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
             height="210px"
            width="220px"
          >
            <h4 class="text-center font-size">Soulamia/Issawia</h4>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/Soulamia" text>RESERVE NOW <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
        </v-hover>
        </div>

        <div class="col-md-3 col-sm-3 col-xs-12">
        <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <v-card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/salle.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
             height="210px"
            width="220px"
          >
            <h4 class="text-center font-size"> Hadhra </h4>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/shop" text>RESERVE NOW <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
        </v-hover>
        </div>

      <div class="col-md-3 col-sm-3 col-xs-12">
      <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <v-card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/beauty.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
             height="210px"
            width="220px"
          >
            <h4 class="text-center font-size"> Organiste & Disceur(dj) </h4>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/shop" text>RESERVE NOW<v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
        </v-hover>
        </div>
      
  <div class="col-md-3 col-sm-3 col-xs-12">
  <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <v-card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/restaurant.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
             height="210px"
            width="220px"
          >
            <h4 class="text-center font-size"> Locations des maisons de marriage </h4>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/shop" text>RESERVE NOW <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
        </v-hover>
        </div>

        <div class="col-md-3 col-sm-3 col-xs-12">
        <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <v-card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/restaurant.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
             height="210px"
            width="220px"
          >
            <h4 class="text-center font-size"> Locations des voitures de marriage </h4>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/shop" text>RESERVE NOW <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
        </v-hover>
        </div>
         <div class="col-md-3 col-sm-3 col-xs-12">
          <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <v-card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/restaurant.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
             height="210px"
            width="220px"
          >
            <h4 class="text-center font-size"> Sallon de coiffure et SPA </h4>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/shop" text>RESERVE NOW <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
        </v-hover>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-12">
        <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <v-card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/beauty.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
             height="210px"
            width="220px"
          >
            <h4 class="text-center font-size"> Traiteur </h4>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/shop" text>RESERVE NOW<v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
         </v-hover>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-12">
        <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <v-card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/beauty.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
             height="210px"
            width="220px"
          >
            <h4 class="text-center font-size"> Photographe pour marriage </h4>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/shop" text>RESERVE NOW<v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
        </v-hover>
        </div>

        <div class="col-md-3 col-sm-3 col-xs-12">
        <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <v-card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/beauty.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
             height="210px"
            width="220px"
          >
            <h4 class="text-center font-size"> Salés & Sucrés  </h4>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/shop" text>RESERVE NOW<v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
        </v-hover>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-12">
        <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <v-card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/beauty.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
             height="210px"
            width="220px"
          >
            <h4 class="text-center font-size"> Décoration du marriage  </h4>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/shop" text>RESERVE NOW<v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
        </v-hover>
        </div>

        <div class="col-md-3 col-sm-3 col-xs-12">
        <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
                >
        <v-card  class="pa-1 rounded-circle d-inline-block" :elevation="hover ? 16 : 2">
          <v-img
            :src="require('../assets/img/beauty.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
             height="210px"
            width="220px"
          >
            <h4 class="text-center font-size"> Fleuriste  </h4>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/shop" text>RESERVE NOW<v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
        </v-hover>
        </div>



    </div> 
    <v-container>
      <v-row no-gutters>
        <v-col :cols="12">
          <v-card-text
            class=""
            tile
            outlined
          >
            <v-card-title class="subheading ">Deals of the Day</v-card-title>
            <v-divider></v-divider>
            <div class="row">
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="require('../assets/img/deal1.jpg')"
                  >
                    <v-card-title>Bags & Purses </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    
                    <div>Baggit, Zara, Fossil</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn
                      href="/shop"
                      class="ma-2"
                      outlined
                      color="info"
                    >
                      Explore
                    </v-btn>
                    
                  </div>
                </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="require('../assets/img/deal2.jpg')"
                  >
                    <v-card-title>T-Shirt </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 50%</div>
                    <div>Zara, Selected, Celio</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn href="/shop"
                      class="ma-2"
                      outlined
                      color="info"
                    >
                      Explore
                    </v-btn>
                    
                  </div>
                </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="require('../assets/img/deal3.jpg')"
                  >
                    <v-card-title>Jeans </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                  
                    <div>Jack & Jones, Levis</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn href="/shop"
                      class="ma-2"
                      outlined
                      color="info"
                    >
                      Explore
                    </v-btn>
                  </div>
                </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="require('../assets/img/deal4.jpg')"
                  >
                    <v-card-title>Shoes </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    
                    <div>Nike, Adidas, Puma</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn href="/shop"
                      class="ma-2"
                      outlined
                      color="info"
                    >
                      Explore
                    </v-btn>
                  </div>
                </v-card>
                </v-hover>
              </div>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
    
  </div>
</template>


<script>
// import Slide from '@/components/slide/Slide.vue';
import Dealsofday from '@/components/dealsofday/Dealsofday.vue';
    export default {
      name:"home",
     components: {
      //  Slide,
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
            
    }
</script>
<style>
  
.rounded-circle{
  border-radius:320%;
  scroll-padding-inline:40%;
  border-style:solid;
  border-width:px;
  border-color: rgba(7, 6, 6, 0.616);
}
#carousel {
  top: -10px;
}

 

</style>
