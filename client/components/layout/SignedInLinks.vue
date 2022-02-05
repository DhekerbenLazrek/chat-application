<template>
                
        <div>
                <span class="btn btn--light">
                    <router-link to="/" class="nav__link">Home</router-link>
                </span>
                <span class="btn btn--light">
                    <router-link to="/" class="nav__link">Shop</router-link>
                </span>
                <span class="btn btn--light">
                    <router-link to="/" class="nav__link">Blog</router-link>
                </span>
                <br> 
                 <br>
               
    <ul class="navbar__nav navbar__nav--right">
            
        <li class="nav__item">
            <router-link to="/rooms" class="nav__link nav__link--rounded">mes reservations </router-link>
        </li>
        <li class="nav__item">
            <router-link
                v-if="Object.keys(this.user).length > 0"
                :to="{name: 'UserProfile', params: { handle: this.user.handle  }}"
                class="nav__link nav__link--rounded"
            >{{ this.user.handle }}</router-link>
        </li>
        <li class="nav__item">
            <button
                @click.prevent="logout"
                class="nav__link nav__link--btn nav__link--rounded"
            >Logout</button>
        </li>
    </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'SignedInLinks',
    props: ['logout', 'user'],
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

<style lang="scss" scoped>
@import '@/assets/scss/components/navbar.scss';
</style>
