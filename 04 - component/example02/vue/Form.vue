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
                    email: 'test05@asgard.com.tw'
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
                    email: this.form.email
                });
            }
        }
    }
</script>