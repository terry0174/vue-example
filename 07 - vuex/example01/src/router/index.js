import Vue from 'vue'
import VueRouter from 'vue-router'
import list from '../views/List.vue'
import login from '../views/Login.vue'
import userForm from '../views/UserForm.vue'

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
    path: '/user',
    name: 'userFormAdd',
    component: userForm
  },
  {
    path: '/user/:id',
    name: 'userFormUpdate',
    component: userForm
  }
]

const router = new VueRouter({
  routes
})

export default router