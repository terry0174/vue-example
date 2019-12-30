# Step 1. 使用`Json Server Auth`

```bash
$ npm install -g json-server-auth
$ json-server-auth -w db-auth.json
```

# Step 2. 新增登入介面

`src\router\index.js`

```javascript
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
  // 略
]
```

`src\views\Login.vue`

```html
<template>
    <b-container>
        <b-card bg-variant="light">
            <b-form>
                <b-form-group label="E-Mail:" label-cols="2">
                    <b-form-input v-model="form.email" type="email" placeholder="Enter email"></b-form-input>
                </b-form-group>
                <b-form-group label="Password:" label-cols="2">
                    <b-form-input v-model="form.password" type="password" placeholder="Enter password"></b-form-input>
                </b-form-group>
                <b-button-group>
                    <b-button @click.prevent="login()" variant="primary">登入</b-button>
                    <b-button @click.prevent="cancel()" variant="danger">取消</b-button>
                </b-button-group>
            </b-form>
            <b-alert :show="error != ''" variant="danger">{{error}}</b-alert>
        </b-card>
    </b-container>
</template>

<script>
    import axios from 'axios';

    export default {
        data: function () {
            return {
                error: '',
                form: {
                    email: '',
                    password: ''
                }
            };
        },
        methods: {
            login: function () {

                var _this = this;

                axios.post(process.env.VUE_APP_JSON_SERVER + '/login', this.form)
                    .then(function (response) {

                    })
                    .catch(function (error) {
                        
                        _this.error = error.response.data;
                    })
                    .finally(function () {
                    });
            },
            cancel: function () {

                this.error = '';
                this.form.email = '';
                this.form.password = '';
            }
        },
        mounted: function () {}
    }
</script>

<style scoped>
    .container {
        width: 600px;
        padding-top: 20px;
    }

    form {
        padding-bottom: 20px;
    }
</style>
```

# Step 3. 使用`Vuex`儲存`token`

`src\store\index.js`

```javascript
export default new Vuex.Store({
	state: {
		accessToken: null
	},
	mutations: {
		login(state, info) {
			state.accessToken = info.accessToken;
		}
	},
	actions: {},
	modules: {}
})
```

`src\views\Login.vue`

```javascript
axios.post(process.env.VUE_APP_JSON_SERVER + '/login', this.form)
    .then(function (response) {

        _this.$store.commit('login', response.data);
        _this.$router.push("/");
    })
    .catch(function (error) {
        
        _this.error = error.response.data;
    })
    .finally(function () {
    });
```

# Step 4. 實作登出功能

`src\store\index.js`

```javascript
export default new Vuex.Store({
	state: {
		accessToken: null
	},
	mutations: {
		login(state, info) {
			state.accessToken = info.accessToken;
		},
		logout(state) {
			state.accessToken = null;
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
			<b-nav-item to="/" exact exact-active-class="active">List</b-nav-item>
			<b-nav-item to="/form" active-class="active">Form</b-nav-item>
			<b-nav-item @click="logout()">Logout</b-nav-item>
			<b-nav-item to="/login" exact-active-class="active">Login</b-nav-item>
		</b-nav>
		<router-view />
	</div>
</template>

<script>
	export default {
		data: function () {
			return {}
		},
		methods: {
			logout: function () {

				this.$store.commit('logout');
				this.$router.push("/login");
			}
		}
	}
</script>
```
