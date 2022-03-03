<template>
  <div class="block latestPostBlock">
    <h2 class="text-center"> Salle</h2>
    <v-container v-if="salles">
      <v-row rows="12" md="4">
        
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
        class="avatar" size="37"
        :src="salles.avatar"
      >
    </v-avatar>
      <v-card-title class="title" color="black"> <strong>{{salles.title}}</strong> </v-card-title> 
      </div>

      <v-carousel 
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        class = "inline-block"
        id="photocarousel"
        height="200"
        width="600"
        cycle
        hide-delimiter-background
        show-arrows-on-hover
        sm="5"
        md="4"
        lg="5"
        >
        <v-carousel-item
        @click="myMethod"  
        :src="salles.images"
            >
        </v-carousel-item>
          </v-carousel>

           
            <v-card-text color="black" >
            <strong> <p> {{salles.description}} </p> </strong> 
            <strong> Adresse : {{salles.adresse}} </strong>
            <strong> Prix : {{salles.prix}} </strong>
    
            </v-card-text>

            <v-container fluid>
            <v-row dense>
            <v-col>
             <v-text-field 
              v-model="startD"
              type="date"
              label="Date taken"
            >
            </v-text-field>
            <v-text-field
            v-model="endD"
            type="date"
            label="Date delivered"
            @change="BetweenDates"
            >
            </v-text-field>
           
            <v-select
              v-model="time"
              :items="items"
              label="Time of taken and delivered"
          dense
        ></v-select>
            </v-col>
            </v-row>
            </v-container>
            Total: <input type="text" v-model="total" disabled> DT
            <v-card-actions>
              
                <v-btn color="primary" text @click="paymentSend">Reserve</v-btn>
            </v-card-actions>

          </v-card>
          </v-hover>
        </div>
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
       startD:"",
       endD:"",
       time:null,
       total:"",
       items:["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"],
       
       show: false,
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
     BetweenDates ()  {
        const startDate = new Date(this.startD) 
        const endDate = new Date(this.endD) 
        let dayCount = 0
        console.log(startDate, endDate)
        while (endDate > startDate) {
        dayCount++
        startDate.setDate(startDate.getDate() + 1)
      }
        this.total=dayCount*this.salles.prix
        console.log(this.total)
        return dayCount
},

async paymentSend(){
  let newPayment = {
        title:this.salles.title,
        username: this.username,
        useremail: this.useremail,
        userphone: this.userphone,
        startD: this.startD,
        endD: this.endD,
        time: this.time,
        total: this.total,
        
      };
      var salle = await axios
        .post("http://localhost:5000/api/PaySalle", newPayment)
        if(!salle.data.message) {
          this.$store.commit('setSalle',salle.data)
          this.$store.commit('incrementPayments')
          this.error = "";
          alert("added to payment");
          this.$router.push("/")
        } else {
          this.error = "Error try later"
        }
       
}

}
       
}
</script>
<style>
</style>