import _ from 'lodash';
import Vue from 'vue';
import Router from 'vue-router';
import { checkUserData } from './helpers/user';
import store from './store';
import 'vuetify/dist/vuetify.min.css'


Vue.use(Router);
Vue.config.productionTip = false


const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/components/Home.vue'),
            
        },
        {
            path: '/',
            name: 'Layout',
            component: () => import('@/components/layout/Layout.vue'),
            
        },
       
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/components/auth/Login.vue'),
            props: true,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('@/components/auth/Register.vue'),
            props: true,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/espaceutilisateur',
            name: 'EspaceUtilisateur',
            component: () => import('@/components/espaceutilisateur/EspaceUtilisateur.vue'),
            props: true,
            meta: {
                requiresAuth: true
            }
        },
        //categories
         {
            path: '/sallesdesfetes',
            name: 'Sallesdesfetes',
            component: () => import('@/components/categories/sallesdesfetes/Sallesdesfetes.vue'),
            props: true,
         },
         {
            path: '/coiffurespa',
            name: 'Coiffurespa',
            component: () => import('@/components/categories/coiffurespa/Coiffurespa.vue'),
            props: true,
         },
          {
            path: '/decorationmarriage',
            name: 'Decorationmarriage',
            component: () => import('@/components/categories/decorationmarriage/Decorationmarriage.vue'),
            props: true,
         },
         {
            path: '/disceur',
            name: 'Disceur',
            component: () => import('@/components/categories/disceur/Disceur.vue'),
            props: true,
         },
          {
            path: '/fleuriste',
            name: 'Fleuriste',
            component: () => import('@/components/categories/fleuriste/Fleuriste.vue'),
            props: true,
         },
          {
            path: '/hadhra',
            name: 'Hadhra',
            component: () => import('@/components/categories/hadhra/Hadhra.vue'),
            props: true,
         },
         {
            path: '/hloudraggi',
            name: 'Hloudraggi',
            component: () => import('@/components/categories/hloudraggi/Hloudraggi.vue'),
            props: true,
         },
          {
            path: '/locationmaison',
            name: 'Locationmaison',
            component: () => import('@/components/categories/locationmaison/Locationmaison.vue'),
            props: true,
         },
          {
            path: '/locationmarriage',
            name: 'Locationmarriage',
            component: () => import('@/components/categories/locationmarriage/Locationmarriage.vue'),
            props: true,
         },
         {
            path: '/orchestres',
            name: 'Orchestres',
            component: () => import('@/components/categories/orchestres/Orchestres.vue'),
            props: true,
         },
         {
            path: '/photomarriage',
            name: 'Photomarriage',
            component: () => import('@/components/categories/photomarriage/Photomarriage.vue'),
            props: true,
         },
         {
            path: '/soulamia',
            name: 'Soulamia',
            component: () => import('@/components/categories/soulamia/Soulamia.vue'),
            props: true,
         },
         {
            path: '/traiteur',
            name: 'Traiteur',
            component: () => import('@/components/categories/traiteur/Traiteur.vue'),
            props: true,
         },
        {
            path: '/profile/:handle',
            name: 'Profile',
            component: () => import('@/components/profile/Profile.vue'),
            meta: {
                requiresAuth: true,
               
            }
        },
        {
            path: '/user/:handle',
            name: 'UserProfile',
            component: () => import('@/components/user/UserProfile.vue'),
            props: true,
            meta: {
                requiresAuth: true,
                
            }
        },
        {
            path: '/user/:handle/edit',
            name: 'EditUserProfile',
            component: () => import('@/components/user/EditUserProfile.vue'),
            props: true,
            meta: {
                requiresAuth: true,
                transitionName: 'router-anim',
                enterActive: 'animated fadeIn'
            }
        },
       
       
        {
            path: '*',
            component: () => import('@/components/error/NotFound.vue')
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    await checkUserData(next);
    if (to.meta.requiresAuth) {
        if (localStorage.getItem('authToken') === null) {
            localStorage.clear();
            next({
                name: 'Login',
                params: { message: 'You are unauthorized, Please login or make an account to access' }
            });
        } else {
            next();
        }
    } else if (!_.isEmpty(to.meta) && !to.meta.requiresAuth) {
        if (localStorage.getItem('authToken')) {
            next({
                name: 'UserProfile',
                params: { handle: store.getters.getUserData.handle }
            });
        } else {
            next();
        }
    } else {
        next();
    }
    next();
});

export default router;
