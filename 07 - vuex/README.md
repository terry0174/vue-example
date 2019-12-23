# Example 00

* Note
    1. 安裝`vuex`插件

# Example 01

* Note
    1. 創建登入頁面
        * 使用`db-auth.json`啟`Json Server Auth`完成登入功能
            * 預設密碼`1234`
        * 登入失敗請跳出錯誤提示
        * 將登入後的資訊寫入`Vuex Store`
    2. 創建登出按鈕

# Example 02

* Note
    1. 使用`Vue Router`配合`Vuex`作頁面導向
        * 使用`beforeEach`
        * menu請配合登入狀態顯示
    2. 各頁面功能作權限管理
        * 使用`routes.json`重啟`Json Server Auth`
        * `axios`呼叫帶入`Authorization`

> https://router.vuejs.org/zh/guide/advanced/navigation-guards.html

# Example 03

* Note
    1. 提高權限管理限制
        * 使用`routes_600.json`重啟`Json Server Auth`
    2. 使用`getters`解析`AcccessToken`
        * 取得`sub`即為`userId`
    3. 修改`Form.vue`
        * 新增參數`userId`
        * 新增錯誤提示
            * 發生錯誤時關閉新增(修改)按鈕
    4. `List.vue`設為僅顯示屬於自己`userId`的資料

> https://jwt.io/
> https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library

# Tools

## JSON Server Auth
```bash
# 安裝
$ npm install -g json-server-auth

# 使用 (指定db檔)
$ json-server-auth -w db.json

# 使用 (指定port)
$ json-server-auth -p 3000

# 使用 (指定routes檔)
$ json-server-auth -r routes.json
```

> https://github.com/jeremyben/json-server-auth