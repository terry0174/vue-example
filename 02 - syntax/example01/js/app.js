/* 開啟vue-devtools */
Vue.config.devtools = true;

/* 開啟錯誤警告 */
Vue.config.debug = true;

var app = new Vue({
    el: '#app',
    data: {
        name: '王五',
        sex: 'male',
        age: 30,
        phone: '0955555555',
        homePage: 'http://www.google.com'
    }
})