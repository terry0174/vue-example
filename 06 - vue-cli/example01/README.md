# Step 1. code轉移

```diff
- src\components\HelloWorld.vue
- src\views\About.vue
- src\views\Home.vue 
```

`src\assets\css\app.css`

複製自`05 - Vue Router\example03\css\app.css`

`src\router\index.js`

```javascript
import list from '../views/List.vue'
import form from '../views/Form.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'list',
    component: list
  },
  {
    path: '/form',
    name: 'formAdd',
    component: form
  },
  {
    path: '/form/:id',
    name: 'formUpdate',
    component: form
  }
]
```

`src\views\Form.vue`

複製自`05 - Vue Router\example03\vue\Form.vue`

```diff
  <script>
!     export default {
          data: function () {
              return {
                  // 略
              }
          },
          watch: {
              // 略
          },
          computed: {
              // 略
          },
          methods: {
              updateItem: function () {

!                 // var _this = this;
!                 //
!                 // $.ajax({
!                 //     "async": true,
!                 //     "crossDomain": true,
!                 //     "url": "http://localhost:3000/item/" + this.$route.params.id,
!                 //     "method": "PUT",
!                 //     "headers": {
!                 //         "Content-Type": "application/json",
!                 //         "Accept": "*/*",
!                 //         "Cache-Control": "no-cache",
!                 //         "cache-control": "no-cache"
!                 //     },
!                 //     "processData": false,
!                 //     "data": JSON.stringify({
!                 //         id: this.$route.params.id,
!                 //         name: this.form.name,
!                 //         sex: this.form.sex,
!                 //         age: this.form.age,
!                 //         phone: this.form.phone,
!                 //         email: this.form.email
!                 //     })
!                 // }).done(function (response) {
!                 //     _this.$router.push("/");
!                 // });
              },
              addItem: function () {

!                 // var _this = this;
!                 // 
!                 // $.ajax({
!                 //     "async": true,
!                 //     "crossDomain": true,
!                 //     "url": "http://localhost:3000/item",
!                 //     "method": "POST",
!                 //     "headers": {
!                 //         "Content-Type": "application/json",
!                 //         "Accept": "*/*",
!                 //         "Cache-Control": "no-cache",
!                 //         "cache-control": "no-cache"
!                 //     },
!                 //     "processData": false,
!                 //     "data": JSON.stringify(this.form)
!                 // }).done(function (response) {
!                 //     _this.$router.push("/");
!                 // });
              },
              init: function () {

                  if (this.$route.params.id != undefined) {

!                     // var _this = this;
!                     // 
!                     // $.ajax({
!                     //     "async": true,
!                     //     "crossDomain": true,
!                     //     "url": "http://localhost:3000/item/" + this.$route.params.id,
!                     //     "method": "GET",
!                     //     "headers": {
!                     //         "Content-Type": "application/json",
!                     //         "Accept": "*/*",
!                     //         "Cache-Control": "no-cache",
!                     //         "cache-control": "no-cache"
!                     //     },
!                     //     "processData": false,
!                     // }).done(function (response) {
!                     //     _this.form = response;
!                     // });
                  }
              }
          },
          mounted: function () {
              this.init();
          }
      };
  </script>
```

`src\views\List.vue`

複製自`05 - Vue Router\example03\vue\List.vue`

```diff
  <script>
!     export default {
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
              removeItem: function (id) {

!                 // var _this = this;
!                 // 
!                 // $.ajax({
!                 //     "async": true,
!                 //     "crossDomain": true,
!                 //     "url": "http://localhost:3000/item/" + id,
!                 //     "method": "DELETE",
!                 //     "headers": {
!                 //         "Content-Type": "application/json",
!                 //         "Accept": "*/*",
!                 //         "Cache-Control": "no-cache",
!                 //         "cache-control": "no-cache"
!                 //     },
!                 //     "processData": false,
!                 // }).done(function (response) {
!                 //     _this.init();
!                 // });
              },
              init: function () {

!                 // var _this = this;
!                 // 
!                 // $.ajax({
!                 //     "async": true,
!                 //     "crossDomain": true,
!                 //     "url": "http://localhost:3000/item",
!                 //     "method": "GET",
!                 //     "headers": {
!                 //         "Content-Type": "application/json",
!                 //         "Accept": "*/*",
!                 //         "Cache-Control": "no-cache",
!                 //         "cache-control": "no-cache"
!                 //     },
!                 //     "processData": false,
!                 // }).done(function (response) {
!                 //     _this.data = response;
!                 // });
              }
          },
          mounted: function () {
              this.init();
          }
      }
  </script>
```
`src\App.vue`

```html
<template>
  <router-view/>
</template>
```

`src\main.js `

```javascript
import './assets/css/app.css'
```

# Step 2. 設定`ESLint`

`package.json`

```diff
  "rules": {
+   "no-unused-vars": "warn",
+   "vue/no-unused-vars": "warn"
  }
```

# Step 3. 修正`"vue/no-side-effects-in-computed-properties"`問題

`src\views\List.vue`

```diff
  computed: {
      items: function () {
!         return Array.from(this.data).sort(function (a, b) {
              return a.age > b.age ? 1 : -1;
          });
      }
  },
```