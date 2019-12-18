<template>
    <b-container>
        <b-card bg-variant="light">
            <b-form>
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
                <b-form-group label="個人主頁:" label-cols="2">
                    <b-form-input v-model="form.homePage" type="text" placeholder="Enter url"></b-form-input>
                </b-form-group>
                <b-button-group>
                    <b-button @click.prevent="updateUser()" v-if="isUpdate" variant="primary">修改</b-button>
                    <b-button @click.prevent="addUser()" v-else variant="primary">新增</b-button>
                    <b-button variant="danger" @click="$router.push('/')">取消</b-button>
                </b-button-group>
            </b-form>
        </b-card>
    </b-container>
</template>

<script>
    import axios from 'axios';

    export default {
        data: function () {
            return {
                form: {
                    name: '',
                    sex: 'male',
                    age: 0,
                    phone: '',
                    homePage: ''
                }
            }
        },
        computed: {
            isUpdate: function () {
                return this.$route.params.id != undefined;
            }
        },
        methods: {
            updateUser: function () {

                var _this = this;

                axios.put(process.env.VUE_APP_JSON_SERVER + '/users/' + this.$route.params.id, {
                        id: this.$route.params.id,
                        name: this.form.name,
                        sex: this.form.sex,
                        age: this.form.age,
                        phone: this.form.phone,
                        homePage: this.form.homePage
                    })
                    .then(function (response) {
                        // handle success
                        _this.$router.push("/");
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            },
            addUser: function () {

                var _this = this;

                axios.post(process.env.VUE_APP_JSON_SERVER + '/users', this.form)
                    .then(function (response) {
                        // handle success
                        _this.$router.push("/");
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            },
            init: function () {

                if (this.$route.params.id != undefined) {

                    var _this = this;

                    axios.get(process.env.VUE_APP_JSON_SERVER + '/users/' + this.$route.params.id)
                        .then(function (response) {
                            // handle success
                            _this.form = response.data;
                        })
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                        })
                        .finally(function () {
                            // always executed
                        });
                }
            }
        },
        mounted: function () {
            this.init();
        }
    };
</script>

<style scoped>
    .container {
        width: 600px;
        padding-top: 20px;
    }
</style>