<template>
    <div class="page home">
        <section class="section section__landing">
            <div class="section__heading">
                <span style="color:#fa861a" class="section__title"></span>
            </div>
            <div class="section__content">
                <p class="section__lead">
                    Realtime chat application created to talk about anything and have fun
                </p>
                <router-link to="/login" class="btn btn--anim btn--info">login now</router-link>
                <router-link to="/register" class="btn btn--anim btn--info"
                    >Register Now</router-link
                >
               
            </div>
        </section>
    </div>
</template>

<script>
// @ is an alias to /client
import Typed from 'typed.js';

export default {
    name: 'Home',
    props: [],
    components: {},
    mounted() {
        let options = {
            strings: [
                'We are happy to see you',
                'Chat with Friends'
            ],
            typeSpeed: 100,
            loop: true
        };

        new Typed('.section__title', options);
    }
};
</script>
