import {EFormComponentType} from "@/serviceType";
import {EProductStatusOptions} from "@/serviceType/modules/business";

export const useProductManageAddModel = () => {

  const getFormConfigs = () => {
    return [
      {
        label: '商品名称',
        key: 'productName',
        value: '',
        type: EFormComponentType.INPUT,
      },
      {
        label: '商品分类',
        key: 'productClassify',
        value: '',
        type: EFormComponentType.CASCADER,
        events: {},
        options: [
          {
            label: '水产',
            value: '1',
            children: [
              {
                label: '鱼',
                value: '1-1'
              },
              {
                label: '虾',
                value: '1-2'
              }
            ]
          },
          {
            label: '果蔬',
            value: '2',
            children: [
              {
                label: '水果',
                value: '2-1'
              },
              {
                label: '蔬菜',
                value: '2-2'
              }
            ]
          },
        ]
      },
      {
        label: '商品分组',
        key: 'groupName',
        value: '',
        type: EFormComponentType.SELECT,
        events: {},
        options: [
          {
            label: '热卖',
            value: 1
          },
          {
            label: '秒杀',
            value: 2
          }
        ]
      },
      {
        label: '商品状态',
        key: 'productStatus',
        value: '',
        type: EFormComponentType.RADIO,
        events: {},
        options: EProductStatusOptions
      },
      {
        label: '商品标签',
        key: 'productTags',
        value: [],
        type: EFormComponentType.CHECKBOX,
        events: {},
        options: EProductStatusOptions
      },
      {
        label: '商品图片',
        key: 'productImages',
        value: [],
        type: EFormComponentType.UPLOAD,
        events: {},
        files: [],
      },
    ]

  }

  return {getFormConfigs}
}
