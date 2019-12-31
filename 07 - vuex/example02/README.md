# Step 1. 依登入狀態作頁面導向

`src\router\index.js`

``` javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import list from '../views/List.vue'
import login from '../views/Login.vue'
import form from '../views/Form.vue'

Vue.use(VueRouter)

const routes = [
    // 略
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
```

`src\store\index.js`

```javascript
export default new Vuex.Store({
	state: {
		accessToken: null
	},
	mutations: {
		// 略
	},
	getters: {
		isLogin(state) {
			return state.accessToken != null && state.accessToken != undefined;
		}
	},
	actions: {},
	modules: {}
})
```

`src\App.vue`

```html
<template>
	<div>
		<b-nav tabs align="center">
			<template v-if="$store.getters.isLogin">
				<b-nav-item to="/" exact exact-active-class="active">List</b-nav-item>
				<b-nav-item to="/form" active-class="active">Form</b-nav-item>
				<b-nav-item @click="logout()">Logout</b-nav-item>
			</template>
			<template v-else>
				<b-nav-item to="/login" exact-active-class="active">Login</b-nav-item>
			</template>
		</b-nav>
		<router-view />
	</div>
</template>
```

# Step 2. 提高`Json Server Auth`權限管理

```bash
$ json-server-auth -w db-auth.json -r routes.json
```

# Step 3. 使用`token`呼叫`API`

`src\views\Form.vue`

```javascript
axios.put(process.env.VUE_APP_JSON_SERVER + '/item/' + this.$route.params.id, {
        // 略
    }, {
        headers: {
            "Authorization": "Bearer " + this.$store.state.accessToken
        }
    })
```

```javascript
axios.post(process.env.VUE_APP_JSON_SERVER + '/item', this.form, {
        headers: {
            "Authorization": "Bearer " + this.$store.state.accessToken
        }
    })
```

```javascript
axios.get(process.env.VUE_APP_JSON_SERVER + '/item/' + this.$route.params.id, {
        headers: {
            "Authorization": "Bearer " + this.$store.state.accessToken
        }
    })
```

`src\views\List.vue`

```javascript
axios.delete(process.env.VUE_APP_JSON_SERVER + '/item/' + id, {
        headers:{
            "Authorization" : "Bearer " + this.$store.state.accessToken
        }
    })
```

```javascript
axios.get(process.env.VUE_APP_JSON_SERVER + '/item', {
        headers:{
            "Authorization" : "Bearer " + this.$store.state.accessToken
        }
    })
```