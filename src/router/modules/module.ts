import {RouteRecordRaw} from 'vue-router'
import {ERouteName, ERoutePath, ERouteTitle} from "@/serviceType"
import util from "@/utils/util";

const routes:Array<RouteRecordRaw> = [
    {
        //首页
        path: ERoutePath.HOME,
        name: ERouteName.HOME,
        meta: {
            title: ERouteTitle.HOME,
        },
        component: util.handleComponentPath(ERoutePath.HOME),
    },
    {
        // /店铺管理/新客推荐
        path: ERoutePath.STORE_MANAGE_RECOMMEND,
        name: ERouteName.STORE_MANAGE_RECOMMEND,
        meta: {
            title: ERouteTitle.STORE_MANAGE_RECOMMEND,
        },
        component: util.handleComponentPath(ERoutePath.STORE_MANAGE_RECOMMEND),
    },
    {
        // /店铺管理/分类展示
        path: ERoutePath.STORE_MANAGE_CLASSIFY,
        name: ERouteName.STORE_MANAGE_CLASSIFY,
        meta: {
            title: ERouteTitle.STORE_MANAGE_CLASSIFY,
        },
        component: util.handleComponentPath(ERoutePath.STORE_MANAGE_CLASSIFY),
    },
    {
        // /店铺管理/轮播图展示
        path: ERoutePath.STORE_MANAGE_CAROUSEL,
        name: ERouteName.STORE_MANAGE_CAROUSEL,
        meta: {
            title: ERouteTitle.STORE_MANAGE_CAROUSEL,
        },
        component: util.handleComponentPath(ERoutePath.STORE_MANAGE_CAROUSEL),
    },
    {
        // /商品管理/商品列表
        path: ERoutePath.PRODUCT_MANAGE_LIST,
        name: ERouteName.PRODUCT_MANAGE_LIST,
        meta: {
            title: ERouteTitle.PRODUCT_MANAGE_LIST,
        },
        component: util.handleComponentPath(ERoutePath.PRODUCT_MANAGE_LIST),
    },
    {
        // /商品管理/新增商品
        path: ERoutePath.PRODUCT_MANAGE_ADD,
        name: ERouteName.PRODUCT_MANAGE_ADD,
        meta: {
            title: ERouteTitle.PRODUCT_MANAGE_ADD,
            hide: true,
        },
        component: util.handleComponentPath(ERoutePath.PRODUCT_MANAGE_ADD),
    },
    {
        // /商品管理/商品分类
        path: ERoutePath.PRODUCT_MANAGE_CLASSIFY,
        name: ERouteName.PRODUCT_MANAGE_CLASSIFY,
        meta: {
            title: ERouteTitle.PRODUCT_MANAGE_CLASSIFY,
        },
        component: util.handleComponentPath(ERoutePath.PRODUCT_MANAGE_CLASSIFY),
    },
    {
        // /商品管理/商品分组
        path: ERoutePath.PRODUCT_MANAGE_GROUP,
        name: ERouteName.PRODUCT_MANAGE_GROUP,
        meta: {
            title: ERouteTitle.PRODUCT_MANAGE_GROUP,
        },
        component: util.handleComponentPath(ERoutePath.PRODUCT_MANAGE_GROUP),
    },
    {
        // /商品管理/商品规格
        path: ERoutePath.PRODUCT_MANAGE_SPECIFICATION,
        name: ERouteName.PRODUCT_MANAGE_SPECIFICATION,
        meta: {
            title: ERouteTitle.PRODUCT_MANAGE_SPECIFICATION,
        },
        component: util.handleComponentPath(ERoutePath.PRODUCT_MANAGE_SPECIFICATION),
    },

]

export default routes
