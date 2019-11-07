<template>
    <div class="recoms">
        <div class="recom_box">
            <div class="recom_header">
                <div>最新推荐</div>
                <!-- <div>编辑</div> -->
            </div>
            <div class="box">
                <div class="recom_con" style="    background-color: #8fcf8f">
                    <div>多人拼团</div>
                    <div>裂变式营销玩法</div>
                </div>
                <div class="recom_con" style="    background-color: #8fbdd0;">
                    <div>百度小程序</div>
                    <div>打造商家新官网</div>
                </div>
                <div class="recom_con" style="background-color: #849bd0;">
                    <div>分销市场</div>
                    <div>一键上架，快速补充货源</div>
                </div>
                <div class="recom_con" style="background-color: #a984d0;">
                    <div>微信小程序</div>
                    <div>抢占微信社交流量红利</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: "recom"
};
</script>

<style lang="scss" scoped>
.recoms {
  width: 100%;
  height: 198px;
  margin-top: 20px;
  .recom_box {
    background: rgb(255, 255, 255);
    margin: 0px 0px 20px;
    padding: 20px;
    > .recom_header {
      height: 21px;
      padding-left: 5px;
      > div:nth-child(1) {
        color: #323233;
        font-size: 16px;
        font-weight: bold;
        float: left;
      }
      //   > div:nth-child(2) {
      //     float: right;
      //     font-size: 14px;
      //     color: #155bd4;
      //     cursor: pointer;
      //   }
    }
    > .box {
      width: 100%;
      height: 117px;
      margin-top: 20px;
      > .recom_con {
        height: 100%;
        width: 24%;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        float: left;
        margin-right: 10px;
        overflow: hidden;
        border-radius: 5px;
        > div:nth-child(1) {
          // color: #323233;
          font-size: 20px;
          margin-bottom: 10px;
        }
        > div:nth-child(2) {
          // color: #969799;
          font-size: 14px;
        }
      }
    }
  }
}
</style>

