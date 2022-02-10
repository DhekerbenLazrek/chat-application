<template>
<v-container fluid >

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
        <v-subheader> image</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="image"
          v-model="image"
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

    <v-row>
      <v-col cols="4">
        <v-subheader> dateevents</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="dateevents"
          v-model="dateevents"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>price</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="price"
          v-model="price"
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
        title:"",
        description:"",
        image:"",
        youtubeLink: "",
        dateevents: "",
        price:"",
    }},
    methods:{
      async createEvent(){
          const newevent = await axios.post('http://localhost:5000/api/Sallesfetes/create', {
              title : this.title,
              description: this.description,
              image: this.image,
              youtubeLink: this.youtubeLink,
              dateevents: this.dateevents,
              price: this.price
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