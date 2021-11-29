/*
 * @Author: indeex
 * @Date: 2021-01-29 11:22:19
 * @Email: indeex@qq.com
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        meta: {
            title: "首页",
            keepAlive: true
        },
        component: () => import("../views/Home/index.vue"),
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            title: "登陆",
            keepAlive: true
        },
        component: () => import("../views/Login/index.vue"),
    },
    {
        path: "/demo1",
        name: "Demo1",
        meta: {
            title: "demo1",
            keepAlive: true
        },
        component: () => import("../views/Demos/Demo1/index.vue"),
    },
    {
        path: "/demo2",
        name: "Demo2",
        meta: {
            title: "demo2",
            keepAlive: true
        },
        component: () => import("../views/Demos/Demo1/index.vue"),
    },
    {
        path: "/demo3",
        name: "Demo3",
        meta: {
            title: "demo3",
            keepAlive: true
        },
        component: () => import("../views/Demos/Demo1/index.vue"),
    },
];

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes,
    }
);

export default router;