import {
  getCurrentInstance,
  defineComponent,
  onMounted,
  ref,
  reactive,
  onBeforeMount,
} from "vue"
import './index.less'
import {ECommentType, IFormConfigParams} from "@/serviceType";
import wForm from '@/components/wForm'

import {useProductManageAddModel} from "@/views/productManage/add/model";
const {getFormConfigs} = useProductManageAddModel()

export default defineComponent({
  name: "productManageAdd",
  components: {
    wForm
  },
  props: {},
  setup(props, { attrs, slots, emit, expose }) {
    const currentInstance: any = getCurrentInstance()
    const proxy: any = currentInstance.proxy

    let formConfigs:Array<IFormConfigParams> = reactive([])  // wForm组件属性

    // 初始化
    const handleInit = () => {
      formConfigs = getFormConfigs() as Array<IFormConfigParams>
    }

    // 提交
    const handleSubmit = () => {
      proxy.$refs.refWForm.handleSubmit()
    }

    // 新增
    const handleAdd = (val) => {
      console.log(111, val)
    }

    // 返回上一页
    const handleRouteBack = () => {
      proxy.$router.go(-1)
    }

    onBeforeMount( async ()=> {
      handleInit()
    })

    onMounted(async ()=> {
      console.log(proxy.$route.params.id)
    })

    return () => (
      <div class="product-manage-add">
        <div class="add-main">
          <wForm ref="refWForm" configs={formConfigs} onSubmit={handleAdd} />
        </div>
        <div class="add-btn">
          <el-button
            v-model:type={ECommentType.PRIMARY}
            onClick={handleSubmit}>
            {proxy.$t('common.add')}
          </el-button>
          <el-button onClick={handleRouteBack}>{proxy.$t('common.back')}</el-button>
        </div>
      </div>
    )
  }
})
