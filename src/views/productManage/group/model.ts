import {EFormComponentType, EPositionType} from "@/serviceType";
import {EProductStatusOptions} from "@/serviceType/modules/business";
export const useProductManageGroupModel = () => {

  const getSearchConfigs = () => {
    return [
      {
        label: '分组名称',
        key: 'groupName',
        value: '',
        type: EFormComponentType.INPUT,
      }
    ]

  }
  const getTableColumn = () => {
    return [
      {
        label: '分组名称',
        prop: 'groupName',
        width: '',
        align: EPositionType.LEFT,
        fixed: ''
      },
      {
        label: '概述',
        prop: 'remark',
        width: '',
        align: EPositionType.LEFT,
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
