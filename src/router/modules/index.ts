import {RouteRecordRaw} from 'vue-router'
import router from '../index'
import module from "@/router/modules/module";
import {ERouteName} from "@/serviceType";

export async function AllRoutes() {
  let routes: any = [...module]
  routes.forEach((item: RouteRecordRaw) => {
    //添加到路由
    router.addRoute(ERouteName.INDEX, item)
  })
  await Promise.any(routes)
  return true
}
