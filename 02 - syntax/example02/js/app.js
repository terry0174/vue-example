/* 開啟vue-devtools */
Vue.config.devtools = true;

/* 開啟錯誤警告 */
Vue.config.debug = true;

var app = new Vue({
    el: '#app',
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
        ],
        form: {
            name: '王五',
            sex: 'male',
            age: 30,
            phone: '0955555555',
            email: 'user05@test.com'
        }
    }
})