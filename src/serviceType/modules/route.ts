import i18n from "@/i18n";
const _t = i18n.global.t

export const ERouteTitle:any = {
  LOGIN: _t('routeInfo.login'),
  INDEX: _t('routeInfo.index'),
  HOME: _t('routeInfo.home'),
  STORE_MANAGE_CLASSIFY: _t('routeInfo.storeManageClassify'),
  STORE_MANAGE_CAROUSEL: _t('routeInfo.storeManageCarousel'),
  STORE_MANAGE_RECOMMEND: _t('routeInfo.storeManageRecommend'),
  PRODUCT_MANAGE_LIST: _t('routeInfo.productManageList'),
  PRODUCT_MANAGE_ADD: _t('routeInfo.productManageAdd'),
  PRODUCT_MANAGE_EDIT: _t('routeInfo.productManageEdit'),
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
  PRODUCT_MANAGE_EDIT = '/productManage/edit',
  PRODUCT_MANAGE_CLASSIFY = '/productManage/classify',
  PRODUCT_MANAGE_GROUP = '/productManage/group',
  PRODUCT_MANAGE_SPECIFICATION = '/productManage/specification',
}

export enum ERouteName {
  LOGIN = 'login',
  INDEX = 'index',
  HOME = 'home',
  STORE_MANAGE_CLASSIFY = 'storeManageClassify',
  STORE_MANAGE_CAROUSEL = 'storeManageCarousel',
  STORE_MANAGE_RECOMMEND = 'storeManageRecommend',
  PRODUCT_MANAGE_LIST = 'productManageList',
  PRODUCT_MANAGE_ADD = 'productManageAdd',
  PRODUCT_MANAGE_EDIT = 'productManageEdit',
  PRODUCT_MANAGE_CLASSIFY = 'productManageClassify',
  PRODUCT_MANAGE_GROUP = 'productManageGroup',
  PRODUCT_MANAGE_SPECIFICATION = 'productManageSpecification',
}


export interface IRouteParams {
  title: string
  name: string
  path: string
}
