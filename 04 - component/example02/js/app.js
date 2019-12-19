/* 開啟vue-devtools */
Vue.config.devtools = true;

/* 開啟錯誤警告 */
Vue.config.debug = true;

var app = new Vue({
    el: '#app',
    components: {
      'user-form-component': httpVueLoader('vue/UserForm.vue')
    },
    data: {
        display: {
            column: ['name', 'sex', 'age', 'phone', 'email'],
            sex: ['male', 'female']
        },
        table: [{
                name: '劉一',
                sex: 'male',
                age: 50,
                phone: '09111111111',
                email: 'user01@test.com'
            },
            {
                name: '陳二',
                sex: 'male',
                age: 10,
                phone: '0922222222',
                email: 'user02@test.com'
            },
            {
                name: '張三',
                sex: 'female',
                age: 20,
                phone: '0933333333',
                email: 'user03@test.com'
            },
            {
                name: '李四',
                sex: 'female',
                age: 40,
                phone: '0944444444',
                email: 'user04@test.com'
            }
        ]
    },
    filters: {
        phoneFormat: function (value) {
            return value.substring(0, 4) + '-' + value.substring(4, 7) + '-' + value.substring(7);
        }
    },
    computed: {
        users: function () {
            return this.table.sort(function (a, b) {
                return a.age > b.age ? 1 : -1;
            });
        }
    },
    methods: {
        add: function (person) {
            this.table.push(person);
        }
    }
})