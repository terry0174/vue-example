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
            <button @click.prevent="add()">新增</button>
        </div>
    </form>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                form: {
                    name: '王五',
                    sex: 'male',
                    age: 30,
                    phone: '0955555555',
                    homePage: 'http://www.google.com'
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
            add: function () {
                this.$emit('add', {
                    name: this.form.name,
                    sex: this.form.sex,
                    age: this.form.age,
                    phone: this.form.phone,
                    homePage: this.form.homePage
                });
            }
        }
    }
</script>