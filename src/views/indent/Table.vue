<template>
    <div class="box1">
    <el-tabs  type="card" @tab-click="handleClick">
    <el-tab-pane label="全部" name="first"></el-tab-pane>
    <el-tab-pane label="待付款" name="second"></el-tab-pane>
    <el-tab-pane label="待发货" name="third"></el-tab-pane>
    <el-tab-pane label="已发货" name="fourth"></el-tab-pane>
    <el-tab-pane label="已完成" name="fifth"></el-tab-pane>
    <el-tab-pane label="已关闭" name="sixth"></el-tab-pane>
    <el-tab-pane label="退款中" name="seventh"></el-tab-pane>
    </el-tabs>
    <div class="box2">
      <el-table  style="width: 100%">
      <el-table-column  label="商品" width="180"></el-table-column>
      <el-table-column  label="单价(元)/数量" width="180"></el-table-column>
      <el-table-column  label="售后"></el-table-column>
      <el-table-column  label="买家/收货人"></el-table-column>
      <el-table-column  label="配送方式"></el-table-column>
      <el-table-column  label="实收金额(元)"></el-table-column>
      <el-table-column  label="订单状态"></el-table-column>
      <el-table-column  label="操作"></el-table-column>
    </el-table>
    </div>
    <div class="box3">
      <div class="block">
       <el-pagination
       @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"></el-pagination>
  </div>
    </div>
   </div>
</template>
<script>
export default {
   
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
