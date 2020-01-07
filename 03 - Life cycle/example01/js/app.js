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
                name: '大雄',
                sex: 'male',
                age: 50,
                phone: '09111111111',
                email: 'test01@asgard.com.tw'
            },
            {
                name: '靜香',
                sex: 'male',
                age: 10,
                phone: '0922222222',
                email: 'test02@asgard.com.tw'
            },
            {
                name: '小夫',
                sex: 'female',
                age: 20,
                phone: '0933333333',
                email: 'test03@asgard.com.tw'
            },
            {
                name: '胖虎',
                sex: 'female',
                age: 40,
                phone: '0944444444',
                email: 'test04@asgard.com.tw'
            }
        ],
        form: {
            name: '哆啦A夢',
            sex: 'male',
            age: 30,
            phone: '0955555555',
            email: 'test05@asgard.com.tw'
        }
    },
    watch: {
        'form.age': function (newValue, oldValue) {

            if (newValue < 0) {
                alert("年齡請勿小於0");
                this.form.age = 0;
            }
        }
    },
    filters: {
        phoneFormat: function (value) {
            return value.substring(0, 4) + '-' + value.substring(4, 7) + '-' + value.substring(7);
        }
    },
    computed: {
        items: function () {
            return this.data.slice().sort(function (a, b) {
                return a.age > b.age ? 1 : -1;
            });
        }
    },
    methods: {
        add: function () {
            this.data.push({
                name: this.form.name,
                sex: this.form.sex,
                age: this.form.age,
                phone: this.form.phone,
                email: this.form.email
            });
        }
    },
    beforeCreate: function() {
      //vue instance 被 constructor 建立前
      alert('beforeCreate');
    },
    created: function() {
      //vue instance 被 constructor 建立後，在這裡完成 data binding
      alert('created');
    },
    beforeMount: function() {
      //綁定 DOM 之前
      alert('beforeMount');
    },
    mounted: function() {
      //綁定 DOM 之後
      alert('mounted');
    },
    beforeUpdate: function() {
      //資料更新，但尚未更新 DOM
      alert('beforeUpdate');
    },
    updated: function() {
      //因資料更新，而更新 DOM
      alert('updated');
    },
    beforeDestroy: function() {
      //移除 vue instance 之前
      alert('beforeDestroy');
    },
    destroyed: function() {
      //移除 vue instance 之後
      alert('destroyed');
    }
})