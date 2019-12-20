import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import list from '../views/List.vue'
import login from '../views/Login.vue'
import userForm from '../views/UserForm.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'list',
		component: list
	}, {
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

router.beforeEach((to, from, next) => {

	if (!store.getters.isLogin && to.path != '/login') {
		next("/login");
	} else if (store.getters.isLogin && to.path == '/login') {
		next("/");
	} else {
		next();
	}
});

export default router