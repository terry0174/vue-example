<template>
    <div>
        <form>
            <div>
                <label>欄位:</label>
                <input type="checkbox" value="name" v-model="display.column">姓名
                <input type="checkbox" value="sex" v-model="display.column">性別
                <input type="checkbox" value="age" v-model="display.column">年齡
                <input type="checkbox" value="phone" v-model="display.column">電話
                <input type="checkbox" value="homePage" v-model="display.column">個人主頁
            </div>
            <div>
                <label>性別:</label>
                <input type="checkbox" value="male" v-model="display.sex">男
                <input type="checkbox" value="female" v-model="display.sex">女
            </div>
        </form>
        <table>
            <tr>
                <th v-show="display.column.includes('name')">姓名</th>
                <th v-show="display.column.includes('sex')">性別</th>
                <th v-show="display.column.includes('age')">年齡</th>
                <th v-show="display.column.includes('phone')">電話</th>
                <th v-show="display.column.includes('homePage')">個人主頁</th>
            </tr>
            <tr v-for="user in users" :key="user.name" :class="user.sex">
                <template v-if="display.sex.includes(user.sex)">
                    <td v-show="display.column.includes('name')">{{user.name}}</td>
                    <td v-show="display.column.includes('sex')">{{user.sex == 'male'?'男':'女'}}</td>
                    <td v-show="display.column.includes('age')">{{user.age}}</td>
                    <td v-show="display.column.includes('phone')">{{user.phone | phoneFormat}}</td>
                    <td v-show="display.column.includes('homePage')">
                        <a v-bind:href="user.homePage">{{user.homePage}}</a>
                    </td>
                </template>
            </tr>
        </table>
        <router-link to="/user">
            <button>新增</button>
        </router-link>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                display: {
                    column: ['name', 'sex', 'age', 'phone', 'homePage'],
                    sex: ['male', 'female']
                },
                table: [{
                        name: '劉一',
                        sex: 'male',
                        age: 50,
                        phone: '09111111111',
                        homePage: 'http://www.google.com'
                    },
                    {
                        name: '陳二',
                        sex: 'male',
                        age: 10,
                        phone: '0922222222',
                        homePage: 'http://www.google.com'
                    },
                    {
                        name: '張三',
                        sex: 'female',
                        age: 20,
                        phone: '0933333333',
                        homePage: 'http://www.google.com'
                    },
                    {
                        name: '李四',
                        sex: 'female',
                        age: 40,
                        phone: '0944444444',
                        homePage: 'http://www.google.com'
                    }
                ]
            }
        },
        filters: {
            phoneFormat: function (value) {
                return value.substring(0, 4) + '-' + value.substring(4, 7) + '-' + value.substring(7);
            }
        },
        computed: {
            users: function () {
                return this.table.sort(function (a, b) {
                    return a.age > b.age ? 1 : -1;
                });
            }
        },
        methods: {
            add: function () {}
        }
    }
</script>

<style scoped>
    table {
        margin-bottom: 15px;
    }
</style>