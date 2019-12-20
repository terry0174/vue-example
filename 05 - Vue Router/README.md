# Example 01

* Note
    1. 將目前`<html>`內的內容建立成單一元件檔(`.vue`)
        * 暫命名為`List.vue`
    2. 使用`Vue Router`為單一元件檔(`.vue`)各設定一個頁面
        * 使用`<router-view>`切換內容
        * `List.vue`為`"/"`
        * `Form.vue`為`"/form"`
            * 因兩頁面不再屬於上下層關係,"新增"按鈕暫時取消事件
    3. 加入按鈕控制頁面切換
        * `List.vue`
            * "新增",按下後切換至`"/form"`
        * `Form.vue`
            * "新增",暫時取消事件
            * "取消",按下後返回`"/"`

> https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html

# Example 02

* Note
    1. 使用`JSON Server`建立`REST API Server`
        * 資源名稱為item
    2. `List.vue`建立初始化事件
        * 進入頁面時至`JSON Server`取得資料
            * 使用`mounted`
            * 使用`JQuery`
    3. `Form.vue`按下"新增"按鈕時,至`JSON Server`寫入資料
        * 完成後返回`"/"`

# Example 03

* Note
    1. 新增按鈕,完成刪除事件
    2. `Router`新增路徑`"/form/:id"`
        * 將id做為參數傳入
        * `List.vue`設為點擊名字導向路徑
    3. `Form.vue`完成修改事件
        * `Form.vue`依據是否傳入id決定執行"新增"或"修改"事件

# Tools

## jQuery
> https://github.com/jquery/jquery

## JSON Server
```bash
# 安裝
$ npm install -g json-server

# 使用 (指定db檔)
$ json-server -w db.json

# 使用 (指定port)
$ json-server -p 3000

# 使用 (指定routes檔)
$ json-server -r routes.json
```

> https://github.com/typicode/json-server