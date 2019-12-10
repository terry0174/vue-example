import Vue from 'vue'
import Router from 'vue-router'
import list from './components/List.vue'
import userForm from './components/UserForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
})
