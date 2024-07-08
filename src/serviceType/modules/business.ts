import i18n from "@/i18n";
import {ECommentType} from "@/serviceType";

export enum EProductStatusType {  // 商品状态类型
  ON_SALE,
  SALE_OUT,
  STOP_SELLING
}


export const EProductStatusOptions = [  // 商品状态选项
  {
    label: i18n.global.t('business.onSale'),
    value: EProductStatusType.ON_SALE,
    type: ''
  },
  {
    label: i18n.global.t('business.saleOut'),
    value: EProductStatusType.SALE_OUT,
    type: ECommentType.WARNING
  },
  {
    label: i18n.global.t('business.stopSelling'),
    value: EProductStatusType.STOP_SELLING,
    type: ECommentType.DANGER
  },
]
