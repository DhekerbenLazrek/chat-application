<!-- <div class="pl-10 pr-8 row">
<div class="col-md-4 col-sm-4 col-xs-10">
  <v-card
    id="cards"
    
  >
    <v-card-title >
      <div
      justify="center">
      
    <v-avatar class="avatar" color="grey lighten-1" size="37">
      <v-icon dark>
        mdi-account-circle
      </v-icon>
    </v-avatar>
 </div>
      La Marquise
    </v-card-title>
    <v-divider></v-divider>
    
    <v-card-subtitle>
    <strong>Adresse : Route Tunis GP1 ZI Akouda  </strong>
    </v-card-subtitle>
    <v-card-subtitle>
   <strong> Prix : 6.000.100</strong>
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
              :src="require('../../../assets/img/marquise1.jpg')"
              
             id="1"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="require('../../../assets/img/marquise2.jpg')"
              @click="goToCar()"
               id="2"
            >
              
            </v-carousel-item>
            <v-carousel-item
              :src="require('../../../assets/img/marquise3.jpg')"
            @click="goToReservation()"
              id="3"
              >
            </v-carousel-item>
            <v-carousel-item
              :src="require('../../../assets/img/marquise4.jpg')"
              id="4"
              >
            </v-carousel-item>
          </v-carousel>


    <v-card-actions>
      <v-btn
        color="black"
        text
        small
      >
        Explore
      </v-btn>
      <v-btn
        color="black"
        text
        small
      >
        Video
      </v-btn>
      <v-btn
        color="black"
        text
        small
      >
        Reservation
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
 card 2
<div class="col-md-4 col-sm-4 col-xs-10">
  <v-card
  id="cards"
    
  >
  <v-card-title class="cardtitle">
      <div
      justify="center">
      
    <v-avatar class="avatar" color="grey lighten-1" size="37">
      <v-icon dark>
        mdi-account-circle
      </v-icon>
    </v-avatar>
 </div>
      Le Palace
    </v-card-title>
    <v-divider></v-divider>

    <v-card-subtitle>
     <strong> Adresse: </strong>
    </v-card-subtitle>
    <v-card-subtitle>
      <strong>Prix:</strong>
    </v-card-subtitle>
    <v-carousel 
        class = "carousel"
        height="200"
        width="200" 
        cycle
        hide-delimiter-background
        show-arrows-on-hover
      >
           
            <v-carousel-item
              :src="require('../../../assets/img/lepalace1.jpg')"
              
             id="1"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="require('../../../assets/img/lepalace2.jpg')"
              @click="goToCar()"
               id="2"
            >
              
            </v-carousel-item>
            <v-carousel-item
              :src="require('../../../assets/img/lepalace3.jpg')"
            @click="goToReservation()"
              id="3"
              >
            </v-carousel-item>
            <v-carousel-item
              :src="require('../../../assets/img/lepalace4.jpg')"
              id="4"
              >
            </v-carousel-item>
          </v-carousel>

    <v-card-actions>
      <v-btn
        color="black"
        text
        small
      >
        Explore
      </v-btn>
      <v-btn
        color="black"
        text
        small
      >
        Video
      </v-btn>
      <v-btn
        color="black"
        text
        small
      >
        Reservation
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
   card 3 
<div class="col-md-4 col-sm-4 col-xs-10" >
  <v-card
  :elevation="n - 1"
  id="cards"
    
  >
  <v-card-title class="cardtitle">
      <div
      justify="center">
      
    <v-avatar class="avatar" color="grey lighten-1" size="37">
      <v-icon dark>
        mdi-account-circle
      </v-icon>
    </v-avatar>
 </div>
      Le Serail
    </v-card-title>
<v-divider></v-divider>
    <v-card-subtitle>
    <strong>  Adresse:</strong>
    </v-card-subtitle>
    <v-card-subtitle>
      <strong>Prix :</strong>
    </v-card-subtitle>
    <v-carousel 
        class = "carousel"
        height="200"
        width="200" 
        cycle
        hide-delimiter-background
        show-arrows-on-hover
      >
           
            <v-carousel-item
              :src="require('../../../assets/img/serail1.jpg')"
              
             id="1"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="require('../../../assets/img/serail2.jpg')"
              @click="goToCar()"
               id="2"
            >
              
            </v-carousel-item>
            <v-carousel-item
              :src="require('../../../assets/img/serail3.jpg')"
            @click="goToReservation()"
              id="3"
              >
            </v-carousel-item>
            
          </v-carousel>

    <v-card-actions>
      <v-btn
        color="black"
        text
        small
      >
        Explore
      </v-btn>
      <v-btn
        color="black"
        text
        small
      >
        Video
      </v-btn>
      <v-btn
        color="black"
        text
        small
      >
        Reservation
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
   -->