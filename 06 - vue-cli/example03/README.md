# Step 1. 安裝`BootstrapVue`依賴

使用GUI介面安裝

```diff
- src\assets\css\app.css
```

`src\main.js`

```javascript
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
```

# Step 2. 美化`List.vue`

## Step 2.1 使用`<b-container>`&`<b-card>`

`src\views\List.vue`

```html
<template>
    <b-container>
        <b-card bg-variant="light">
        </b-card>
    </b-container>
</template>

<script>
    // 略
</script>

<style scoped>
    .container {
        padding-top: 20px;
    }
</style>
```

## Step 2.2 使用`<b-table>`

`src\views\List.vue`

```html
<template>
    <b-container>
        <b-card bg-variant="light">
            <b-table striped hover id="items-table" :items="items">
                <template v-slot:cell(id)="data">
                    <b-link @click.prevent="removeItem(data.value)">X</b-link>
                </template>
                <template v-slot:cell(name)="data">
                    <router-link :to="'/form/' + data.item.id">
                        {{data.value}}
                    </router-link>
                </template>
                <template v-slot:cell(phone)="data">
                    {{ data.value | phoneFormat}}
                </template>
                <template v-slot:cell(email)="data">
                    <a :href="'mailto:' + data.value">
                        {{ data.value }}
                    </a>
                </template>
            </b-table>
        </b-card>
    </b-container>
</template>

<script>
    // 略
</script>

<style scoped>
    .container {
        padding-top: 20px;
    }

    table {
        margin-bottom: 15px;
    }
</style>
```

## Step 2.3 使用`<b-form>`

`src\views\List.vue`

```html
<template>
    <b-container>
        <b-card bg-variant="light">
            <b-form>
                <b-form-group label="欄位:">
                    <b-form-checkbox-group v-model="display.column">
                        <b-form-checkbox value="name">姓名</b-form-checkbox>
                        <b-form-checkbox value="sex">性別</b-form-checkbox>
                        <b-form-checkbox value="age">年齡</b-form-checkbox>
                        <b-form-checkbox value="phone">電話</b-form-checkbox>
                        <b-form-checkbox value="email">E-mail</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>
                <b-form-group label="性別:">
                    <b-form-checkbox-group v-model="display.sex">
                        <b-form-checkbox value="male">男</b-form-checkbox>
                        <b-form-checkbox value="female">女</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>
            </b-form>
            <b-table striped hover id="items-table" :items="items" :fields="fields">
                <!-- 略 -->
            </b-table>
        </b-card>
    </b-container>
</template>

<script>
    import axios from 'axios';

    export default {
        data: function () {
            return {
                // 略
            }
        },
        filters: {
            // 略
        },
        computed: {
            fields: function () {

                var fields = new Array();

                fields.push({
                    key: 'id',
                    label: ''
                });

                for (var i = 0; i < this.display.column.length; i++) {
                    fields.push({
                        key: this.display.column[i],
                        sortable: true
                    });
                }

                return fields;
            },
            items: function () {

                var _this = this;

                return this.data.filter(function (value, index, arr) {
                    return _this.display.sex.includes(value.sex);
                });
            }
        },
        methods: {
            // 略
        },
        mounted: function () {
            this.init();
        }
    }
</script>
```

## Step 2.4 使用`<b-pagination>`

`src\views\List.vue`

```html
<template>
    <b-container>
        <b-card bg-variant="light">
            <!-- 略 -->
            <b-table striped hover id="items-table" :items="items" :fields="fields" :per-page="perPage" :current-page="currentPage">
                <!-- 略 -->
            </b-table>
            <b-pagination aria-controls="items-table" v-model="currentPage" :total-rows="items.length" :per-page="perPage" first-text="First" prev-text="Prev" next-text="Next" last-text="Last" align="center">
            </b-pagination>
        </b-card>
    </b-container>
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
                data: [],
                currentPage: 1,
                perPage: 5
            }
        },
```

# Step 3. 美化`Form.vue`

`src\views\Form.vue`

```html
<template>
    <b-container>
        <b-card bg-variant="light">
            <b-form @submit.prevent="(isUpdate ? updateItem() : addItem())" @reset="$router.push('/')">
                <b-form-group label="姓名:" label-cols="2">
                    <b-form-input v-model="form.name" type="text" placeholder="Enter name"></b-form-input>
                </b-form-group>
                <b-form-group label="性別:" label-cols="2">
                    <b-form-radio-group v-model="form.sex">
                        <b-form-radio value="male">男</b-form-radio>
                        <b-form-radio value="female">女</b-form-radio>
                    </b-form-radio-group>
                </b-form-group>
                <b-form-group label="年齡:" label-cols="2">
                    <b-form-input v-model="form.age" type="number" placeholder="Enter age"></b-form-input>
                </b-form-group>
                <b-form-group label="電話:" label-cols="2">
                    <b-form-input v-model="form.phone" type="text" placeholder="Enter phone"></b-form-input>
                </b-form-group>
                <b-form-group label="E-mail:" label-cols="2">
                    <b-form-input v-model="form.email" type="email" placeholder="Enter email"></b-form-input>
                </b-form-group>
                <b-button-group>
                    <b-button type="submit" variant="primary">{{isUpdate ? '修改' : '新增'}}</b-button>
                    <b-button type="reset" variant="danger">取消</b-button>
                </b-button-group>
            </b-form>
        </b-card>
    </b-container>
</template>

<script>
    // 略
</script>

<style scoped>
    .container {
        width: 600px;
        padding-top: 20px;
    }
</style>
```

```diff
- watch: {
-     'form.age': function (newValue, oldValue) {
- 
-         if (newValue < 0) {
-             alert("年齡請勿小於0");
-             this.form.age = 0;
-         }
-     }
- },
```

# Step 4. 加入導覽列

`src\App.vue`

```html
<template>
  <div>
    <b-nav tabs align="center">
      <b-nav-item to="/" exact exact-active-class="active">List</b-nav-item>
      <b-nav-item to="/form" active-class="active">Form</b-nav-item>
    </b-nav>
    <router-view />
  </div>
</template>
```
