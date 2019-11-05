<template>
  <div class="totle">
      <div class="box">
          <span>全部客户</span>
          <p>0位</p>
      </div>
    <div class="box">
          <span>新增客户</span>
          <p>0位</p>
      </div>
      <div class="box">
          <span>兴趣人群</span>
          <p>0位</p>
      </div>
      <div class="box">
          <span>微信互动粉丝</span>
          <p>0位</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
    .totle{
        // width:100%;
        height:95px;
        margin:20px 0 0;
        padding:18px 15px 0;
        background:#f7f8fa;
        border-bottom: 1px solid #ccc;
        .box{
            width:125px;
            height:60px;
            float:left;
            background:#e8effa;
            margin:0 8px 16px 0;
            padding:8px 7px;
            font-size:14px;
            >span{
                color:#155bd4;
            }
            >p{
                color:#155bd4;
            }
        }
    }
</style>