<template>
    <b-container>
        <b-card bg-variant="light">
            <b-form @submit.prevent="(isUpdate ? updateUser() : addUser())" @reset="$router.push('/')">
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
                    <b-button type="submit" variant="primary">{{isUpdate ? '修改' : '新增'}}</b-button>
                    <b-button type="reset" variant="danger">取消</b-button>
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
                    email: ''
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

                axios.put('http://localhost:3000/users/' + this.$route.params.id, {
                        id: this.$route.params.id,
                        name: this.form.name,
                        sex: this.form.sex,
                        age: this.form.age,
                        phone: this.form.phone,
                        email: this.form.email
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

                axios.post('http://localhost:3000/users', this.form)
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

                    axios.get('http://localhost:3000/users/' + this.$route.params.id)
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