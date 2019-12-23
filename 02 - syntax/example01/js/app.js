/* 開啟vue-devtools */
Vue.config.devtools = true;

/* 開啟錯誤警告 */
Vue.config.debug = true;

var app = new Vue({
    el: '#app',
    data: {
        name: '哆啦A夢',
        sex: 'male',
        age: 30,
        phone: '0955555555',
        email: 'test05@asgard.com.tw'
    }
})