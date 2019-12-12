/* 開啟vue-devtools */
Vue.config.devtools = true;

/* 開啟錯誤警告 */
Vue.config.debug = true;

/* 定義 router */
const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'list',
            component: httpVueLoader('vue/List.vue')
        },
        {
            path: '/user',
            name: 'userFormAdd',
            component: httpVueLoader('vue/UserForm.vue')
        },
        {
            path: '/user/:id',
            name: 'userFormUpdate',
            component: httpVueLoader('vue/UserForm.vue')
        }
    ]
});

var app = new Vue({
    router,
    el: '#app',
    data: {},
    methods: {}
})