import {EFormComponentType, EPositionType, IFormConfigParams} from "@/serviceType";
import {EProductStatusOptions, EProductStatusType} from "@/serviceType/modules/business";

export const useProductManageListModel = () => {

  const getSearchConfigs = () => {
    return [
      {
        label: '商品编号',
        key: 'productCode',
        value: '',
        type: EFormComponentType.INPUT,
      },
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
        type: EFormComponentType.SELECT,
        events: {},
        options: EProductStatusOptions
      },
    ]

  }
  const getTableColumn = () => {
    return [
      {
        label: '商品编号',
        prop: 'productCode',
        width: '',
        align: EPositionType.LEFT,
        fixed: ''
      },
      {
        label: '商品名称',
        prop: 'productName',
        width: '',
        align: EPositionType.LEFT,
        fixed: ''
      },
      {
        label: '售价',
        prop: 'salePrice',
        width: '',
        align: EPositionType.LEFT,
        fixed: ''
      },
      {
        label: '商品分类',
        prop: 'productClassify',
        width: '',
        align: EPositionType.LEFT,
        fixed: ''
      },
      {
        label: '商品分组',
        prop: 'groupName',
        width: '',
        align: EPositionType.LEFT,
        fixed: ''
      },
      {
        label: '商品状态',
        prop: 'productStatus',
        width: '120px',
        align: EPositionType.CENTER,
        fixed: ''
      },
      {
        label: '创建时间',
        prop: 'creatTime',
        width: '',
        align: EPositionType.LEFT,
        fixed: ''
      },
      {
        label: '操作',
        prop: 'operate',
        width: '150px',
        align: EPositionType.CENTER,
        fixed: 'right'
      }
    ]
  }

  return {getTableColumn, getSearchConfigs}
}
