<template>
    <div>
        <v-icon>mdi-view-dashboard</v-icon>
        <button class="buttonrouter">
            <router-link to="/Reservationutil">Mes Reservations</router-link>
        </button>
       </div>
    
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'SignedInLinks',
    data: function() {
        return {};
    },
    computed: {
        ...mapGetters(['getUserData', 'isAuthorized'])
    },
    methods: {},
    created() {},
    mounted() {}
};
</script>

<style>
.buttonrouter {
  border-radius: 100px;
  color: rgb(14, 12, 12);
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 10px 10px;
  cursor: pointer ;
  border: 3px solid #080808fd;
}
</style>
