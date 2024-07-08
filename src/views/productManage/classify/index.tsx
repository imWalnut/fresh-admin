import {defineComponent, getCurrentInstance, onBeforeMount, onMounted, reactive, ref,} from "vue"
import './index.less'
import wTable from '@/components/wTable'
import {ECommentType, ITreeType} from "@/serviceType";

export default defineComponent({
  name: "productManageClassify",
  components: {
    wTable
  },
  props: {},
  setup(props, {attrs, slots, emit, expose}) {
    const currentInstance: any = getCurrentInstance()
    const proxy: any = currentInstance.proxy

    let treeData:Array<ITreeType> = reactive([])
    const defaultProps = {
      children: 'children',
      label: 'label',
    }

    // 获取树结构数据
    const handleTreeData = () => {
      treeData = [
        {
          label: 'Level one 1',
          children: [
            {
              label: 'Level two 1-1',
              children: [
                {
                  label: 'Level three 1-1-1',
                },
              ],
            },
          ],
        },
        {
          label: 'Level one 2',
          children: [
            {
              label: 'Level two 2-1',
              children: [
                {
                  label: 'Level three 2-1-1',
                },
              ],
            },
            {
              label: 'Level two 2-2',
              children: [
                {
                  label: 'Level three 2-2-1',
                },
              ],
            },
          ],
        },
      ]
    }

    // 点击树节点
    const handleNodeClick = () => {
      console.log('click node')
    }

    // 新增
    const handleAdd = (event, val) => {
      event.stopPropagation()
      console.log('add', val)
    }

    // 编辑
    const handleEdit = (event, val) => {
      event.stopPropagation()
      console.log('edit', val)
    }

    // 删除
    const handleDelete = (event, val) => {
      event.stopPropagation()
      console.log('delete', val)
    }

    onBeforeMount(async () => {
      handleTreeData()
    })

    onMounted(async () => {
    })

    const renderTree = () => {
      const slotsBtn = {default: ({ node, data }) => (
        <div class="tree-node">
          <div class="tree-node-label">
            {node.label}
          </div>
          <div class="tree-node-append">
            <el-button link size="small" v-model:type={ECommentType.PRIMARY} onClick={(event) => handleAdd(event, data)}>{proxy.$t('common.add')}</el-button>
            <el-button link size="small" v-model:type={ECommentType.PRIMARY} onClick={(event) => handleEdit(event, data)}>{proxy.$t('common.edit')}</el-button>
            <el-button link size="small" v-model:type={ECommentType.DANGER} onClick={(event) => handleDelete(event, data)}>{proxy.$t('common.delete')}</el-button>
          </div>
        </div>
        )}
      return(
        <div class="classify-tree">
          <el-tree
          data={treeData}
          props={defaultProps}
          onNode-click={handleNodeClick}
          v-slots={slotsBtn}
          expand-on-click-node={false}
          default-expand-all />
        </div>
      )
    }

    const renderMain = () => {
      return(
        <div class="classify-main"></div>
      )
    }

    return () => (
      <div class="product-manage-classify">
        {renderTree()}
        {renderMain()}
      </div>
    )
  }
})
