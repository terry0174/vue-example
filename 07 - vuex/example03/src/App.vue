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