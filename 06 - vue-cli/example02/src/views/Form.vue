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
            <label>E-mail:</label>
            <input type="email" v-model="form.email">
        </div>
        <div>

            <button @click.prevent="updateItem()" v-if="isUpdate">修改</button>
            <button @click.prevent="addItem()" v-else>新增</button>
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
                    email: ''
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
            updateItem: function () {

                var _this = this;

                axios.put('http://localhost:3000/item/' + this.$route.params.id, {
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
            addItem: function () {

                var _this = this;

                axios.post('http://localhost:3000/item', this.form)
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

                    axios.get('http://localhost:3000/item/' + this.$route.params.id)
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