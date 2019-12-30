# Step 1. 提高`Json Server Auth`權限管理

```bash
$ json-server-auth -w db-auth.json -r routes_600.json
```

# Step 2. 解析`token`

`src\store\index.js`

```javascript
export default new Vuex.Store({
	state: {
        accessToken: null
	},
	mutations: {
        // 略
	},
	getters: {
        isLogin(state) {
            return state.accessToken != null && state.accessToken != undefined;
        },
        token(state){

            var base64Url = state.accessToken.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        },
	},
	actions: {},
	modules: {}
})
```

# Step 3. 修改`List.vue`只取出屬於自己的資料

`src\views\List.vue`

```javascript
axios.get(process.env.VUE_APP_JSON_SERVER + '/item?userId=' + this.$store.getters.token.sub, {
```

# Step 4. 修改`Form.vue`

`src\views\Form.vue`

```diff
  <template>
      <b-container>
          <b-card bg-variant="light">
              <b-form @submit.prevent="(isUpdate ? updateItem() : addItem())" @reset="$router.push('/')">
                  <!-- 略 -->
                  <b-button-group>
!                     <b-button type="submit" variant="primary" :disabled="error != ''">{{isUpdate ? '修改' : '新增'}}</b-button>
                      <b-button type="reset" variant="danger">取消</b-button>
                  </b-button-group>
              </b-form>
+             <b-alert :show="error != ''" variant="danger">{{error}}</b-alert>
          </b-card>
      </b-container>
  </template>

  <script>
      import axios from 'axios';

      export default {
          data: function () {
              return {
+                 error: '',
                  form: {
                      name: '',
                      sex: 'male',
                      age: 0,
                      phone: '',
                      email: '',
+                     userId: ''
                  }
              }
          },
          computed: {
              // 略 
          },
          methods: {
              updateItem: function () {

                  var _this = this;

                  axios.put(process.env.VUE_APP_JSON_SERVER + '/item/' + this.$route.params.id, {
                          id: this.$route.params.id,
                          name: this.form.name,
                          sex: this.form.sex,
                          age: this.form.age,
                          phone: this.form.phone,
                          email: this.form.email,
+                         userId: this.form.userId
                      }, {
                          headers: {
                              "Authorization": "Bearer " + this.$store.state.accessToken
                          },
                      })
                      .then(function (response) {
                          // handle success
                          _this.$router.push("/");
                      })
                      .catch(function (error) {
                          // handle error
+                         _this.error = error.response.data;
                      })
                      .finally(function () {
                          // always executed
                      });
              },
              addItem: function () {

                  var _this = this;

                  axios.post(process.env.VUE_APP_JSON_SERVER + '/item', this.form, {
                          headers: {
                              "Authorization": "Bearer " + this.$store.state.accessToken
                          },
                      })
                      .then(function (response) {
                          // handle success
                          _this.$router.push("/");
                      })
                      .catch(function (error) {
                          // handle error
+                         _this.error = error.response.data;
                      })
                      .finally(function () {
                          // always executed
                      });
              },
              init: function () {

                  if (this.$route.params.id != undefined) {

                      var _this = this;

                      axios.get(process.env.VUE_APP_JSON_SERVER + '/item/' + this.$route.params.id, {
                              headers: {
                                  "Authorization": "Bearer " + this.$store.state.accessToken
                              }
                          })
                          .then(function (response) {
                              // handle success
                              _this.form = response.data;
                          })
                          .catch(function (error) {
                              // handle error
+                             _this.error = error.response.data;
                          })
                          .finally(function () {
                              // always executed
                          });
                  }
              }
          },
          mounted: function () {
              this.init();
+             this.form.userId = parseInt(this.$store.getters.token.sub);
          }
      };
  </script>

  <style scoped>
      .container {
          width: 600px;
          padding-top: 20px;
      }

+     form {
+         padding-bottom: 20px;
+     }
  </style>
```

