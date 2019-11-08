<template>
    <div class="custosev">
        <!-- 在线客服 -->
        <div class="online">
            <div>
                <img :src="icons.onlinePic" alt="">
            </div>
            <div>
                <span>在线客服</span>
                <span>电话：0571 - 8998 8848</span>
            </div>
        </div>
        <!-- 桌面及移动客户端客服 -->
        <div class="online desktop">
            <div>
                <img :src="icons.computerPic" alt="">
            </div>
            <div>
                <span>在线客服</span>
                <span>电话：0571 - 8998 8848</span>
            </div>
        </div>
        <div class="online online">
            <div class="phonePic">
                <img :src="icons.phonePic" alt="">
            </div>
            <div>
                <span>在线客服</span>
                <span>电话：0571 - 8998 8848</span>
            </div>
        </div>
    </div>
</template>

<script>
import { icons } from "@/assets/picture";

export default {
  name: "custosev",
  data: function() {
    return {
      icons
    };
  }
};
</script>

<style lang="scss" scoped>
.custosev {
  width: 100%;
  > .online {
    padding: 20px 0px 20px 20px;
    // width: 200px;
    margin-bottom: 20px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    > div:nth-child(1) {
      width: 44px;
      height: 44px;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    > div:nth-child(2) {
      width: 140px;
      > span:nth-child(1) {
        display: block;
        font-size: 16px;
        color: #323233;
        margin-bottom: 5px;
      }
      > span:nth-child(2) {
        font-size: 12px;
        color: #646566;
      }
    }
  }
  > .desktop {
    margin: 0px;
  }
}
</style>

