<template>
  <div class="chockout">
      <!-- <img src="" alt=""> -->
      <div class="ico">
          <i class="el-icon-document-copy"></i>
         <div class="but">
            <button>查看我的客户</button>
      </div>
      </div>

      <div v-if='list.err==0'>
            <el-table
                :data="tableData"
                style="width: 100%"
                max-height="250">
            <el-table-column
                fixed
                prop="date"
                label="日期"
                width="150">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="120">
            </el-table-column>
            <el-table-column
                prop="province"
                label="省份"
                width="120">
            </el-table-column>
            <el-table-column
                prop="city"
                label="市区"
                width="120">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                width="300">
            </el-table-column>
            <el-table-column
                prop="zip"
                label="邮编"
                width="120">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="120">
            <template slot-scope="scope">
                <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small">
                        移除
                </el-button>
            </template>
          </el-table-column>
         </el-table>
       </div>  
  </div>
</template>

<script>
import { mapState,maoMoutations, mapMutations } from 'vuex'
export default {
 computed:{
            ...mapState(['list'])
        },
    methods:{
        ...mapActions(['getList'])
    },
    mounted(){
        this.getList()
    }
}
</script>

<style lang='scss' scoped>
.chockout{
    border:1px solid #ccc;
    background:#fff;
    margin:20px 0;
   
    // height:246px;
    .ico{
         text-align: center;
         padding:65px 0;
         i{
        // width:60px;
        // height:60px;
        font-size:60px;
    }
     .but{
        text-align: center;
        margin-top:22px;
    }
    } 
   
   
}
</style>