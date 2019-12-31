import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
	getters: {
		isLogin(state) {
			return state.accessToken != null && state.accessToken != undefined;
		},
        token(state){

            var base64Url = state.accessToken.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        }
	},
	actions: {},
	modules: {}
})