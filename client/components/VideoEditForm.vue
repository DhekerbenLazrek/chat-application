<template>
  <v-form v-model="valid">
    <v-text-field v-model="video.name" 
                  label="Name" 
                  counter=50
                  :rules="[required('name'), minLength('name', 5), maxLength('name', 50)]" />
    <v-textarea v-model="video.description" 
                label="Description" 
                counter=true
                :rules="[required('description'), minLength('description', 20)]"/>
    <v-text-field v-model="video.videoUrl" 
                  label="Video URL" 
                  :rules="[required('video URL')]"
                  hint="If you want our friends in China to be able to watch this, please use Amazon S3 or similar instead of Youtube and Vimeo." />
    <v-text-field v-model="video.thumbnail" 
                  label="Thumbnail URL" 
                  :rules="[required('thumbnail URL')]" />
   
    <v-btn @click="saveVideo" :disabled="!valid">{{buttonText}}</v-btn>
  </v-form>
</template>

<script>
  export default {
    data() {
      
      return {
        
      }
    },
    props: ['video', 'saveVideo', 'buttonText']
  }
</script>

<style lang="scss" scoped>

</style>