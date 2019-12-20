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

                        _this.$store.commit('login', response.data);
                        _this.$router.push("/");
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