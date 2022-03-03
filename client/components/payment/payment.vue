<template>
 <div class="block latestPostBlock">
    <v-container>
    <v-card 
      class="mx-auto"
      max-width="400" 
      v-if="isSalle" >
      <v-card-title> salle
        
      </v-card-title>
      <v-card-text class="text--primary">
      <div>Your salle is:  {{$store.state.salle.title}}</div>
      <div> FullName:  {{$store.state.salle.username}}</div>
      <div>E-mail:  {{$store.state.salle.useremail}}</div>
      <div>Phone:  {{$store.state.salle.userphone}}</div>
      <div><span> From: </span>{{$store.state.salle.startD}} </div>
      <div><span> To: </span>{{$store.state.salle.endD}} </div>
      <div> At: {{$store.state.salle.time}} </div>
      <div> Total:  {{$store.state.salle.total}}<span> TND </span> </div>
      </v-card-text>
      <v-card-actions>
      <v-btn
      @click="pay"
        color="green"
        text
      >
        Continue
      </v-btn>
      <v-btn
        color="red"
        text
        @click="cancelCar"
      >
        Cancel
      </v-btn>
     </v-card-actions>
    </v-card>
    </v-container>

    <!-- <v-container>
    <v-card 
      class="mx-auto"
      max-width="400" 
      v-if="isHadhra" >
      <v-card-title> hadhra Payment</v-card-title>
      <v-card-text class="text--primary">
      <div>Your Event is:  {{$store.state.event.title}}</div>
      <div> FullName:  {{$store.state.event.username}}</div>
      <div>E-mail:  {{$store.state.event.useremail}}</div>
      <div>Phone:  {{$store.state.event.userphone}}</div>
      <div><span> From: </span>{{$store.state.event.dateevents}} </div>
      <div> Total:  {{$store.state.event.price}}<span> TND </span> </div>
      </v-card-text>
      <v-card-actions>
      <v-btn
      @click="pay"
        color="green"
        text
      >
        Continue
      </v-btn>
      <v-btn
        color="red"
        text
        @click="cancelEvent"
      >
        Cancel
      </v-btn>
     </v-card-actions>
    </v-card>
    </v-container>
    <v-container>
    <v-card 
      class="mx-auto"
      max-width="400" 
      v-if="isHotel" >
      <v-card-title> Hotel Payment</v-card-title>
      <v-card-text class="text--primary">
      <div>Your Hotel is:  {{$store.state.hotel.title}}</div>
      <div> FullName:  {{$store.state.hotel.username}}</div>
      <div>E-mail:  {{$store.state.hotel.useremail}}</div>
      <div>Phone:  {{$store.state.hotel.userphone}}</div>
      <div><span> From: </span>{{$store.state.hotel.startD}} </div>
      <div><span> To: </span>{{$store.state.hotel.endD}} </div>
      <div> Total:  {{$store.state.hotel.total}}<span> TND </span> </div>
      </v-card-text>
      <v-card-actions>
      <v-btn
      @click="pay"
        color="green"
        text
      >
        Continue
      </v-btn>
      <v-btn
        color="red"
        text
        @click="cancelHotel"
      >
        Cancel
      </v-btn>
     </v-card-actions>
    </v-card>
    </v-container> -->
  </div>
</template>
<script>
export default {
    name: "Payment",
    data:()=>{
        return {
            salle:null,
            hadhra:null,
            orchestres:null,
            isSalle:false,
            isHadhra:false,
            isOrchestres:false,
        }
    },
    beforeMount(){
       this.isSalle = this.$store.state.salle
       this.isHadhra= this.$store.state.hadhra
       this.isOrchestres= this.$store.state.orchestres
    },
    methods:{
      pay(){},
      cancelSalle(){
        this.$store.commit('setsalle',null)
          this.$store.commit('decrementPayments')
          this.$router.push("/")
          this.isSalle = null
      },
      cancelHadhra(){
        this.$store.commit('setHadhras',null)
          this.$store.commit('decrementPayments')
          this.$router.push("/")
          this.isHadhra = null
      },
      cancelOrchestres(){
        this.$store.commit('setOrchestres',null)
          this.$store.commit('decrementPayments')
          this.$router.push("/")
          this.isOrchestres = null
      }
    },
   
}
</script>
<style>

</style>