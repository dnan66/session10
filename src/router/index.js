import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//import Session from '../components/Session.vue'
//import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    //name: 'Home',
    component: Home
  },
    {
        path: '/about',
        //name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
    path: '/client_about/:sid',
    //name: 'ClientAbout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
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
    /*
    {
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
    },*/

]

const router = new VueRouter({
  routes
})

export default router
