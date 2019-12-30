# Step 1. 利用按鈕綁定事件

`js\app.js`

```javascript
/* 開啟vue-devtools */
Vue.config.devtools = true;

/* 開啟錯誤警告 */
Vue.config.debug = true;

var app = new Vue({
    el: '#app',
    data: {
        // 略
    },
    methods: {
        add: function () {
            this.data.push({
                name: this.form.name,
                sex: this.form.sex,
                age: this.form.age,
                phone: this.form.phone,
                email: this.form.email
            });
        }
    }
})
```

`index.html`

移除v-bind欄位

```diff
<table>
#   <!-- 略 -->
-    <tr :class="form.sex" v-if="display.sex.includes(form.sex)">
-        <td v-show="display.column.includes('name')">{{form.name}}</td>
-        <td v-show="display.column.includes('sex')">{{form.sex == 'male'?'男':'女'}}</td>
-        <td v-show="display.column.includes('age')">{{form.age}}</td>
-        <td v-show="display.column.includes('phone')">{{form.phone}}</td>
-        <td v-show="display.column.includes('email')">
-            <a v-bind:href="'mailto:' + form.email">{{form.email}}</a>
-        </td>
-    </tr>
</table>
```

加入按鈕

```html
<body>
    <div id="app">
        <!-- 略 -->
        <form>
            <!-- 略 -->
            <div>
                <button @click.prevent="add()">新增</button>
            </div>
        </form>
    </div>
    <script src="./js/app.js"></script>
</body>
```
