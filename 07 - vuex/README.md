# Example 00

* Note
    1. 安裝`vuex`插件

# Example 01

* Note
    1. 創建登入頁面
        * 使用`db-auth.json`啟`Json Server Auth`完成登入功能
            * 預設密碼`1234`
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