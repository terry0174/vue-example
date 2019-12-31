# Step 1. 依據環境變量加入設定檔

`.env.development`

```properties
VUE_APP_JSON_SERVER=http://localhost:3000
```

`.env.production`

```properties
VUE_APP_JSON_SERVER=http://localhost:3001
```

# Step 2. 於`Vue`內使用變量

`src\views\Form.vue`

```diff
! axios.put(process.env.VUE_APP_JSON_SERVER + '/item/' + this.$route.params.id, {
```

```diff
! axios.post(process.env.VUE_APP_JSON_SERVER + '/item', this.form)
```

```diff
! axios.get(process.env.VUE_APP_JSON_SERVER + '/item/' + this.$route.params.id)
```

`src\views\List.vue`

```diff
! axios.delete(process.env.VUE_APP_JSON_SERVER + '/item/' + id)
```

```diff
! axios.get(process.env.VUE_APP_JSON_SERVER + '/item')
```

# Step 3. 切換環境測試

* `development`

    ```bash
    $ json-server -w db.json -p 3000
    ```

* `production`

    ```bash
    $ json-server -w db.json -p 3001
    ```