# Step 1. 安裝`axios`依賴

使用GUI介面安裝

# Step 2. 使用`axios`取代`JQuery`

`src\views\Form.vue`

```html
<script>
    import axios from 'axios';

    export default {
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

                var _this = this;

                axios.put('http://localhost:3000/item/' + this.$route.params.id, {
                        id: this.$route.params.id,
                        name: this.form.name,
                        sex: this.form.sex,
                        age: this.form.age,
                        phone: this.form.phone,
                        email: this.form.email
                    })
                    .then(function (response) {
                        // handle success
                        _this.$router.push("/");
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            },
            addItem: function () {

                var _this = this;

                axios.post('http://localhost:3000/item', this.form)
                    .then(function (response) {
                        // handle success
                        _this.$router.push("/");
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            },
            init: function () {

                if (this.$route.params.id != undefined) {

                    var _this = this;

                    axios.get('http://localhost:3000/item/' + this.$route.params.id)
                        .then(function (response) {
                            // handle success
                            _this.form = response.data;
                        })
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                        })
                        .finally(function () {
                            // always executed
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

`src\views\List.vue`

```html
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
            // 略
        },
        methods: {
            removeItem: function (id) {

                var _this = this;

                axios.delete('http://localhost:3000/item/' + id)
                    .then(function (response) {
                        // handle success
                        _this.init();
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            },
            init: function () {

                var _this = this;

                axios.get('http://localhost:3000/item')
                    .then(function (response) {
                        // handle success
                        _this.data = response.data;
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            }
        },
        mounted: function () {
            this.init();
        }
    }
</script>
```

# Step 3. 設定`ESLint`

`package.json`

```diff
  "rules": {
    "no-unused-vars": "warn",
+   "no-console": "warn",
    "vue/no-unused-vars": "warn"
  }
```