import {
  getCurrentInstance,
  defineComponent,
  onMounted, watch, ref,
} from "vue"
import './index.less'
import wMenu from "@/components/wMenu";
import wNavigation from "@/components/wNavigation";
import {storeToRefs} from "pinia";
import usePiniaStore from "@/store";

export default defineComponent({
  name: "Index",
  components: {
    wMenu,
    wNavigation
  },
  props: {},
  setup(props, { attrs, slots, emit, expose }) {
    const currentInstance: any = getCurrentInstance()
    const proxy: any = currentInstance.proxy
    // 仓库引用
    const piniaStore = usePiniaStore()
    const {isCollapse} = storeToRefs(piniaStore)

    let domWidth = ref('')

    watch(isCollapse, (newValue => {
      proxy.$nextTick(() => {
        domWidth.value = `width: calc(100% - ${proxy.$refs.refMenu.$el.clientWidth}px)`
      })
    }))

    onMounted(async ()=> {})

    return () => (
      <div class="index">
        <wMenu ref="refMenu" />
        <div class="index-main" style={domWidth.value}>
          <wNavigation />
          <div class="main-content">
            <router-view class="page-main"/>
          </div>
        </div>
      </div>
    )
  }
})
