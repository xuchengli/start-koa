<template>
    <div>
        <!-- <img src="../images/logo.png"> -->
        <span v-html="captcha"/>
        <input v-model="captchaText" type="text">
        <input type="button" value="validate" @click="validate">
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            captcha: '',
            captchaText: ''
        };
    },
    created() {
        this.getCaptcha();
    },
    methods: {
        getCaptcha() {
            const url = 'https://api.baas.ziggurat.cn/v1/toolkit/captcha';
            axios(url, { withCredentials: true }).then(res => {
                this.captcha = res.data;
            }).catch(err => {
                alert(err);
            });
        },
        validate() {
            const url = 'https://api.baas.ziggurat.cn/v1/toolkit/validate/' +
                `${this.captchaText}`;
            axios(url, { withCredentials: true }).then(res => {
                alert(res.data.success);
            }).catch(err => {
                alert(err);
            });
        }
    }
};
</script>
