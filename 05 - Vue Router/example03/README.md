# Step 1. 加入刪除功能

`vue\List.vue`

```html
<template>
    <div>
        <!-- 略 -->
        <table>
            <tr>
                <th>刪除</th>
                <!-- 略 -->
            </tr>
            <tr v-for="item in items" :key="item.name" :class="item.sex">
                <template v-if="display.sex.includes(item.sex)">
                    <td>
                        <button @click="removeItem(item.id)">X</button>
                    </td>
                    <!-- 略 -->
                </template>
            </tr>
        </table>
        <!-- 略 -->
    </div>
</template>

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
            removeItem: function (id) {

                var _this = this;

                $.ajax({
                    "async": true,
                    "crossDomain": true,
                    "url": "http://localhost:3000/item/" + id,
                    "method": "DELETE",
                    "headers": {
                        "Content-Type": "application/json",
                        "Accept": "*/*",
                        "Cache-Control": "no-cache",
                        "cache-control": "no-cache"
                    },
                    "processData": false,
                }).done(function (response) {
                    _this.init();
                });
            },
            init: function () {
                // 略
            }
        },
        mounted: function () {
            this.init();
        }
    }
</script>
```

# Step 2. 完善修改功能

`js\app.js`

```javascript
const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'list',
            component: httpVueLoader('vue/List.vue')
        },
        {
            path: '/form',
            name: 'formAdd',
            component: httpVueLoader('vue/Form.vue')
        },
        {
            path: '/form/:id',
            name: 'formUpdate',
            component: httpVueLoader('vue/Form.vue')
        }
    ]
});
```

`vue\Form.vue`

```html
<template>
    <form>
        <!-- 略 -->
        <div>
            <button @click.prevent="updateItem()" v-if="isUpdate">修改</button>
            <button @click.prevent="addItem()" v-else>新增</button>
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
                // 略
            }
        },
        watch: {
            // 略
        },
        computed: {
            isUpdate: function () {
                return this.$route.params.id != undefined;
            }
        },
        methods: {
            updateItem: function () {

                var _this = this;

                $.ajax({
                    "async": true,
                    "crossDomain": true,
                    "url": "http://localhost:3000/item/" + this.$route.params.id,
                    "method": "PUT",
                    "headers": {
                        "Content-Type": "application/json",
                        "Accept": "*/*",
                        "Cache-Control": "no-cache",
                        "cache-control": "no-cache"
                    },
                    "processData": false,
                    "data": JSON.stringify({
                        id: this.$route.params.id,
                        name: this.form.name,
                        sex: this.form.sex,
                        age: this.form.age,
                        phone: this.form.phone,
                        email: this.form.email
                    })
                }).done(function (response) {
                    _this.$router.push("/");
                });
            },
            addItem: function () {
                // 略
            },
            init: function () {

                if (this.$route.params.id != undefined) {

                    var _this = this;

                    $.ajax({
                        "async": true,
                        "crossDomain": true,
                        "url": "http://localhost:3000/item/" + this.$route.params.id,
                        "method": "GET",
                        "headers": {
                            "Content-Type": "application/json",
                            "Accept": "*/*",
                            "Cache-Control": "no-cache",
                            "cache-control": "no-cache"
                        },
                        "processData": false,
                    }).done(function (response) {
                        _this.form = response;
                    });
                }
            }
        },
        mounted: function () {
            this.init();
        }
    };
</script>
```

`vue\List.vue`

```html
<tr v-for="item in items" :key="item.name" :class="item.sex">
    <template v-if="display.sex.includes(item.sex)">
        <td>
            <button @click="removeItem(item.id)">X</button>
        </td>
        <td v-show="display.column.includes('name')">
            <router-link :to="'/form/' + item.id">
                {{item.name}}
            </router-link>
        </td>
        <!-- 略 -->
    </template>
</tr>
```