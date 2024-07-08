import i18n from "@/i18n";
const _t = i18n.global.t

export const ERouteName:any = {
  LOGIN: _t('routeInfo.login'),
  INDEX: _t('routeInfo.index'),
  HOME: _t('routeInfo.home'),
  STORE_MANAGE_CLASSIFY: _t('routeInfo.storeManageClassify'),
  STORE_MANAGE_CAROUSEL: _t('routeInfo.storeManageCarousel'),
  STORE_MANAGE_RECOMMEND: _t('routeInfo.storeManageRecommend'),
  PRODUCT_MANAGE_LIST: _t('routeInfo.productManageList'),
  PRODUCT_MANAGE_ADD: _t('routeInfo.productManageAdd'),
  PRODUCT_MANAGE_CLASSIFY: _t('routeInfo.productManageClassify'),
  PRODUCT_MANAGE_GROUP: _t('routeInfo.productManageGroup'),
  PRODUCT_MANAGE_SPECIFICATION: _t('routeInfo.productManageSpecification'),
}

export enum ERoutePath {
  LOGIN = '/login',
  INDEX = '/index',
  HOME = '/home',
  STORE_MANAGE_CLASSIFY = '/storeManage/classify',
  STORE_MANAGE_CAROUSEL = '/storeManage/carousel',
  STORE_MANAGE_RECOMMEND = '/storeManage/recommend',
  PRODUCT_MANAGE_LIST = '/productManage/list',
  PRODUCT_MANAGE_ADD = '/productManage/add',
  PRODUCT_MANAGE_CLASSIFY = '/productManage/classify',
  PRODUCT_MANAGE_GROUP = '/productManage/group',
  PRODUCT_MANAGE_SPECIFICATION = '/productManage/specification',
}

export enum ERouteTitle {
  LOGIN = '登陆',
  INDEX = '主页',
  HOME = '首页',
  STORE_MANAGE_CLASSIFY = '店铺管理/分类展示',
  STORE_MANAGE_CAROUSEL = '店铺管理/轮播图展示',
  STORE_MANAGE_RECOMMEND = '店铺管理/新客推荐',
  PRODUCT_MANAGE_LIST = '商品管理/商品列表',
  PRODUCT_MANAGE_ADD = '商品管理/新增商品',
  PRODUCT_MANAGE_CLASSIFY = '商品管理/商品分类',
  PRODUCT_MANAGE_GROUP = '商品管理/商品分组',
  PRODUCT_MANAGE_SPECIFICATION = '商品管理/商品规格',
}


export interface IRouteParams {
  name: string
  path: string
}
