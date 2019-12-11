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

                // var _this = this;
                //
                // $.ajax({
                //     "async": true,
                //     "crossDomain": true,
                //     "url": "http://localhost:3000/users/" + this.$route.params.id,
                //     "method": "PUT",
                //     "headers": {
                //         "Content-Type": "application/json",
                //         "Accept": "*/*",
                //         "Cache-Control": "no-cache",
                //         "cache-control": "no-cache"
                //     },
                //     "processData": false,
                //     "data": JSON.stringify({
                //         id: this.$route.params.id,
                //         name: this.form.name,
                //         sex: this.form.sex,
                //         age: this.form.age,
                //         phone: this.form.phone,
                //         homePage: this.form.homePage
                //     })
                // }).done(function (response) {
                //     _this.$router.push("/");
                // });
            },
            addUser: function () {

                // var _this = this;
                // 
                // $.ajax({
                //     "async": true,
                //     "crossDomain": true,
                //     "url": "http://localhost:3000/users",
                //     "method": "POST",
                //     "headers": {
                //         "Content-Type": "application/json",
                //         "Accept": "*/*",
                //         "Cache-Control": "no-cache",
                //         "cache-control": "no-cache"
                //     },
                //     "processData": false,
                //     "data": JSON.stringify(this.form)
                // }).done(function (response) {
                //     _this.$router.push("/");
                // });
            },
            init: function () {

                if (this.$route.params.id != undefined) {

                    // var _this = this;
                    // 
                    // $.ajax({
                    //     "async": true,
                    //     "crossDomain": true,
                    //     "url": "http://localhost:3000/users/" + this.$route.params.id,
                    //     "method": "GET",
                    //     "headers": {
                    //         "Content-Type": "application/json",
                    //         "Accept": "*/*",
                    //         "Cache-Control": "no-cache",
                    //         "cache-control": "no-cache"
                    //     },
                    //     "processData": false,
                    // }).done(function (response) {
                    //     _this.form = response;
                    // });
                }
            }
        },
        mounted: function () {
            this.init();
        }
    };
</script>