# Example 00

* 初始模版

# Example 01

* Note
    1. 在`<table>`裡新增一列資料,用`v-bind`綁定資料
        * 以性別綁定`<td>`的`class`
        * 綁定E-mail的連接位置
    2. 新增一張表單,使用`v-model`雙向綁定資料
        * 使`<table>`的最後一列與表單聯動

## `v-bind`
> https://cn.vuejs.org/v2/api/#v-bind
## `v-model`
> https://cn.vuejs.org/v2/api/#v-model

# Example 02

* Note
    1. 將`<table>`的資料改為使用`v-for`顯示
        * 使用`v-bind`綁定資料列暫不加入 (最後一列)
    2. 新增一張表單,用於控制顯示條件
        * 以`checkbox`決定各欄位是否顯示
        * 以`checkbox`決定各性別是否顯示
    3. 依表單內容調整顯示資料
        * 使用`v-show`控制欄位顯示
        * 使用`v-if`控制性別顯示

## `v-for`
> https://cn.vuejs.org/v2/api/#v-for
## `v-if`
> https://cn.vuejs.org/v2/api/#v-if
## `v-show`
> https://cn.vuejs.org/v2/api/#v-show

# Example 03

* Note
    1. 加入"新增"按鈕,並利用`v-on`監聽事件
    2. 加入`methods`,並與"新增"按鈕聯動
        * 按下"新增"按鈕後將表單資料加入`<table>`內

## `methods`
> https://cn.vuejs.org/v2/api/#methods
## `v-on`
> https://cn.vuejs.org/v2/api/#v-on

# Example 04

* Note
    1. 使用`computed`將`<table>`資料依年齡排序
    2. 使用`filters`將電話欄位的內容整理成固定的格式
        * 0912345678 -> 0912-345-678
    3. 使用`watch`監控表單中的年齡欄位,當低於0時發出提醒
        * 當低於0時請將數值重設為0

## `computed`
> https://cn.vuejs.org/v2/api/#computed
## `filters`
> https://cn.vuejs.org/v2/api/#Vue-filter
## `watch`
> https://cn.vuejs.org/v2/api/#watch