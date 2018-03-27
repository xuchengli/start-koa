import Vue from 'vue';
import Vuex from 'vuex';
import UserList from './components/user-list.vue';

Vue.use(Vuex);

new Vue({
    el: '#app',
    render: h => h(UserList)
});
