import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from "@/layouts/MainLayout";
import PageNotFound from "./views/404"
import ProductLayout from "@/layouts/ProductLayout";

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
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
                {
                    path: '/san-pham/:slug?/:menu?',
                    name: 'san-pham',
                    component: ProductLayout,
                },
            ]
        },
    ],
    scrollBehavior (to) {
        if(to.params.menu == 'noi-bat'){
            return {
                x: 0,
                y: 0,
                behavior: 'smooth'
            }
        }
        if( screen.width <= 375 ) {
            return {
                x: 0,
                y: 500,
                behavior: 'smooth'
            }
        }
        if( screen.width <= 760 ) {
            return {
                x: 0,
                y: 607,
                behavior: 'smooth'
            }
        }
        return {
            x: 0,
            y: 711,
            behavior: 'smooth'
        }
    },
})