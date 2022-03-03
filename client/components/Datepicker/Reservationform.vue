<template>
<div> 
<h3> Completer la reservation </h3>
<v-divider> </v-divider> 
<br>
<!-- <v-card
    class="card"
    > -->
  <v-form 
    
    class="form"
    ref="form"
    v-model="valid"
    lazy-validation
    
  >
     <v-select
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
            v-model="ville"
            :rules="[() => !!ville || 'This field is required']"
            :items="villes"
            label="Villes"
            placeholder="Select villes..."
            required
          ></v-autocomplete>

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
     <!-- </v-card> -->
  </div>
</template>

<script>
import createSalle from "./createSalle.vue";
import axios from "axios";
const Cookie = require("js-cookie");
  export default {
    name:"Reservationform",
    data() {
      return {
         items: ['Marriage', 'Hadhra', 'Fiancailles', 'Conferences','Siminaire'],
        dates: [],
        modal: false,
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
        time: [],
        modal2: false,
      valid: true,
      select: null,
      nombrepersonnes: ['50-100', '100-150', '150-200', '200-250', '250-300', '300-350', ' 350-400', '400-450', '450-500', '500-550', '550-600', ' 600-650', '650-700', '700-750',],
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      villes: ['Tunis', 'Sousse', 'Monastir', 'Sfax', 'Mahdia', 'Ariana', ' Hamamet', 'Nabel', 'Gafsa', 'Gabes', 'Tataounie', 'Ben Arous', 'Kairouan', 'Beja', 'Tozeur', 'Jandouba','Lkef','Mednin','Zaghouane',],
      numbers:[],
      checkbox: false,
      checkbox: false,
     
        
        
      }
      
    },
    components: {
    createSalle,
  },
    
computed: {
    dateRangeText() {
      return this.dates.join(" - ");
    },
    // getImage() {
    //   return require("@/" + this.selected.image);
    // }
  },
    methods: {
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
.container {
  
 width:300px;
 height:700px;
 border-color: black;
}
.form{
    top:50px;
    width:500px;
    height:700px;
    border-color: black;
}
/* .card {
   width:500px;
} */
</style>
