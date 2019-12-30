# Step 1. 利用v-for展示資料

`js\app.js`

```javascript
var app = new Vue({
    el: '#app',
    data: {
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
                email: 'test04@asgard.com.tw'
            }
        ],
        form: {
            name: '哆啦A夢',
            sex: 'male',
            age: 30,
            phone: '0955555555',
            email: 'test05@asgard.com.tw'
        }
    }
})
```

`index.html`

```html
<body>
    <div id="app">
        <table>
            <tr>
                <th>姓名</th>
                <th>性別</th>
                <th>年齡</th>
                <th>電話</th>
                <th>E-mail</th>
            </tr>
            <tr v-for="item in data" :key="item.name" :class="item.sex">
                <td>{{item.name}}</td>
                <td>{{item.sex == 'male'?'男':'女'}}</td>
                <td>{{item.age}}</td>
                <td>{{item.phone}}</td>
                <td>
                    <a v-bind:href="'mailto:' + item.email">{{item.email}}</a>
                </td>
            </tr>
            <tr :class="form.sex">
                <td>{{form.name}}</td>
                <td>{{form.sex == 'male'?'男':'女'}}</td>
                <td>{{form.age}}</td>
                <td>{{form.phone}}</td>
                <td>
                    <a v-bind:href="'mailto:' + form.email">{{form.email}}</a>
                </td>
            </tr> 
        </table>
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
        </form>
    </div>
    <script src="./js/app.js"></script>
</body>
```

# Step 2. 利用v-show控制各欄位顯示

`js\app.js`

```javascript
var app = new Vue({
    el: '#app',
    data: {
        display: {
            column: ['name', 'sex', 'age', 'phone', 'email']
        },
// 以下略
```

`index.html`

```html

<body>
    <div id="app">
        <form>
            <div>
                <label>欄位:</label>
                <input type="checkbox" value="name" v-model="display.column">姓名
                <input type="checkbox" value="sex" v-model="display.column">性別
                <input type="checkbox" value="age" v-model="display.column">年齡
                <input type="checkbox" value="phone" v-model="display.column">電話
                <input type="checkbox" value="email" v-model="display.column">E-mail
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
            <tr v-for="item in data" :key="item.name" :class="item.sex">
                <td v-show="display.column.includes('name')">{{item.name}}</td>
                <td v-show="display.column.includes('sex')">{{item.sex == 'male'?'男':'女'}}</td>
                <td v-show="display.column.includes('age')">{{item.age}}</td>
                <td v-show="display.column.includes('phone')">{{item.phone}}</td>
                <td v-show="display.column.includes('email')">
                    <a v-bind:href="'mailto:' + item.email">{{item.email}}</a>
                </td>
            </tr>
            <tr :class="form.sex">
                <td v-show="display.column.includes('name')">{{form.name}}</td>
                <td v-show="display.column.includes('sex')">{{form.sex == 'male'?'男':'女'}}</td>
                <td v-show="display.column.includes('age')">{{form.age}}</td>
                <td v-show="display.column.includes('phone')">{{form.phone}}</td>
                <td v-show="display.column.includes('email')">
                    <a v-bind:href="'mailto:' + form.email">{{form.email}}</a>
                </td>
            </tr>
        </table>
```

# Step 3. 利用v-if篩選性別

`js\app.js`

```javascript
var app = new Vue({
    el: '#app',
    data: {
        display: {
            column: ['name', 'sex', 'age', 'phone', 'email'],
            sex: ['male', 'female']
        },
// 以下略
```

`index.html`

```html
<body>
    <div id="app">
        <form>
            <!-- 略 -->
            <div>
                <label>性別:</label>
                <input type="checkbox" value="male" v-model="display.sex">男
                <input type="checkbox" value="female" v-model="display.sex">女
            </div>
        </form>
        <table>
            <tr>
                <!-- 略 -->
            </tr>
            <tr v-for="item in data" :key="item.name" :class="item.sex" v-if="display.sex.includes(item.sex)">
                <!-- 略 -->
            </tr>
            <tr :class="form.sex" v-if="display.sex.includes(form.sex)">
                <!-- 略 -->
            </tr>
        </table>
```