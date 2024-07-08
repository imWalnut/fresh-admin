import {
  getCurrentInstance,
  defineComponent,
  onMounted,
  ref,
  reactive,
  onBeforeMount,
} from "vue"
import './index.less'
import wTable from '@/components/wTable'
import wSearch from '@/components/wSearch'
import {ECommentType, IFormConfigParams, IListParams, ITableColumnParams} from "@/serviceType";

import {useProductManageGroupModel} from "@/views/productManage/group/model";
const {getTableColumn, getSearchConfigs} = useProductManageGroupModel()

export default defineComponent({
  name: "productManageGroup",
  components: {
    wTable,
    wSearch
  },
  props: {},
  setup(props, { attrs, slots, emit, expose }) {
    const currentInstance: any = getCurrentInstance()
    const proxy: any = currentInstance.proxy

    let tableColumn:Array<ITableColumnParams> = reactive([])  // wTable组件属性
    let searchConfigs:Array<IFormConfigParams> = reactive([])  // wSearch组件属性
    let tableData:any = ref([])  // wTable组件數據
    let params:IListParams = reactive({  // 列表查询条件
      pageNum: 1,
      pageSize: 10
    })
    let total:any = ref(0)

    // wTable组件属性配置
    const handleInit = () => {
      tableColumn = getTableColumn() as Array<ITableColumnParams>
      searchConfigs = getSearchConfigs() as Array<IFormConfigParams>
    }

    // wTable组件数据
    const handleTableData = () => {
      let arr:Array<any> = [
        {
          creatTime: '2016-05-01 14:02:22',
          groupName: '热卖',
          remark: '描述1123123'
        },
        {
          creatTime: '2016-05-01 14:02:22',
          groupName: '秒杀',
          remark: '描述1123123'
        }
      ]
      total.value = arr.length
      tableData.value = arr.splice((params.pageNum - 1) * params.pageSize, params.pageNum * params.pageSize)
    }

    // wTable组件分页
    const handlePagination = (val:IListParams) => {
      params.pageNum = val.pageNum
      params.pageSize = val.pageSize
      handleTableData()
    }

    // wTable组件列格式化
    const handleColumnFormat = (row: any, column: any, cellValue: any, index: number) => {
      let value:any
      switch (column.property) {
        case 'operate':
          value = (
            <div>
              <el-button link v-model:type={ECommentType.PRIMARY}>
                {proxy.$t('common.edit')}
              </el-button>
              <el-button link v-model:type={ECommentType.DANGER}>
                {proxy.$t('common.delete')}
              </el-button>
            </div>
          )
          break
        default:
          value = cellValue
      }
      return value
    }

    // 搜索
    const handleSearch = (val) => {
      handleTableData()
    }

    onBeforeMount( async ()=> {
      await handleInit()
    })

    onMounted(async ()=> {})

    // 插槽
    const renderSlots = {default: () => {
        return (
          <div class="margin_bottom_15">
            <el-button>{proxy.$t('common.add')}</el-button>
          </div>
        )
      }}

    return () => (
      <div class="product-manage-group">
        <wSearch configs={searchConfigs} onSearch={handleSearch} />
        <wTable
          column={tableColumn}
          data={tableData.value}
          total={total.value}
          size={params.pageSize}
          current={params.pageNum}
          v-slots={renderSlots}
          columnFormat={handleColumnFormat}
          onChange={handlePagination} />
      </div>
    )
  }
})
