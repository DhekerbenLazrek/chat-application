<template>
  <v-app-bar app elevate-on-scroll elevation="3" color="black">
    <v-app-bar-nav-icon color="white" @click="$emit('drawerEvent')"></v-app-bar-nav-icon>
    <a href="/" class=".d-flex" style="text-decoration: none">
         <img class="orizon"
            :src="require('../assets/img/orizon.png')"
          width="130px" height="110px " > 
          </a>
        <v-spacer />
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
      menus: [
        { title: "Profile", icon: "mdi-account" },
        { title: "Change Password", icon: "mdi-key" },
        { title: "Setting", icon: "mdi-cog" },
        
      ],
      items: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    };
  },
};
</script>

<style >


</style>