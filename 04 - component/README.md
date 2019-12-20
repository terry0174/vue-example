# Example 01

* Note
    1. 將新增用戶的部分拆成Component
        * 使用`$emit`與`$event`傳遞事件

> https://cn.vuejs.org/v2/guide/components.html

# Example 02

* Note
    1. 將Component進一步拆成單一原件檔(`.vue`)
        * 暫命名為`Form.vue`
        * 目前未使用`webpack`打包,暫時使用`http-vue-loader`替代
        * 因瀏覽器安全政策,無法直接開啟單一原件檔(`.vue`),請使用`http-server`建立簡單的伺服器

> https://cn.vuejs.org/v2/guide/single-file-components.html

# Tools

## http-vue-loader
> https://github.com/FranckFreiburger/http-vue-loader

## http-server
```bash
# 安裝
$ npm install http-server -g

# 使用
$ http-server
```
> https://github.com/http-party/http-server