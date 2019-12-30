# Step 1. 建立Vue

`js\app.js`

```javascript
/* 開啟vue-devtools */
Vue.config.devtools = true;
    
/* 開啟錯誤警告 */
Vue.config.debug = true;
    
var app = new Vue({
    el: '#app',
    data: {}
})
```

`index.html`

```html
<head>
    <!-- 略 -->
    <script src="./js/vue.min.js"></script>
    <!-- 略 -->
</head>
<body>
    <div id="app">
        <table>
            <!-- 略 -->
        </table>
    </div>
    <script src="./js/app.js"></script>
</body>
```

# Step 2. 利用v-bind單向綁定資料

`js\app.js`

```javascript
var app = new Vue({
    el: '#app',
    data: {
        name: '哆啦A夢',
        sex: 'male',
        age: 30,
        phone: '0955555555',
        email: 'test05@asgard.com.tw'
    }
})
```

`index.html`

```html
<body>
    <div id="app">
        <table>
            <!-- 略 -->
            <tr :class="sex">
                <td>{{name}}</td>
                <td>{{sex == 'male'?'男':'女'}}</td>
                <td>{{age}}</td>
                <td>{{phone}}</td>
                <td>
                    <a v-bind:href="'mailto:' + email">{{email}}</a>
                </td>
            </tr>            
        </table>
    </div>
    <script src="./js/app.js"></script>
</body>
```

# Step 3. 利用v-model雙向綁定資料

`index.html`

```html
<body>
    <div id="app">
        <table>
            <!-- 略 -->           
        </table>
        <form>
            <div>
                <label>姓名:</label>
                <input type="text" v-model="name">
            </div>
            <div>
                <label>性別:</label>
                <input type="radio" value="male" v-model="sex">男
                <input type="radio" value="female" v-model="sex">女
            </div>
            <div>
                <label>年齡:</label>
                <input type="number" v-model.number="age">
            </div>
            <div>
                <label>電話:</label>
                <input type="text" v-model="phone">
            </div>
            <div>
                <label>E-mail:</label>
                <input type="email" v-model="email">
            </div>
        </form>
    </div>
    <script src="./js/app.js"></script>
</body>
```

