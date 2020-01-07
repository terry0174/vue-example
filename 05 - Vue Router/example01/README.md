# Step 1. 將主要頁面轉移至`List.vue`

`vue\List.vue`

```html
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
                <th v-show="display.column.includes('name')">姓名</th>
                <th v-show="display.column.includes('sex')">性別</th>
                <th v-show="display.column.includes('age')">年齡</th>
                <th v-show="display.column.includes('phone')">電話</th>
                <th v-show="display.column.includes('email')">E-mail</th>
            </tr>
            <tr v-for="item in items" :key="item.name" :class="item.sex">
                <template v-if="display.sex.includes(item.sex)">
                    <td v-show="display.column.includes('name')">{{item.name}}</td>
                    <td v-show="display.column.includes('sex')">{{item.sex == 'male'?'男':'女'}}</td>
                    <td v-show="display.column.includes('age')">{{item.age}}</td>
                    <td v-show="display.column.includes('phone')">{{item.phone | phoneFormat}}</td>
                    <td v-show="display.column.includes('email')">
                        <a v-bind:href="'mailto:' + item.email">{{item.email}}</a>
                    </td>
                </template>
            </tr>
        </table>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                display: {
                    column: ['name', 'sex', 'age', 'phone', 'email'],
                    sex: ['male', 'female']
                },
                data: [{
                        name: '大雄',
                        sex: 'male',
                        age: 50,
                        phone: '09111111111',
                        email: 'test01@asgard.com.tw'
                    },
                    {
                        name: '靜香',
                        sex: 'male',
                        age: 10,
                        phone: '0922222222',
                        email: 'test02@asgard.com.tw'
                    },
                    {
                        name: '小夫',
                        sex: 'female',
                        age: 20,
                        phone: '0933333333',
                        email: 'test03@asgard.com.tw'
                    },
                    {
                        name: '胖虎',
                        sex: 'female',
                        age: 40,
                        phone: '0944444444',
                        email: 'htest04@asgard.com.tw'
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
            items: function () {
                return this.data.slice().sort(function (a, b) {
                    return a.age > b.age ? 1 : -1;
                });
            }
        },
        methods: {}
    }
</script>
```

# Step 2. 使用`Vue Router`設定路由

`js\app.js`

```javascript
/* 定義 router */
const router = new VueRouter({
    routes: [{
            path: '/',
            component: httpVueLoader('vue/List.vue')
        },
        {
            path: '/form',
            component: httpVueLoader('vue/Form.vue')
        }
    ]
});

var app = new Vue({
    router,
    el: '#app',
    data: {},
    methods: {}
})
```

`vue\Form.vue`

```diff
  methods: {
      add: function () {
-         this.$emit('add', {
-             name: this.form.name,
-             sex: this.form.sex,
-             age: this.form.age,
-             phone: this.form.phone,
-             email: this.form.email
-         });
      }
  }
```

`index.html`

```diff
  <head>
      <!-- 略 -->
+     <script src="./js/vue-router.min.js"></script>
  </head>
  <body>
      <div id="app">
-         <form>
-             <!-- 略 -->
-         </form>
-         <table>
-             <!-- 略 -->
-         </table>
-         <form-component v-on:add="add($event)"></form-component>
+         <router-view></router-view>
      </div>
  </body>
```

# Step 3. 建立按鈕導向各頁面 & UI修正

`vue\List.vue`

```html
<template>
    <div>
        <!-- 略 -->
        <router-link to="/form">
            <button>新增</button>
        </router-link>
    </div>
</template>

<script>
    // 略
</script>

<style scoped>
    table {
        margin-bottom: 15px;
    }
</style>
```

`vue\Form.vue`

```html
<template>
    <form>
        <!-- 略 -->
        <div>
            <button @click.prevent="add()">新增</button>
            <router-link to="/">
                <button>取消</button>
            </router-link>
        </div>
    </form>
</template>
```