import Vue from 'vue';
import VueRouter from 'vue-router';
import UserList from '../components/user-list.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            name: 'UserList',
            path: '/',
            component: UserList
        }
    ]
});
export default router;
