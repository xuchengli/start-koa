<template>
    <ul>
        <li v-for="user of users" :key="user.id">
            {{ user.name }}
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            users: [
                {
                    id: '1',
                    name: 'lixuc'
                },
                {
                    id: '2',
                    name: 'liguip'
                }
            ]
        };
    }
};
</script>
