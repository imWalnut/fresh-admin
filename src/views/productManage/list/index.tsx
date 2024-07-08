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
import {ECommentType, ERoutePath, IFormConfigParams, IListParams, ITableColumnParams} from "@/serviceType";

import {useProductManageListModel} from "@/views/productManage/list/model";
import {EProductStatusOptions} from "@/serviceType/modules/business";
const {getTableColumn, getSearchConfigs} = useProductManageListModel()

export default defineComponent({
  name: "productManageList",
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
          productName: '鲈鱼',
          productCode: 'No. 189, Grove St, Los Angeles',
          productClassify: '水产 > 鱼',
          groupName: '热卖',
          productStatus: 0,
          salePrice: '¥30.23'
        },
        {
          creatTime: '2016-05-01 14:02:22',
          productName: '基围虾',
          productCode: 'No. 189, Grove St, Los Angeles',
          productClassify: '水产 > 虾',
          groupName: '秒杀',
          productStatus: 1,
          salePrice: '¥30.23'
        },
        {
          creatTime: '2016-05-01 14:02:22',
          productName: '芒果',
          productCode: 'No. 189, Grove St, Los Angeles',
          productClassify: '果蔬 > 水果',
          groupName: '热卖',
          productStatus: 1,
          salePrice: '¥30.23'
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
        case 'productName':
          value = (
            <div class="table-column-flex">
              <img src={proxy.$util.handleImageUrl('logo.png')}/>
              {cellValue}
            </div>
          )
          break
        case 'productStatus':
          value = (
            <el-tag v-model:type={EProductStatusOptions[cellValue].type}>
              {EProductStatusOptions[cellValue].label}
            </el-tag>
          )
          break
        case 'operate':
          value = (
            <div>
              <el-button link v-model:type={ECommentType.PRIMARY}>
                {proxy.$t('common.detail')}
              </el-button>
              <el-button link v-model:type={ECommentType.PRIMARY}>
                {proxy.$t('common.edit')}
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

    // 新增
    const handleAdd = () => {
      proxy.$router.push(ERoutePath.PRODUCT_MANAGE_ADD)
    }

    onBeforeMount( async ()=> {
      await handleInit()
    })

    onMounted(async ()=> {})

    // 插槽
    const renderSlots = {default: () => {
        return (
          <div class="margin_bottom_15">
            <el-button onClick={handleAdd}>{proxy.$t('common.add')}</el-button>
          </div>
        )
      }}

    return () => (
      <div class="product-manage-list">
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
