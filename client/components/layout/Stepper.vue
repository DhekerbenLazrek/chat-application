<template>
<v-container class="d-flex" id="containcard"> 
  <v-stepper  id="stepper" v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
       Compte Utilisateur
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        Informations d'affaires
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        Compte bancaire
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        
      <v-form 
        ref="form"
        class="forminput"
        v-model="valid"
        lazy-validation
        @submit.prevent="submit"
        > 
        <v-text-field
      dense
      outlined
      type="name"
      name="name"
      class="form__control"
      v-model="name"
      :counter="10"
      :rules="nameRules"
      placeholder="Name"
      required
    ></v-text-field>
    <v-text-field
      dense
      outlined
      type="number"
      name="phone number"
      class="form__control"
      v-model="numbers"
      :counter="8"
      :error-messages="errors"
      placeholder="Phone Number"
      required
        >
        </v-text-field>
      <v-text-field
      outlined
      type="email"
      name="email"
      class="form__control"
      v-model="email"
      :rules="emailRules"
      placeholder="adresse E-mail"
      required
    ></v-text-field>
     <v-text-field
     dense
      outlined
      type="email"
      name="email"
      class="form__control"
      v-model="emailrepeat"
      :rules="emailRules"
      placeholder="retaper l'adresse E-mail"
      required
    ></v-text-field>

      <v-text-field
        dense
        outlined
        name="password"
        class="form__control"
        placeholder="Password"
        pattern=".{5,20}"
        title="Password must be between 5 and 20 characters"
        required
        v-model.trim="password"
        :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              error-count="1"
          >
          <label for="password" class="form__label">Password</label>
      </v-text-field>

      <v-text-field
        dense
        outlined
        name="repeatpassword"
        class="form__control"
        placeholder="Repeat Password"
        pattern=".{5,20}"
        title="Password must be between 5 and 20 characters"
        required
        v-model.trim="repeatpassword"
        :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              error-count="1"
          >
          <label for="repeatpassword" class="form__label">Password</label>
      </v-text-field>
        </v-form>
        <v-btn small color="primary" @click="e1 = 2" elevation="2">
          Continue
        </v-btn>

        <v-btn small color="error" class="mx-3" elevation="2" @click="reset">
          Reset Form
          </v-btn>
      </v-stepper-content>

<!-- STEP2 -->
      <v-stepper-content step="2">

          <v-form 
        class="forminput"
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="submit"
        > 
        <v-text-field
        dense
      outlined
      type="text"
      name="nom de la salle"
      class="form__control"
      v-model="namesalle"
      :counter="10"
      :rules="nameRules"
      placeholder="indiquer le nom de la salle"
      required
    ></v-text-field>
    <v-text-field
      dense
      outlined
      type="text"
      name="raison social"
      class="form__control"
      v-model="raisonsocial"
      placeholder="indiquer la raison social"
     
    ></v-text-field>
    
      <v-text-field
      dense
      outlined
      type="adresse"
      name="adresse"
      class="form__control"
      v-model="adresse"
      placeholder="adresse"
      required
    ></v-text-field>
     <v-text-field
      dense
      outlined
      type="number"
      name="code postal"
      class="form__control"
      v-model="codepostal"
      :counter="4"
      :error-messages="errors"
      placeholder="Code Postal"
        >
        </v-text-field>
        <v-text-field
        dense
      outlined
      type="text"
      name="ville"
      class="form__control"
      v-model="ville"
      placeholder="Ville"
      required
    ></v-text-field>
    <v-text-field
      dense
      outlined
      type="text"
      name="pays"
      class="form__control"
      v-model="pays"
      placeholder="Pays"
      
    ></v-text-field>

      
        </v-form>

         <v-btn small color="primary" @click="e1 = 3" elevation="2">
          Continue
        </v-btn>

           <v-btn small color="primary" @click="e1 = 1" class="mx-3" elevation="2">
          Back
        </v-btn>
        <v-btn small color="error" class="mx-3" elevation="2" @click="reset">
          Reset Form
          </v-btn>
          <!-- <a @click="handleBackBtn" class="btn btn--clear btn--info white--text">Back</a> -->
      </v-stepper-content>
<!-- STEP3 -->
      <v-stepper-content step="3">
        
    <v-btn small class="mr-4" type="submit" color="primary">Submit</v-btn>
            {{ error}}
        
      <v-btn small color="primary" @click="e1 = 2" elevation="2">
          Back
        </v-btn>
        <v-btn small color="error" class="mx-3" elevation="2" @click="reset">
          Reset Form
          </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
    </v-container> 
</template>

<script>

import {
  extend,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
setInteractionMode("eager");
extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});
  export default {
    components: {
    ValidationProvider,
    // ValidationObserver,
  },
    data() {
      return {
        e1: 1,
       name: "",
      numbers: "",
      nameRules: [
        v => !!v || 'Name is required',
      ],
      email: "",
      emailrepeat:"",
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      password: "",
      passwordrepeat:"",
      passwordRules: [
        ($v) => !!$v || "Password is required",
        ($v) => ($v && $v.length >= 8) || "Password must have 8+ characters",
        ($v) => /(?=.*[A-Z])/.test($v) || "Must have one uppercase character",
        ($v) => /(?=.*\d)/.test($v) || "Must have one number",
        ($v) =>
          /([!@$%])/.test($v) || "Must have one special character [!@#$%]",
      ],
      showPassword: false,
      error: "",
      errors: [],
      namesalle:"",
      raisonsocial:"",
      adresse:"",
      codepostal:"",
      ville:"",
      pays:"",
      
      
      };
    },
     methods: {
    reset () {
        this.$refs.form.reset()
      },
      // handleBackBtn() {
      //       this.$router.go(-1);
      //   },
  }


  }
</script>

<style> 

#stepcard{
  width:500px;
   height:500px;
   left:10px;
   padding: 4px 20px;
}

#containcard{
  width:700px;
   right:500px;
    color:"transparent"
}
#stepper{
  left:200px;
  
}
.form__control{
  width:400px;
  justify-content: center;
  align-items: center;
  display: inline-block;
   padding: 5px 17px;
   left:100px;
  
}
</style> 