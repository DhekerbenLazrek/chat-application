<template>
  <v-stepper
    v-model="e6"
    vertical
  >
    <v-stepper-step
      :complete="e6 > 1"
      step="1"
    >
      Compte Utilisateur
      
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card
        color="white"
        width="300px"
        height="600px">

        <v-text-field
      solo
      outlined
      clearable
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
      <v-text-field
      solo
      outlined
      clearable
      v-model="mobile"
      :rules="mobileRules"
      label="Mobile"
      required
    ></v-text-field>
      <v-text-field
      solo
      outlined
      clearable
      v-model="adresseemail"
      :rules="adresseemailRules"
      label="Adresse Email"
      required
    ></v-text-field>
    <v-text-field
      solo
      outlined
      clearable
      v-model="retaperadresseemail"
      :rules="retaperadresseemailRules"
      label=" Retaper Adresse Email"
      required
    ></v-text-field>
    <v-text-field
      solo
      outlined
      clearable
      v-model="retaperadresseemail"
      :rules="retaperadresseemailRules"
      label=" Retaper Adresse Email"
      required
    ></v-text-field>
    <v-text-field
      solo
      outlined
      clearable
      label="Password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
      v-model="password"
      :rules="passwordRules"
      error-count="1"
      required
      ></v-text-field>
      <v-text-field
      solo
      outlined
      clearable
      label="Repeat Password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
      v-model="repeatpassword"
      :rules="repeatpasswordRules"
      error-count="1"
      required
      ></v-text-field>
    
      </v-card>

      <v-btn
        color="primary"
        @click="e6 = 2"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 2"
      step="2"
    >
      Informations D'affaire
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card
        color="white"
        width="300px"
        height="600px">
<small> Ajouter les inforamtions Professionnelles </small>
        <v-text-field
      solo
      outlined
      clearable
      v-model="nomproduit"
      :rules="nomproduit"
      label=" Nom du Produit"
      required
    ></v-text-field>
    <v-text-field
      solo
      outlined
      clearable
      v-model="nomsociete"
      :rules="nomsociete"
      label=" Nom de la societé/Raison social"
      required
    ></v-text-field>
    <v-text-field
      solo
      outlined
      clearable
      v-model="adresse"
      :rules="adresse"
      label=" Adresse"
      required
    ></v-text-field>
     <v-text-field
      solo
      outlined
      clearable
      v-model="codepostale"
      :rules="codepostale"
      label=" Code Postal"
      required
    ></v-text-field>
    <v-text-field
      solo
      outlined
      clearable
      v-model="ville"
      :rules="ville"
      label=" Ville"
      required
    ></v-text-field>
    <v-text-field
      solo
      outlined
      clearable
      v-model="pays"
      :rules="pays"
      label=" Pays"
      required
    ></v-text-field>
      
    
      </v-card>
      <v-btn
        color="primary"
        @click="e6 = 3"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 3"
      step="3"
    >
      Compte Bancaire 
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card
        color="white"
        width="300px"
        height="600px">
        <small> Ajouter les inforamtions de votre compte bancaire </small>

        <v-text-field
      solo
      outlined
      clearable
      v-model="titulairecompte"
      :rules="titulairecompte"
      label=" Titulaire du Compte"
      required
    ></v-text-field>
    <v-text-field
      solo
      outlined
      clearable
      v-model="numerocompte"
      :rules="numerocompte"
      label=" Numero du Compte Bancaire"
      required
    ></v-text-field>
    <v-text-field
      solo
      outlined
      clearable
      v-model="nombanque"
      :rules="nombanque"
      label=" Nom de la Banque"
      required
    ></v-text-field>
     <v-text-field
      solo
      outlined
      clearable
      v-model="codepostale"
      :rules="codepostale"
      label=" Code Postal"
      required
    ></v-text-field>
    <v-text-field
      solo
      outlined
      clearable
      v-model="codeiban"
      :rules="codeiban"
      label=" Code I ban"
      required
    ></v-text-field>
    <v-text-field
      solo
      outlined
      clearable
      v-model="codeswift"
      :rules="codeswift"
      label=" Code Swift"
      required
    ></v-text-field>
      
      </v-card>
      <v-btn
        color="primary"
        @click="e6 = 4"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
      View setup instructions
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      ></v-card>
      <br>
      <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree to all the conditions?"
      required
    ></v-checkbox>
      <v-btn
       :disabled="!valid"
        color="primary"
        @click="validate"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
  export default {
    data () {
      return {
        e6: 1,
        valid: true,
        password: "",
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
      }
      
    },
     methods: {
      validate () {
        this.$refs.form.validate()
      },
    }
  }
</script>