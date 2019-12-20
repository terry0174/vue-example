<template>
    <div>
        <form>
            <div>
                <label>欄位:</label>
                <input type="checkbox" value="name" v-model="display.column">姓名
                <input type="checkbox" value="sex" v-model="display.column">性別
                <input type="checkbox" value="age" v-model="display.column">年齡
                <input type="checkbox" value="phone" v-model="display.column">電話
                <input type="checkbox" value="email" v-model="display.column">E-mail
            </div>
            <div>
                <label>性別:</label>
                <input type="checkbox" value="male" v-model="display.sex">男
                <input type="checkbox" value="female" v-model="display.sex">女
            </div>
        </form>
        <table>
            <tr>
                <th>刪除</th>
                <th v-show="display.column.includes('name')">姓名</th>
                <th v-show="display.column.includes('sex')">性別</th>
                <th v-show="display.column.includes('age')">年齡</th>
                <th v-show="display.column.includes('phone')">電話</th>
                <th v-show="display.column.includes('email')">E-mail</th>
            </tr>
            <tr v-for="item in items" :key="item.name" :class="item.sex">
                <template v-if="display.sex.includes(item.sex)">
                    <td>
                        <button @click="removeItem(item.id)">X</button>
                    </td>
                    <td v-show="display.column.includes('name')">
                        <router-link :to="'/form/' + item.id">
                            {{item.name}}
                        </router-link>
                    </td>
                    <td v-show="display.column.includes('sex')">{{item.sex == 'male'?'男':'女'}}</td>
                    <td v-show="display.column.includes('age')">{{item.age}}</td>
                    <td v-show="display.column.includes('phone')">{{item.phone | phoneFormat}}</td>
                    <td v-show="display.column.includes('email')">
                        <a v-bind:href="'mailto:' + item.email">{{item.email}}</a>
                    </td>
                </template>
            </tr>
        </table>
        <router-link to="/form">
            <button>新增</button>
        </router-link>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data: function () {
            return {
                display: {
                    column: ['name', 'sex', 'age', 'phone', 'email'],
                    sex: ['male', 'female']
                },
                data: []
            }
        },
        filters: {
            phoneFormat: function (value) {
                return value.substring(0, 4) + '-' + value.substring(4, 7) + '-' + value.substring(7);
            }
        },
        computed: {
            items: function () {
                return this.data.sort(function (a, b) {
                    return a.age > b.age ? 1 : -1;
                });
            }
        },
        methods: {
            removeItem: function (id) {

                var _this = this;

                axios.delete('http://localhost:3000/item/' + id)
                    .then(function (response) {
                        // handle success
                        _this.init();
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

                var _this = this;

                axios.get('http://localhost:3000/item')
                    .then(function (response) {
                        // handle success
                        _this.data = response.data;
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            }
        },
        mounted: function () {
            this.init();
        }
    }
</script>

<style scoped>
    table {
        margin-bottom: 15px;
    }
</style>