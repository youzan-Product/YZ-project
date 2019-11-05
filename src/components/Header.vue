<template>
    <div class="header">
      <div class="header-titel">
        <div class="title-left">
          <div>店铺免费试用期不足7天，最多可试用100笔订单，当前剩余100单，为不影响正常经营，请尽快订购；现在订购赠送7天服务期。</div>
          <div>官方咨询电话：0571-86857988</div>
        </div>
        <el-button type="danger" disabled>立即订购</el-button>
      </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  background: #fff7cc;
  overflow: hidden;
  font-size: 12px;
  box-sizing: border-box;
  padding: 0 10px;
  .header-titel {
    padding: 10px 0 10px 30px;
    .title-left {
      width: 680px;
      height: 42px;
      float: left;
      > div:nth-child(1) {
        color: #323233;
        font-size: 12px;
        font-weight: 700;
        height: 21px;
      }
      > div:nth-child(2) {
        color: #666;
        height: 21px;
      }
    }
    .el-button {
      float: left;
      margin-left: 40px;
      background: red;
    }
  }
}
</style>

