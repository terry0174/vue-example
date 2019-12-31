<template>
    <b-container>
        <b-card bg-variant="light">
            <b-form @submit.prevent="(isUpdate ? updateItem() : addItem())" @reset="$router.push('/')">
                <b-form-group label="姓名:" label-cols="2">
                    <b-form-input v-model="form.name" type="text" placeholder="Enter name"></b-form-input>
                </b-form-group>
                <b-form-group label="性別:" label-cols="2">
                    <b-form-radio-group v-model="form.sex">
                        <b-form-radio value="male">男</b-form-radio>
                        <b-form-radio value="female">女</b-form-radio>
                    </b-form-radio-group>
                </b-form-group>
                <b-form-group label="年齡:" label-cols="2">
                    <b-form-input v-model="form.age" type="number" placeholder="Enter age"></b-form-input>
                </b-form-group>
                <b-form-group label="電話:" label-cols="2">
                    <b-form-input v-model="form.phone" type="text" placeholder="Enter phone"></b-form-input>
                </b-form-group>
                <b-form-group label="E-mail:" label-cols="2">
                    <b-form-input v-model="form.email" type="email" placeholder="Enter email"></b-form-input>
                </b-form-group>
                <b-button-group>
                    <b-button type="submit" variant="primary" :disabled="error != ''">{{isUpdate ? '修改' : '新增'}}</b-button>
                    <b-button type="reset" variant="danger">取消</b-button>
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
                    name: '',
                    sex: 'male',
                    age: 0,
                    phone: '',
                    email: '',
                    userId: ''
                }
            }
        },
        computed: {
            isUpdate: function () {
                return this.$route.params.id != undefined;
            }
        },
        methods: {
            updateItem: function () {

                var _this = this;

                axios.put(process.env.VUE_APP_JSON_SERVER + '/item/' + this.$route.params.id, {
                        id: this.$route.params.id,
                        name: this.form.name,
                        sex: this.form.sex,
                        age: this.form.age,
                        phone: this.form.phone,
                        email: this.form.email,
                        userId: this.form.userId
                    }, {
                        headers: {
                            "Authorization": "Bearer " + this.$store.state.accessToken
                        }
                    })
                    .then(function (response) {
                        // handle success
                        _this.$router.push("/");
                    })
                    .catch(function (error) {
                        // handle error
                        _this.error = error.response.data;
                    })
                    .finally(function () {
                        // always executed
                    });
            },
            addItem: function () {

                var _this = this;

                axios.post(process.env.VUE_APP_JSON_SERVER + '/item', this.form, {
                        headers: {
                            "Authorization": "Bearer " + this.$store.state.accessToken
                        }
                    })
                    .then(function (response) {
                        // handle success
                        _this.$router.push("/");
                    })
                    .catch(function (error) {
                        // handle error
                        _this.error = error.response.data;
                    })
                    .finally(function () {
                        // always executed
                    });
            },
            init: function () {

                if (this.$route.params.id != undefined) {

                    var _this = this;

                    axios.get(process.env.VUE_APP_JSON_SERVER + '/item/' + this.$route.params.id, {
                            headers: {
                                "Authorization": "Bearer " + this.$store.state.accessToken
                            }
                        })
                        .then(function (response) {
                            // handle success
                            _this.form = response.data;
                        })
                        .catch(function (error) {
                            // handle error
                            _this.error = error.response.data;
                        })
                        .finally(function () {
                            // always executed
                        });
                }
            }
        },
        mounted: function () {
            this.init();
            this.form.userId = parseInt(this.$store.getters.token.sub);
        }
    };
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