import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Session from '../components/Session.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes1 = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    /*
    {
    path: '/client_about/:sid',
    name: 'ClientAbout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue'),
    },*/
    {
        path: '/next_about',
        name: 'NextAbout',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/query_about',
        name: 'QueryAbout',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },

    {   // ******************************** implement NESTED routes

        path: '/client_about/:sid',
        //name: 'ClientAbout',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/About.vue'),
        children: [
            {
                // Session will be rendered inside About <router-view>
                // when /client_about/:id/session is matched
                path: 'session',
                component: Session
            },
            {
                // Login will be rendered inside About <router-view>
                // when /client_about/:id/login is matched
                path: 'login',
                component: Login
            },
        ]
    },

]
const routes = [
    {
        path:'/',
        components: {
            default: () => import('../views/About.vue'),
            first: () => import('../components/Login.vue'),
            second: () => import('../components/Session.vue')
        }
    },
    {
        path:'/session',
        //name: 'Session',
        components: {
            default: () => import('../views/About.vue'),
            first: () => import('../components/Calendar.vue'),
            second: () => import('../components/Session.vue')
        }
    },
    {
        path:'/session/:sid',
        //name: 'Session',
        components: {
            default:() => import('../views/About.vue'),
            first: () => import('../components/Calendar.vue')
        },
        alias: '/session/:sid/alias',
        //************************************* [on route definition ] ROUTE Guards: beforeEnter
        //****************************** dedicated route logic ,  use cases: pre-fetching data ..

        beforeEnter(to, from, next) {
            console.log('Route guard beforeEnter, route matched : ',to.path)
            next()
        },

    },
    {
        path:'/myredirect', redirect:'/',
        name: 'Myredirect'
    },
    {
        path:'/login',
        name: 'Login',
        components: {
            default: () => import('../components/Login.vue')
        },
        /*
        beforeEnter(to, from, next) {
            console.log('Route guard beforeEnter /LOGIN route matched')
            next()
        }
        */
    },
    {
        path: '/profile/:value',
        name: 'Profile',
        components: {
            default: () => import('../components/Calendar.vue'),
            first: () => import('../components/Profile.vue')
        }
    }
]
console.log(routes1)
const router = new VueRouter({
    routes
})

// ********* [on instance] GLOBAL Guards: beforeEach, beforeResolve, afterEach  -> called each time the URL changes
//*********************************  routes common logic , actions done when ...
let isAuth = true
//*************************************** use cases: role base , authorization , protection
router.beforeEach((to, from, next) => {
    console.log('Global guard: beforeEach, new route navigation start')
    if (to.name !== 'Login' && !isAuth){
        console.log('Global guard: beforeEach , go to Login if not auth')
        next({ name: 'Login' })
    }
    else next()
})

router.beforeResolve((to,from,next) => {
    console.log('Global guard: beforeResolve, route resolved')
    next()
})

//******************************* use cases: views , tracking pages
router.afterEach((to) => {
    console.log('Global guard: afterEach ...everything is resolved for route: ', to.path)
})
export default router
