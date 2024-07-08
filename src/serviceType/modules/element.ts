export enum EDatePickerType { // DateTimePicker 类型
  YEAR = 'year',
  MONTH = 'month',
  DATE = 'date',
  WEEK = 'week',
  DATE_TIME = 'datetime',
  DATE_TIME_RANGE = 'datetimerange',
  DATE_RANGE = 'daterange',
}

export enum EInputType { // el-input 类型
  TEXT = 'text',
  TEXTAREA = 'textarea',
  NUMBER = 'number',
  PASSWORD = 'password',
}

export enum ECommentType { // el-button 类型
  WARNING = 'warning',
  PRIMARY = 'primary',
  DANGER = 'danger',
  SUCCESS = 'success',
  INFO = 'info',
}

export enum ETabsType { // el-tabs 类型
  CARD = 'card',
  BORDER_CARD = 'border-card',
}

export enum EPositionType { // 定位类型
  LEFT='left',
  CENTER='center',
  RIGHT='right',
}

export interface ITableColumnParams {  // el-table 列字段类型参数
  label: string
  prop: string
  width: string
  align: EPositionType
  fixed: string
}

export interface IFormConfigParams {  // el-form 查询条件类型参数
  label: string  // 标签文本
  type: number  // 控件类型
  key: any  // 绑定值
  value: any  // 默认值
  events?: object, // 绑定事件
  options?: Array<IOptionType>, // 选项
  subtype?: string, // 控件子类型
  format?: string, // 格式
  files?: Array<any>, // 格式
}

export interface IOptionType {  // el-option 类型
  label: string  // 标签文本
  value: any  // 默认值
  children?: Array<IOptionType>
}

export interface ITreeType {  // el-tree 数据类型
  label: string  // 标签文本
  children?: Array<ITreeType>
}

export const CGridGutter: number = 40 // 栅格间隔
export const CGridSpan: number = 12 // 栅格占据的列数
export const CLabelWidth: number = 120 // 栅格占据的列数
