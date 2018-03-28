import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import index from './index.vue';

Vue.use(Vuex);

new Vue({
    el: '#app',
    router,
    render: h => h(index)
});
