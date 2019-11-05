<template lang="html">
    <div class="pubProduct">
        <div class="pup_top">
            <el-button type="primary">发布商品</el-button>
        </div>
        <div>
            <el-row>
                <el-col :span="12">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="商品名称或编码：">
                            <el-input v-model="formInline.user" placeholder=""></el-input>
                            </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="12">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="商品分组：">
                            <el-select v-model="formInline.region" placeholder="全部">
                                <el-option label="全部" value="shanghai"></el-option>
                                <el-option label="其他" value="beijing"></el-option>
                                <el-option label="列表中隐藏" value="beijing"></el-option>
                                <el-option label="最热商品" value="beijing"></el-option>
                                <el-option label="最新商品" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="商品类型：">
                            <el-select v-model="formInline.region" placeholder="全部">
                                <el-option label="全部" value="shanghai"></el-option>
                                <el-option label="实物商品" value="beijing"></el-option>
                                <el-option label="虚拟商品" value="beijing"></el-option>
                                <el-option label="电子卡券" value="beijing"></el-option>
                                <el-option label="付费会员卡" value="beijing"></el-option>
                                <el-option label="酒店商品" value="beijing"></el-option>
                                <el-option label="周期购商品" value="beijing"></el-option>
                                <el-option label="分销商品" value="beijing"></el-option>
                                <el-option label="海淘商品" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>  
                </el-col>
                <el-col :span="12">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="总销量：">
                            <el-input v-model="formInline.user" placeholder=""></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="价格：">
                            <el-input v-model="formInline.user" placeholder=""></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="12">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="库存扣减方式：">
                            <el-input v-model="formInline.user" placeholder=""></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4">
                    <el-button type="primary">筛选</el-button>
                </el-col>
                <el-col :span="8">
                    <el-button>导出报表</el-button>
                </el-col>
                <el-col :span="6">
                    <span>查看已生成报表</span>
                </el-col>
                <el-col :span="6">
                    <span>清空筛选条件</span>
                </el-col>
            </el-row>
            
            
        </div>
            
        <ProductList></ProductList>
    </div>
</template>

<script>
import ProductList from './ProductList.vue'
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  components:{
      ProductList
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="scss" scoped>
.pubProduct {
  width: 760px;
  height: 300px;
  padding: 10px;
}
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
