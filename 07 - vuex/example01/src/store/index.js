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
		}
	},
	actions: {},
	modules: {}
})