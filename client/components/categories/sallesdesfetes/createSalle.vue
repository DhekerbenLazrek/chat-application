<template>
<v-container fluid class="container" >
<div> 
<h3> Create </h3> 
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
     @click="createSalle"
      class="mx-2"
      fab
      dark
      color="indigo"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name:"createSalle",
     data() {
    return {
        avatar:"",
        title:"",
        images:"",
        description:"",
        adresse: "",
        prix:"",
        youtubeLink: "",
    }},
    methods:{
      async createSalle(){
          const newsalle = await axios.post('localhost:5000/api/Salles/create', {
              avatar:this.avatar,
              title : this.title,
              images: this.images,
              description: this.description,
              adresse: this.adresse,
              prix: this.prix,
              youtubeLink: this.youtubeLink
          });
          if(newsalle){
              alert('salle saved !')
              window.location.replace('/salles');
          }
      }
  }
}
</script>

<style scoped>
.container {
  
 width:500px;
 height:700px;
 border-color: black;
}
</style>