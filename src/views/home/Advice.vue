<template>
    <div class="advices">
        <div class="advice_box">
            <div class="advice_header">
                <div>营销建议</div>
                <div>更多</div>
            </div>
            <div class="box">
                <div class="advice_con">
                    <div>加入分佣推广</div>
                    <div>快速实现成交增长</div>
                </div>
                <div class="advice_con">
                    <div>快速回款</div>
                    <div>T+0结算，加快资金周转</div>
                </div>
                <div class="advice_con">
                    <div>爱逛直播双11</div>
                    <div>参与年度卖货盛宴</div>
                </div>
                <div class="advice_con">
                    <div>登月计划</div>
                    <div>有赞&百度公布扶持方案</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: "advice"
};
</script>

<style lang="scss" scoped>
.advices {
  width: 100%;
  height: 198px;
  margin-top: 20px;
  .advice_box {
    background: rgb(255, 255, 255);
    margin: 0px 0px 20px;
    padding: 20px;
    > .advice_header {
      height: 21px;
      padding-left: 5px;
      > div:nth-child(1) {
        color: #323233;
        font-size: 16px;
        font-weight: bold;
        float: left;
      }
        > div:nth-child(2) {
          float: right;
          font-size: 14px;
          color: #155bd4;
          cursor: pointer;
        }
    }
    > .box {
      width: 100%;
      height: 117px;
      margin-top: 20px;
      > .advice_con {
        height: 100%;
        width: 24%;
        // background: aqua;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #f7f8fa;
        float: left;
        margin-right: 10px;
        overflow: hidden;
        border-radius: 5px;

        > div:nth-child(1) {
          color: #323233;
          font-size: 20px;
          margin-bottom: 10px;
        }
        > div:nth-child(2) {
          color: #969799;
          font-size: 14px;
        }
      }
    }
  }
}
</style>

