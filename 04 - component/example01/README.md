# Step 1. 移除"新增用戶表單"

接續 `02 - Syntax`

`js\app.js`

```diff
  var app = new Vue({
      el: '#app',
      data: {
          display: {
              // 略
          },
          data: [
              // 略
          ],
-         form: {
-             name: '哆啦A夢',
-             sex: 'male',
-             age: 30,
-             phone: '0955555555',
-             email: 'test05@asgard.com.tw'
-         }
-     },
      watch: {
          // 略
      },
      filters: {
          // 略
      },
      computed: {
          // 略
      },
      methods: {
-         add: function () {
-             this.data.push({
-                 name: this.form.name,
-                 sex: this.form.sex,
-                 age: this.form.age,
-                 phone: this.form.phone,
-                 email: this.form.email
-             });
-         }
      }
  })
```

`index.html`

```diff
- <form>
-     <div>
-         <label>姓名:</label>
-         <input type="text" v-model="form.name">
-     </div>
-     <div>
-         <label>性別:</label>
-         <input type="radio" value="male" v-model="form.sex">男
-         <input type="radio" value="female" v-model="form.sex">女
-     </div>
-     <div>
-         <label>年齡:</label>
-         <input type="number" v-model.number="form.age">
-     </div>
-     <div>
-         <label>電話:</label>
-         <input type="text" v-model="form.phone">
-     </div>
-     <div>
-         <label>E-mail:</label>
-         <input type="email" v-model="form.email">
-     </div>
-     <div>
-         <button @click.prevent="add()">新增</button>
-     </div>
- </form>
```

# Step 2. 將"新增用戶表單"改為Component

`js\app.js`

```javascript
var formComponent = {
    template: '<form><div><label>姓名:</label><input type="text" v-model="form.name"></div><div><label>性別:</label><input type="radio" value="male" v-model="form.sex">男<input type="radio" value="female" v-model="form.sex">女</div><div><label>年齡:</label><input type="number" v-model.number="form.age"></div><div><label>電話:</label><input type="text" v-model="form.phone"></div><div><label>E-mail:</label><input type="email" v-model="form.email"></div><div><button @click.prevent="add()">新增</button></div></form>',

    data: function () {
        return {
            form: {
                name: '哆啦A夢',
                sex: 'male',
                age: 30,
                phone: '0955555555',
                email: 'test05@asgard.com.tw'
            }
        }
    },
    methods: {
        add: function () {
        }
    }
};

var app = new Vue({
    el: '#app',
    components: {
      'form-component': formComponent
    },
    // 略
```

`index.html`

```html
<body>
    <div id="app">
        <form>
            <!-- 略 -->
        </form>
        <table>
            <!-- 略 -->
        </table>
        <form-component></form-component>
    </div>
    <script src="./js/app.js"></script>
</body>
```

# Step 3. 使用`$emit`與`$event`傳遞事件

`js\app.js`

```javascript
var formComponent = {
    template: '', // 略

    data: function () {
        return {
            // 略
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
};

var app = new Vue({
    el: '#app',
    components: {
      'form-component': formComponent
    },
    data: {
        // 略
    },
    watch: {
        // 略
    },
    filters: {
        // 略
    },
    computed: {
        // 略
    },
    methods: {
        add: function (value) {
            this.data.push(value);
        }
    }
})
```

`index.html`

```html
<form-component v-on:add="add($event)"></form-component>
```
