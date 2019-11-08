<template>
    <div class="box1">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" >
    <el-tab-pane label="全部" name="first"></el-tab-pane>
    <el-tab-pane label="待付款" name="second"></el-tab-pane>
    <el-tab-pane label="待发货" name="third"></el-tab-pane>
    <el-tab-pane label="已发货" name="fourth"></el-tab-pane>
    <el-tab-pane label="已完成" name="fifth"></el-tab-pane>
    <el-tab-pane label="已关闭" name="sixth"></el-tab-pane>
    <el-tab-pane label="退款中" name="seventh"></el-tab-pane>
    </el-tabs>
      <div class="box2">
      <el-table :data="IndList.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
      <el-table-column prop="article" label="商品" width="180"></el-table-column>
      <el-table-column prop="cost" label="单价(元)" width="180"></el-table-column>
      <el-table-column prop="order" label="订单号"></el-table-column>
      <el-table-column prop="buyer" label="买家/收货人"></el-table-column>
      <el-table-column prop="delivery" label="配送方式"></el-table-column>
      <el-table-column  label="实收金额(元)"></el-table-column>
      <el-table-column prop="status" label="订单状态"></el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, IndList)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    </div>
   
    <div class="box3">
      <div class="block">
       <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5,10]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="IndList.length">
    </el-pagination>
  </div>
    </div>
   </div>
</template>
<script>
import {  mapActions , mapState } from 'vuex'
export default {
  data(){
    return{
      activeName: 'first',
      pagesize:5,
      currentPage:1,

      tabName:'first'

      //筛选
      
    }
  },
  computed: {
     ...mapState(['IndList']),
  },
  mounted(){
    this.getIndList();
  },
  methods: {
    ...mapActions(["getIndList"]),

    handleClick(tab, event) {
      this.tabName = tab.name
        console.log(tab, event);
      },



    //分页
    handleSizeChange(size) {
      this.pagesize = size
        // console.log(`每页 ${val} 条`);
        
      },
      handleCurrentChange(currentPage) {
        // console.log(`当前页: ${val}`);
        this.currentPage=currentPage
      },

    //删除
      handleDelete(index, IndList) {
        IndList.splice(index,1)
        console.log(index, IndList);
      },
      //筛选
    },
  };
</script>
<style lang='scss' scoped>
.box2{
  background: #f7f8fa;
}
.box3{
  margin-top: 20px;
  
}
</style>
