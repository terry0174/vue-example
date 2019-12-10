/* 開啟vue-devtools */
Vue.config.devtools = true;

/* 開啟錯誤警告 */
Vue.config.debug = true;

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})