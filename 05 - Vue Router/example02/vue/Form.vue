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
            <button @click.prevent="addItem()">新增</button>
            <router-link to="/">
                <button>取消</button>
            </router-link>
        </div>
    </form>
</template>

<script>
    module.exports = {
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
        methods: {
            addItem: function () {

                var _this = this;

                $.ajax({
                    "async": true,
                    "crossDomain": true,
                    "url": "http://localhost:3000/item",
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json",
                        "Accept": "*/*",
                        "Cache-Control": "no-cache",
                        "cache-control": "no-cache"
                    },
                    "processData": false,
                    "data": JSON.stringify(this.form)
                }).done(function (response) {
                    _this.$router.push("/");
                });
            }
        }
    };
</script>