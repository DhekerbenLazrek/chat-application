<template>
    <div id="app" class="app">
 
        <Navbar/>
        <Footer/>
       
         <!-- <Particle name="particle-js"/> -->
        <!-- <transition
            :name="transitionName"
            :enter-active-class="enterActive"
            :leave-active-class="leaveActive"
            mode="out-in"
        >
        </transition>  -->
    </div>
</template>

<script>
// import _ from 'lodash';
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'


import Particle from '@/components/layout/Particle.vue';



export default {
    name: 'App',
    components: {
        Navbar,
        Footer,
         Particle,
        
    },
    data: function() {
        return {
           
        };
    },
    
};
</script>

<style lang="scss">
@import '@/assets/scss/base/base.scss';
</style>
