<template>
  <div class="block latestPostBlock">
    <h2 class="text-center"> Completer la Reservation</h2>
    <v-container v-if="salles">
      <v-row rows="12" md="4">
        
          <div class="pl-6 pr-6 row">
             <div
       class="col-md-6 col-sm-6 col-xs-12"
      >
   <v-hover
        v-slot="{ hover }"
        open-delay="200"
      >
  <v-card outlined id="cards" class="mx-auto"
          
        color="white"
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
          </v-card>
          </v-hover>
          </div>
       
    <v-divider></v-divider>
         
      <div
        class="col-md-6 col-sm-6 col-xs-12"
      >
       <v-card outlined id="cards" class=".d-flex">
      <v-form 
    
    class="form"
    ref="form"
    v-model="valid"
    lazy-validation
    
  >
     <v-select
        outlined
        v-model="typedefete"
        :items="typedefete"
        label="Type de fete"
        dense
        solo
        ></v-select>
          <v-text-field 
              outlined
              v-model="startD"
              type="date"
              label="date de début" 
              placeholder="Choisi une date"
            >
            </v-text-field>
            <v-text-field
            outlined
            v-model="endD"
            type="date"
            label="date de fin"
            @change="BetweenDates"
            >
            </v-text-field>

      <!-- <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
              solo
                v-model="dateRangeText"
                hint="Check-in and Check-out dates"
                label="Reservation Date"
                type="date"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
             v-if="modal"
              v-model="dates"
              range
              scrollable
              :min="new Date().toISOString().substr(0, 10)"
            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog> -->

          
           <v-dialog
        ref="dialog"
        v-model="modal2"
        :return-value.sync="time"
        persistent
        width="290px"
      >
    
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
          outlined
            solo
            v-model="time"
            label="Reservation Time"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="modal2"
          v-model="time"
          full-width
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="modal2 = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.dialog.save(time)"
          >
            OK
          </v-btn>
        </v-time-picker>
      </v-dialog>

          <v-autocomplete
            outlined
            solo
            ref="nombrepersonnes"
            v-model="nombrepersonnes"
            :rules="[() => !!nombrepersonnes || 'This field is required']"
            :items="nombrepersonnes"
            label="Nombre de personnes"
            placeholder="Nombre de personnes"
            required
          ></v-autocomplete>

      <v-text-field
      outlined
      solo
      v-model="username"
      :counter="15"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      outlined
      solo
      v-model="useremail"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

      <v-text-field
          outlined
          solo
          v-model="userphone"
          :counter="8"
          :error-messages="errors"
          label="Phone Number"
          required
        >
        </v-text-field>
    
        
     <v-autocomplete
            outlined
            solo
            ref="ville"
            v-model="ville"
            :rules="[() => !!ville || 'This field is required']"
            :items="ville"
            label="Ville"
            placeholder="Select ville..."
            required
          ></v-autocomplete>
           Total: <input type="text" v-model="total" disabled> DT
           <br>
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree to all the conditions?"
      required
    ></v-checkbox>

            <template>
      <div class="text-center ma-2">
        <v-btn small color="cyan  darken-2" class="mx-3"  @click="paymentSend">Reserve</v-btn>
        <v-btn small color="error" class="mr-4" @click="reset">Reset Form</v-btn>
        <v-snackbar v-model="snackbar">
          {{ text }}
          <template v-slot:action="{ attrs }">
            <v-btn color="cyan  darken-2" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
          </template>
        </v-snackbar>
      </div>
    </template>



  </v-form>
</v-card>
  </div>

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
       typedefete: ['Marriage', 'Hadhra', 'Fiancailles', 'Conferences','Siminaire'],
       startD:"",
       endD:"",
      //  dates: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //   .toISOString()
      //   .substr(0, 10),
      // dateRangeText:"",
      time:"",
      nombrepersonnes: [50-100, 100-150, ],
      username: "",
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 15) || 'Name must be less than 15 characters',
      ],
      useremail:"",
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      userphone:"",
      ville: ['Tunis', 'Sousse', 'Monastir', 'Sfax', 'Mahdia', 'Ariana', ' Hamamet', 'Nabel', 'Gafsa', 'Gabes', 'Tataounie', 'Ben Arous', 'Kairouan', 'Beja', 'Tozeur', 'Jandouba','Lkef','Mednin','Zaghouane',],
      total:"",  
      snackbar: false, 
      text: `Added to cart`,    
      show: false,
      modal2: false,
      valid: true,
      select: null,
      checkbox: false,
      checkbox: false,
      errors:"",
    }   
},
    async mounted(){
       const id= this.$route.params.idsalles
       console.log(id)
       const show = await axios.get(`http://localhost:5000/api/Salles/${id}`);
       console.log(show.data)
       this.salles = show.data


    },
    computed: {
    dateRangeText() {
      return this.dates.join(" - ");
    },
    // getImage() {
    //   return require("@/" + this.selected.image);
    // }
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
        typedefete: this.salles.typedefete,
        startD:this.salles.startD,
        endD:this.salles.endD,
        time: this.salles.time,
        nombrepersonnes:this.salles.nombrepersonnes,
        ville:this.salles.ville,
        total: this.total,
        
      };
      var salle = await axios
        .post("http://localhost:5000/api/PaySalle", newPayment)
        if(!salle.data.message) {
          this.$store.commit('setSalle',salle.data)
          this.$store.commit('incrementPayments')
          this.error = "";
          alert("added to payment");
          this.$router.push("/payment")
        } else {
          this.error = "Error try later"
        }
       
},
  myMethod(){
      showPic = false
    },
    validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },

}
       

</script>
<style>

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


#title{
  padding: 4px 62px;
  font-size: 15px;
  right:-50px;
  top:100px;
}
.title{
  top:200px;
}
</style>