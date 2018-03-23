import Vue from 'vue';
import UserList from './components/user-list.vue';

new Vue({
    el: '#app',
    render: h => h(UserList)
});
