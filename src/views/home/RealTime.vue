<template>
<div class="real_time">
    <el-row>
        <el-col :span="19">
            <div class="grid-content bg-purple-dark">
                <div class="real-header">
                    <div class="header-title">
                        <h2>实时概况</h2>
                        <div>
                            <span class="update-time">更新时间：2019-11-05 22:47:51</span>
                        </div>
                        <div>
                            <i class="fa fa-question-circle-o"></i>
                        </div>
                        <div class="el-icon-view"></div>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.real-time{
    // margin: 0px 0px 20px;
    padding: 20px;
    .real-header{
        margin: 0px 0px 20px;
        .header-title{
            width: 315px;
            height:23px;
        }
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
    background: #fff;
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

