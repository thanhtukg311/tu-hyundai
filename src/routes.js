import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from "@/layouts/MainLayout";
import PageNotFound from "./views/404"

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: MainLayout,
            children: [
                {
                    path: '/404',
                    name: 'error-404',
                    component: PageNotFound,
                },
            ]
        },
    ]
})