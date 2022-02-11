<template>
<v-container fluid >

        <v-row>
      <v-col cols="4">
        <v-subheader>Avatar</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="avatar"
          v-model="avatar"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-subheader>title</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="title"
          v-model="title"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-subheader> Adresse</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="adresse"
          v-model="adresse"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader> images</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="images"
          v-model="images"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-subheader>prix</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="prix"
          v-model="prix"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-subheader>description</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="description"
          v-model="description"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>


    <v-row>
      <v-col cols="4">
        <v-subheader> youtubeLink</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="youtubeLink"
          v-model="youtubeLink"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>

    
    <v-btn
     @click="createEvent"
      class="mx-2"
      fab
      dark
      color="indigo"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name:"createEvent",
     data() {
    return {
        avatar:"",
        title:"",
        adresse: "",
        prix:"",
        images:"",
        description:"",
        youtubeLink: "",
    }},
    methods:{
      async createEvent(){
          const newevent = await axios.post('http://localhost:5000/api/Sallesfetes/create', {
              avatar:this.avatar,
              title : this.title,
              adresse: this.adresse,
              prix: this.prix,
              images: this.images,
              description: this.description,
              youtubeLink: this.youtubeLink
          });
          if(newevent){
              alert('event saved !')
              window.location.replace('/Sallesdesfetes');
          }
      }
  }
}
</script>

<style scoped>
</style>