<template>
  <v-app-bar app elevate-on-scroll elevation="3" color="black">
    <v-app-bar-nav-icon color="white" @click="$emit('drawerEvent')"></v-app-bar-nav-icon>
    <a href="/" class=".d-flex" style="text-decoration: none">
         <img class="orizon"
            :src="require('../../assets/img/orizon.png')"
          width="130px" height="110px " > 
          </a>
        <v-spacer />
         <div id="search">
  <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Chercher .."/>
        <label> Chercher  ..</label>
  </div>
  <div class="wrapper">
    <div class="card" v-for="post in filteredList" :key="post._id">
      <a v-bind:href="post.link" target="_blank">
        <img v-bind:src="post.img"/>
        <small>posted by: {{ post.author }}</small>
        {{ post.title }}
      </a>
    </div>
  </div>
</div>
        <v-btn class="mx-2 white--text" elevation="2"  small rounded color="black" to="/">
            Home
          </v-btn>
          <v-btn class="mx-2 white--text" elevation="2"  small rounded color="black" to="/signup">
            Contact
          </v-btn>

          <v-btn class="mx-2 white--text" elevation="2"  small rounded color="black" to="/signup">
            Team
          </v-btn>
           <v-btn class="mx-2 white--text" elevation="2"  small rounded color="black" to="/signup">
            Service
          </v-btn>
          
    <!-- <v-col lg="6" cols="12">
      <v-form>
        <v-text-field
          class="p-0 m-0 mt-6"
          dense
          append-icon="mdi-magnify"
          outlined
          rounded
          placeholder="Search"
        />
      </v-form>
    </v-col> -->
    <v-spacer />
    
   
      
  </v-app-bar>
</template>

<script>
export default {
  name: "Topbar",
  data() {
    return {
      menus: [],
      items: []
    };
  },
};
</script>

<style lang="scss">
div#search {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  .search-wrapper {
    position: relative;
    top:1px;
    left:-60px;
    label {
      position: absolute;
      font-size: 12px;
      color: rgba(0,0,0,.50);
      top: 8px;
      left: 12px;
      z-index: -1;
      transition: .15s all ease-in-out;
    }
    input {
      
      padding: 4px 12px;
      color: rgba(0,0,0,.70);
      border: 1px solid rgba(0,0,0,.12);
      transition: .15s all ease-in-out;
      background: white;
      &:focus {
        outline: none;
        transform: scale(1.05);
        & + label  {
          font-size: 10px;
          transform: translateY(-24px) translateX(-12px);
        }
      }
      &::-webkit-input-placeholder {
          font-size: 12px;
          color: rgba(0,0,0,.50);
          font-weight: 100;
      }
    }
  }
}

</style>