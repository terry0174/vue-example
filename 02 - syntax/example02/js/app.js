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
        data: [{
                name: '劉一',
                sex: 'male',
                age: 50,
                phone: '09111111111',
                email: 'test01@asgard.com.tw'
            },
            {
                name: '陳二',
                sex: 'male',
                age: 10,
                phone: '0922222222',
                email: 'test02@asgard.com.tw'
            },
            {
                name: '張三',
                sex: 'female',
                age: 20,
                phone: '0933333333',
                email: 'test03@asgard.com.tw'
            },
            {
                name: '李四',
                sex: 'female',
                age: 40,
                phone: '0944444444',
                email: 'test04@asgard.com.tw'
            }
        ],
        form: {
            name: '王五',
            sex: 'male',
            age: 30,
            phone: '0955555555',
            email: 'test05@asgard.com.tw'
        }
    }
})