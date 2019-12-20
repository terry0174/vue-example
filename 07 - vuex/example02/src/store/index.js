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
		}
	},
	actions: {},
	modules: {}
})