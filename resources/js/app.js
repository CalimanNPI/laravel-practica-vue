require("./bootstrap");


//window.Vue = require('vue').default;

import * as  Vue from 'vue'
import * as  VueRouter from 'vue-router'


//import * as VueRouter from "vue-router";
import app from "./components/app.vue";
import routes from "./routes/index";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

Vue.createApp({
    components: { app },
})
    .use(router)
    .mount("#app");
