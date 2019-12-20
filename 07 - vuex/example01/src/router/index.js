import Vue from 'vue'
import VueRouter from 'vue-router'
import list from '../views/List.vue'
import login from '../views/Login.vue'
import form from '../views/Form.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'list',
    component: list
  },{
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/form',
    name: 'formAdd',
    component: form
  },
  {
    path: '/form/:id',
    name: 'formUpdate',
    component: form
  }
]

const router = new VueRouter({
  routes
})

export default router