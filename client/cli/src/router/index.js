import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import SingIn from '../views/SingIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'SingIn',
    component: SingIn
  },
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Nosotros.vue')
  },
  {
    path: '/crear_cuenta',
    name: 'Crear_cuenta',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Crear_cuenta.vue')
  },
  {
    path: '/reset_password',
    name: 'Reset_password',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Reset_password.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/habitaciones_junior',
    name: 'Habitaciones_junior',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Habitaciones_junior.vue')
  }
  ,
  {
    path: '/habitaciones_sencillas',
    name: 'Habitaciones_sencillas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Habitaciones_sencillas.vue')
  }
  ,
  {
    path: '/habitaciones_presidenciales',
    name: 'Habitaciones_presidenciales',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Habitaciones_presidenciales.vue')
  }

  ,
  {
    path: '/crear_habitacion',
    name: 'Crear_habitacion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Crear-habitacion.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
