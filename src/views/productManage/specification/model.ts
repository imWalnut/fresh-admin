import {EFormComponentType, EPositionType} from "@/serviceType";
export const useProductManageSpecificationModel = () => {

  const getSearchConfigs = () => {
    return [
      {
        label: '规格名称',
        key: 'specificationName',
        value: '',
        type: EFormComponentType.INPUT,
      }
    ]

  }
  const getTableColumn = () => {
    return [
      {
        label: '规格名称',
        prop: 'specificationName',
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
