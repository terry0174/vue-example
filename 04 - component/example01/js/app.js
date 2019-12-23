/* 開啟vue-devtools */
Vue.config.devtools = true;

/* 開啟錯誤警告 */
Vue.config.debug = true;

var formComponent = {
    template: '<form><div><label>姓名:</label><input type="text" v-model="form.name"></div><div><label>性別:</label><input type="radio" value="male" v-model="form.sex">男<input type="radio" value="female" v-model="form.sex">女</div><div><label>年齡:</label><input type="number" v-model.number="form.age"></div><div><label>電話:</label><input type="text" v-model="form.phone"></div><div><label>E-mail:</label><input type="email" v-model="form.email"></div><div><button @click.prevent="add()">新增</button></div></form>',

    data: function () {
        return {
            form: {
                name: '哆啦A夢',
                sex: 'male',
                age: 30,
                phone: '0955555555',
                email: 'test05@asgard.com.tw'
            }
        }
    },
    methods: {
        add: function () {
            this.$emit('add', {
                name: this.form.name,
                sex: this.form.sex,
                age: this.form.age,
                phone: this.form.phone,
                email: this.form.email
            });
        }
    }
};

var app = new Vue({
    el: '#app',
    components: {
      'form-component': formComponent
    },
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
        ]
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
            return this.data.sort(function (a, b) {
                return a.age > b.age ? 1 : -1;
            });
        }
    },
    methods: {
        add: function (value) {
            this.data.push(value);
        }
    }
})