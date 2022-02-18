<template>
  <div class="block latestPostBlock">
    <v-container v-if="salles">
      <h2 class="text-center">Your Event </h2>
      <v-row>
        <v-col cols="12" md="4">

        <v-hover v-slot="{ hover }">
    <v-card
      class="mx-auto"
      color="black"
      max-width="600"
    >
      <v-img :aspect-ratio="16/9" :src="salles.images">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal display-3 white--text"
            style="height: 50%;"
            > 
            {{salles.prix}}
           
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
        <v-btn
        @click="paymentSend"
          absolute
          color="orange"
          class="white--text"
          fab
          large
          right
          top
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text title mb-2">
          <strong >{{events.dateevents}}</strong>
        </div>
        <h3 class="display-1 font-weight-light green--text mb-2">
           {{salles.title}} 
        </h3>
       
        </v-card-text>

         </v-card>
         </v-hover>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
const Cookie =require('js-cookie');
export default {
    name: "sallesShow",
    data() {
    return {
      salles:null,
        username:Cookie.get('name'),
        useremail:Cookie.get('email'),
        userphone:Cookie.get('number'),
        
        
        }   
    },
    async mounted(){
       const id= this.$route.params.idsalles
       console.log(id)
       const show = await axios.get(`http://localhost:5000/api/Salles/${id}`);
       console.log(show.data)
       this.salles = show.data 
       
    },
 methods:{
async paymentSend(){
  let newPayment = {
        title:this.salles.title,
        username: this.username,
        useremail: this.useremail,
        userphone: this.userphone,
        datesalles:this.salles.dateevents,
        prix:this.salles.prix,
      };
      var salle = await axios
        .post("http://localhost:5000/api/PaySalles", newPayment)
        if(!salle.data.message) {
          this.$store.commit('setEvents',salle.data)
          this.$store.commit('incrementPayments')
          this.error = "";
          alert("added to payment");
          this.$router.push("/home");
        } else {
          this.error = "Error try later"
        }
    }
 }
};
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
</style>
