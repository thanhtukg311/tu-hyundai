import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from "@/layouts/MainLayout";

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {path: '/', component: MainLayout},
    ]
})