# Step 1. 使用`JSON Server`

```bash
$ npm install -g json-server
$ json-server -w db.json
```

# Step 2. 載入`List.vue`時自動取得資料

`vue\List.vue`

```diff
      module.exports = {
          data: function () {
              return {
                  display: {
                      column: ['name', 'sex', 'age', 'phone', 'email'],
                      sex: ['male', 'female']
                  },
                  data: [
-                     {
-                         name: '大雄',
-                         sex: 'male',
-                         age: 50,
-                         phone: '09111111111',
-                         email: 'test01@asgard.com.tw'
-                     },
-                     {
-                         name: '靜香',
-                         sex: 'male',
-                         age: 10,
-                         phone: '0922222222',
-                         email: 'test02@asgard.com.tw'
-                     },
-                     {
-                         name: '小夫',
-                         sex: 'female',
-                         age: 20,
-                         phone: '0933333333',
-                         email: 'test03@asgard.com.tw'
-                     },
-                     {
-                         name: '胖虎',
-                         sex: 'female',
-                         age: 40,
-                         phone: '0944444444',
-                         email: 'htest04@asgard.com.tw'
-                     }
                  ]
              }
          },
```

```html
<script>
    module.exports = {
        data: function () {
            return {
                // 略
            }
        },
        filters: {
            // 略
        },
        computed: {
            // 略
        },
        methods: {
            init: function () {

                var _this = this;

                $.ajax({
                    "async": true,
                    "crossDomain": true,
                    "url": "http://localhost:3000/item",
                    "method": "GET",
                    "headers": {
                        "Content-Type": "application/json",
                        "Accept": "*/*",
                        "Cache-Control": "no-cache",
                        "cache-control": "no-cache"
                    },
                    "processData": false,
                }).done(function (response) {
                    _this.data = response;
                });
            }
        },
        mounted: function () {
            this.init();
        }
    }
</script>
```

`index.html`

```html
<head>
    <!-- 略 -->
    <script src="./js/jquery.min.js"></script>
</head>    
```

# Step 3. `Form.vue`按下新增按鈕時寫入資料

`vue\Form.vue`

```diff
  <template>
      <form>
          <!-- 略 -->
          <div>
!             <button @click.prevent="addItem()">新增</button>
              <router-link to="/">
                  <button>取消</button>
              </router-link>
          </div>
      </form>
  </template>

  <script>
      module.exports = {
          data: function () {
              return {
                  form: {
!                     name: '',
!                     sex: 'male',
!                     age: 0,
!                     phone: '',
!                     email: ''
                  }
              }
          },
          watch: {
              // 略
          },
          methods: {
              // 略
          }
      };
  </script>
```

```javascript
methods: {
    addItem: function () {

        var _this = this;

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:3000/item",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(this.form)
        }).done(function (response) {
            _this.$router.push("/");
        });
    }
}
```