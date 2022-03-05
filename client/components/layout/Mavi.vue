<!--<template>
  <div class="block latestPostBlock">
    <h2 class="text-center"> Salle</h2>
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
      <v-card class="mx-auto"
            id="cards" 
           
  
      >
            
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
            
            Total: <input type="text" v-model="total" disabled> DT
            <v-card-actions>
              
                <v-btn color="primary" text @click="paymentSend">Reserve</v-btn>
            </v-card-actions>
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
       
},
  myMethod(){
      showPic = false
    },

}
       
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
</style> !-->

<template>
  <div class="block latestPostBlock">
    <h2 class="text-center">  Reservation ici </h2>
    <v-container v-if="salles">
      <v-row rows="10" md="4">
        
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
      <v-form 
    
    id="card"
    ref="form"
    v-model="valid"
    lazy-validation
    
  >
     <v-select
        v-model="typedefete"
        :items="items"
        label="Type de fete"
        dense
        solo
        ></v-select>
    

      <v-dialog
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
          </v-dialog>

          
           <v-dialog
        ref="dialog"
        v-model="modal2"
        :return-value.sync="time"
        persistent
        width="290px"
      >
    
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
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
      solo
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      solo
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

      <v-text-field
        solo
          v-model="numbers"
          :counter="8"
          :error-messages="errors"
          label="Phone Number"
          required
        >
        </v-text-field>
    
        
     <v-autocomplete
            solo
            ref="ville"
            v-model="villes"
            :rules="[() => !!ville || 'This field is required']"
            :items="villes"
            label="Villes"
            placeholder="Select villes..."
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

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

  </v-form>
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
       items: ['Marriage', 'Hadhra', 'Fiancailles', 'Conferences','Siminaire'],  
       typedefete:"",
       dates: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      time:"",
      nombrepersonnes: ['50-100', '100-150', '150-200', '200-250', '250-300', '300-350', ' 350-400', '400-450', '450-500', '500-550', '550-600', ' 600-650', '650-700', '700-750',],
      name: "",
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email:"",
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      numbers:"",
      villes: ['Tunis', 'Sousse', 'Monastir', 'Sfax', 'Mahdia', 'Ariana', ' Hamamet', 'Nabel', 'Gafsa', 'Gabes', 'Tataounie', 'Ben Arous', 'Kairouan', 'Beja', 'Tozeur', 'Jandouba','Lkef','Mednin','Zaghouane',],
      total:"",       
      show: false,
      modal2: false,
      valid: true,
      select: null,
      checkbox: false,
      checkbox: false,
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
.container {
  
 width:100px;
 height:700px;
 border-color: black;
}
.form{
   
    top:50px;
    width:500px;
    height:700px;
    border-color: black;
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