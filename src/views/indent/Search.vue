<template>
<div class="search">
    <div class="box">
       <el-row type="flex" class="row-bg"  align ='middle' :gutter="10">
           <el-col :span="1.5"><span>订单搜索：</span></el-col>
          <el-col :span="4"> <el-select  placeholder="请选择" size='medium'>
     <el-option >
    </el-option>
  </el-select></el-col>
          <el-col :span="4"><el-input  placeholder="请输入" size='medium'></el-input></el-col>
       </el-row>
    </div>





<div class="box">
<el-row type="flex" class="row-bg"  :gutter="20" align='middle'>
           <el-col :span="1.5"><span>下单时间:</span></el-col>
          <el-col :span="4"> 
               <div class="block">
        <el-date-picker  type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
              </div>
  </el-col>
 </el-row>
</div>


     <div class="box">
       <el-row type="flex" class="row-bg"  :gutter="10" align='middle'>
           <el-col :span="1.5">订单状态：</el-col>
          <el-col :span="4"><el-input  placeholder="请输入" size='medium'></el-input></el-col>
          <el-col :span="1.5">订单类型：</el-col>
          <el-col :span="4"> <el-select  placeholder="请选择" size='medium'>
     <el-option ></el-option>
  </el-select></el-col>
  <el-col :span="1.5">维权状态：</el-col>
          <el-col :span="4"> <el-select  placeholder="请选择" size='medium'>
     <el-option></el-option>
  </el-select></el-col>
       </el-row>
    </div>


    <div class="box">
        <el-row type="flex" class="row-bg"  :gutter="10" align='middle'>
       <el-col :span="1.5">订单状态：</el-col>
          <el-col :span="4"> <el-select  placeholder="请选择" size='medium'>
     <el-option ></el-option>
  </el-select></el-col>
  <el-col :span="1.5">配送方式：</el-col>
          <el-col :span="4"> <el-select  placeholder="请选择" size='medium'>
     <el-option ></el-option>
  </el-select></el-col>
  <el-col :span="1.5">付款方式：</el-col>
          <el-col :span="4"> <el-select  placeholder="请选择" size='medium'>
     <el-option>
    </el-option>
  </el-select></el-col>
       </el-row>
      </div>


      <div class="box">
        <el-row type="flex" class="row-bg"  :gutter="10" align='middle'>
       <el-col :span="1.5">订单来源：</el-col>
          <el-col :span="4"> <el-select  placeholder="请选择" size='medium'>
     <el-option ></el-option>
  </el-select></el-col>
  <el-col :span="1.5">是否加星：</el-col>
          <el-col :span="4"> <el-select  placeholder="请选择" size='medium'>
     <el-option >
    </el-option>
  </el-select></el-col>
  </el-row>
  </div>

  <div>
    <div class="btn-box">
    <el-button type="primary">筛选</el-button>
    <el-button>导出</el-button>
     <el-link type="primary">查看已导出列表</el-link>
      <el-link type="primary">重置筛选条件</el-link>
      </div>
  </div>

</div>
</template>
<script>
export default {
    data() {
      return {
      }
  }
}
</script>
<style lang='scss' scoped>
.search{
  margin-bottom: 16px;
    padding: 16px;
    background: #f7f8fa;
    .box{
      margin-bottom: 12px;
    }
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
  .btn-box{
    padding-left: 90px;
    text-align: left;
  }
</style>
