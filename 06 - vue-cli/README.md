# Example 00

* Note
    1. 安裝`Vue CLI`
    2. 執行`vue ui`指令,進入GUI介面
    3. 建立專案
    4. 安裝`vue-router`插件

```
$ npm install -g @vue/cli
```

> https://cli.vuejs.org/zh/guide/

# Example 01

* Note
    1. 設定ESLint
        * 關閉"保存時檢查"
        * 關閉"vue/no-unused-vars"
    2. 轉移"05 - Vue Router - example 03"
        * `JQuery`部分暫時註解

# Example 02

* Note
    1. 安裝`axios`依賴
    2. 使用`axios`取代`JQuery`呼叫`JSON Server`

> https://github.com/axios/axios

# Example 03

* Note
    1. 安裝`BootstrapVue`依賴
    2. 使用`BootstrapVue`美化網頁
        1. 使用`<b-container>`,`<b-card>`
        2. 使用`<b-table>`
        3. 使用`<b-pagination>`做分頁顯示
        4. 使用`<b-form>`
        5. 使用`<b-button>`
        6. 使用`<b-nav>`
    3. Build
        * 產出檔案位於`/dist`,可嘗試使用`http-server`執行

# Command

* 供參考使用

## axios
```
$ npm install axios --save
```

## BootstrapVue
```
$ npm install bootstrap --save
$ npm install bootstrap-vue --save
```
> https://bootstrap-vue.js.org/docs/components