<template>
    <b-container>
        <b-card bg-variant="light">
            <b-form>
                <b-form-group label="欄位:">
                    <b-form-checkbox-group v-model="display.column">
                        <b-form-checkbox value="name">姓名</b-form-checkbox>
                        <b-form-checkbox value="sex">性別</b-form-checkbox>
                        <b-form-checkbox value="age">年齡</b-form-checkbox>
                        <b-form-checkbox value="phone">電話</b-form-checkbox>
                        <b-form-checkbox value="email">E-mail</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>
                <b-form-group label="性別:">
                    <b-form-checkbox-group v-model="display.sex">
                        <b-form-checkbox value="male">男</b-form-checkbox>
                        <b-form-checkbox value="female">女</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>
            </b-form>
            <b-table striped hover id="items-table" :items="items" :fields="fields" :per-page="perPage" :current-page="currentPage">
                <template v-slot:cell(id)="data">
                    <b-link @click.prevent="removeItem(data.value)">X</b-link>
                </template>
                <template v-slot:cell(name)="data">
                    <router-link :to="'/form/' + data.item.id">
                        {{data.value}}
                    </router-link>
                </template>
                <template v-slot:cell(phone)="data">
                    {{ data.value | phoneFormat}}
                </template>
                <template v-slot:cell(email)="data">
                    <a :href="'mailto:' + data.value">
                        {{ data.value }}
                    </a>
                </template>
            </b-table>
            <b-pagination aria-controls="items-table" v-model="currentPage" :total-rows="items.length" :per-page="perPage" first-text="First" prev-text="Prev" next-text="Next" last-text="Last" align="center">
            </b-pagination>
        </b-card>
    </b-container>
</template>

<script>
    import axios from 'axios';

    export default {
        data: function () {
            return {
                display: {
                    column: ['name', 'sex', 'age', 'phone', 'email'],
                    sex: ['male', 'female']
                },
                data: [],
                currentPage: 1,
                perPage: 5
            }
        },
        filters: {
            phoneFormat: function (value) {
                return value.substring(0, 4) + '-' + value.substring(4, 7) + '-' + value.substring(7);
            }
        },
        computed: {
            fields: function () {

                var fields = new Array();

                fields.push({
                    key: 'id',
                    label: ''
                });

                for (var i = 0; i < this.display.column.length; i++) {
                    fields.push({
                        key: this.display.column[i],
                        sortable: true
                    });
                }

                return fields;
            },
            items: function () {

                var _this = this;

                return this.data.filter(function (value, index, arr) {
                    return _this.display.sex.includes(value.sex);
                });
            }
        },
        methods: {
            removeItem: function (id) {

                var _this = this;

                axios.delete('http://localhost:3000/item/' + id)
                    .then(function (response) {
                        // handle success
                        _this.init();
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            },
            init: function () {

                var _this = this;

                axios.get('http://localhost:3000/item')
                    .then(function (response) {
                        // handle success
                        _this.data = response.data;
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            }
        },
        mounted: function () {
            this.init();
        }
    }
</script>

<style scoped>
    .container {
        padding-top: 20px;
    }

    table {
        margin-bottom: 15px;
    }
</style>