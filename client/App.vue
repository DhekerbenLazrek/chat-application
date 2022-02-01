<template>
    <div id="app" class="app">
        <Layout/>
        <Footer/>
        <!-- <Particle name="particle-js"/>
        <transition
            :name="transitionName"
            :enter-active-class="enterActive"
            :leave-active-class="leaveActive"
            mode="out-in"
        >
        </transition> -->
            <router-view/>
    </div>
</template>

<script>
// import _ from 'lodash';
import Layout from '@/components/layout/Layout.vue'
import Footer from '@/components/layout/Footer.vue'
// import Navbar from '@/components/layout/Navbar.vue';
// import Particle from '@/components/layout/Particle.vue';

// const DEFAULT_TRANSITION = 'fade';
// const DEFAULT_ENTER_ACTIVE_CLASS = 'animated fadeIn';
// const DEFAULT_LEAVE_ACTIVE_CLASS = 'animated fadeOut';

export default {
    name: 'App',
    components: {
        Layout,
        Footer,
        // Navbar: Navbar,
        // Particle,
        
    },
    data: function() {
        return {
            // transitionName: DEFAULT_TRANSITION,
            // leaveActive: DEFAULT_LEAVE_ACTIVE_CLASS,
            // enterActive: DEFAULT_ENTER_ACTIVE_CLASS
        };
    },
    // methods: {
    //     resetTransition() {
    //         this.transitionName = DEFAULT_TRANSITION;
    //         this.enterActive = DEFAULT_ENTER_ACTIVE_CLASS;
    //         this.leaveActive = DEFAULT_LEAVE_ACTIVE_CLASS;
    //     }
    // },
    // created() {
    //     this.$router.beforeEach((to, from, next) => {
    //         if (!_.isEmpty(to.meta)) {
    //             if (to.meta.transitionName) {
    //                 this.transitionName = to.meta.transitionName;
    //             }

    //             if (to.meta.enterActive) {
    //                 this.enterActive = to.meta.enterActive;
    //             }

    //             if (to.meta.leaveActive) {
    //                 this.leaveActive = to.meta.leaveActive;
    //             }
    //         }

    //         if (!to.meta.requiresAuth) {
    //             this.resetTransition();
    //         }
    //         next();
    //     });
    // }
};
</script>

<style lang="scss">
@import '@/assets/scss/base/base.scss';
</style>
