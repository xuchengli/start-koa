import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home.vue';
import UserList from '../components/user-list.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            name: 'Home',
            path: '/',
            component: Home
        },
        {
            name: 'UserList',
            path: '/users',
            component: UserList
        }
    ]
});
export default router;
