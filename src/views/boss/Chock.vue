<template>
  <div class="chockout">
      <!-- <img src="" alt=""> -->
     

      <div v-if='list2.length!=0'>
        <el-table
                :data="list2"
                style="width: 100%"
                max-height="250">
            <el-table-column
                fixed
                prop="vip-time"
                label="日期"
                width="150">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="120">
            </el-table-column>
            <el-table-column
                prop="vip"
                label="会员"
                width="120">
            </el-table-column>
            <el-table-column
                prop="sex"
                label="性别"
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
                    @click.native.prevent="deleteRow(scope.$index, list2)"
                    type="text"
                    size="small">
                        移除
                </el-button>
            </template>
          </el-table-column>
         </el-table>
       </div> 
        <div class="ico" v-else>
          <i class="el-icon-document-copy"></i>
         <div class="but">
            <button>查看我的客户</button>
      </div>
      </div>
        <div class="block">
            <!-- <span class="demonstration">直接前往</span> -->
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
    </el-pagination>
  </div>
  </div>
</template>

<script>
import { mapState,mapActions,mapMutations } from 'vuex'
export default {
    data:function(){
        return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 1,
        currentPage4: 4
        }
    },
 computed:{
            ...mapState(['list2'])
        },
    methods:{
        ...mapActions(['getList']),
        ...mapMutations(['updataList']),
        deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.updataList({page:val})
    },
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
    max-width: 1165px;
    margin: 24px auto;
   
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