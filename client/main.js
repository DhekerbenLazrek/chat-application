import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from '@/plugins/vuetify'
import store from './store';
import axios from 'axios';

import setAuthToken from './utils/authToken';
import moment from 'moment';

// import '@/styles/style.css'


Vue.config.productionTip = false;
Vue.config.ignoredElements = ['ion-icons', /^ion-/];
Vue.prototype.moment = moment;





/** Check for auth token on refresh and set authorization header for incoming requests */
if (localStorage.authToken) {
    setAuthToken(localStorage.authToken);
} else {
    setAuthToken(null);
}

/** Axios Request Intercept */
axios.interceptors.request.use(
    function(config) {
        return config;
    },
    function(err) {
        return Promise.reject(err);
    }
);

/** Axios Response Intercept */
axios.interceptors.response.use(
    function(response) {
        return response;
    },
    function(err) {
        if (err.response.status === 401) {
            localStorage.removeItem('authToken');
            store.dispatch('toggleAuthState', false);
            router.push({
                name: 'Login',
                params: { message: 'Session has expired, please login again' }
            });
        }
        return Promise.reject(err);
    }
);

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app');
