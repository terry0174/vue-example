# Step 1. 利用computed將資料以年齡作排序

`js\app.js`

```javascript
var app = new Vue({
    el: '#app',
    data: {
        // 略
    },
    computed: {
        items: function () {
            return this.data.sort(function (a, b) {
                return a.age > b.age ? 1 : -1;
            });
        }
    },
    methods: {
        // 略
    }
})
```

`index.html`

```html
<table>
    <!-- 略 -->
    <tr v-for="item in items" :key="item.name" :class="item.sex" v-if="display.sex.includes(item.sex)">
        <!-- 略 -->
    </tr>
</table>
```

# Step 2. 利用filters修正電話欄位格式

`js\app.js`

```javascript
var app = new Vue({
    el: '#app',
    data: {
        // 略
    },
    filters: {
        phoneFormat: function (value) {
            return value.substring(0, 4) + '-' + value.substring(4, 7) + '-' + value.substring(7);
        }
    },
    computed: {
        // 略
    },
    methods: {
        // 略
    }
})
```

`index.html`

```html
<table>
    <!-- 略 -->
    <tr v-for="item in items" :key="item.name" :class="item.sex" v-if="display.sex.includes(item.sex)">
        <!-- 略 -->
        <td v-show="display.column.includes('phone')">{{item.phone | phoneFormat}}</td>
        <!-- 略 -->
    </tr>
</table>
```

# Step 3. 利用watch監控年齡欄位

`js\app.js`

```javascript
var app = new Vue({
    el: '#app',
    data: {
        // 略
    },
    watch: {
        'form.age': function (newValue, oldValue) {

            if (newValue < 0) {
                alert("年齡請勿小於0");
                this.form.age = 0;
            }
        }
    },
    filters: {
        // 略
    },
    computed: {
        // 略
    },
    methods: {
        // 略
    }
})
```