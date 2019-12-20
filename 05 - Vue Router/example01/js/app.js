/* 開啟vue-devtools */
Vue.config.devtools = true;

/* 開啟錯誤警告 */
Vue.config.debug = true;

/* 定義 router */
const router = new VueRouter({
    routes: [{
            path: '/',
            component: httpVueLoader('vue/List.vue')
        },
        {
            path: '/form',
            component: httpVueLoader('vue/Form.vue')
        }
    ]
});

var app = new Vue({
    router,
    el: '#app',
    data: {},
    methods: {}
})