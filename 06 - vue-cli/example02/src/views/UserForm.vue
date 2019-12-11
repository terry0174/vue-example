<template>
    <form>
        <div>
            <label>姓名:</label>
            <input type="text" v-model="form.name">
        </div>
        <div>
            <label>性別:</label>
            <input type="radio" value="male" v-model="form.sex">男
            <input type="radio" value="female" v-model="form.sex">女
        </div>
        <div>
            <label>年齡:</label>
            <input type="number" v-model.number="form.age">
        </div>
        <div>
            <label>電話:</label>
            <input type="text" v-model="form.phone">
        </div>
        <div>
            <label>個人主頁:</label>
            <input type="text" v-model="form.homePage">
        </div>
        <div>

            <button @click.prevent="updateUser()" v-if="isUpdate">修改</button>
            <button @click.prevent="addUser()" v-else>新增</button>
            <router-link to="/">
                <button>取消</button>
            </router-link>
        </div>
    </form>
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
        watch: {
            'form.age': function (newValue, oldValue) {

                if (newValue < 0) {
                    alert("年齡請勿小於0");
                    this.form.age = 0;
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