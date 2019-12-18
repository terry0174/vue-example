import Vue from 'vue'
import VueRouter from 'vue-router'
import list from '../views/List.vue'
import userForm from '../views/UserForm.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'list',
    component: list
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