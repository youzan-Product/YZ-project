<template>
    <div class="moresev">
        <div class="more_box">
            <div class="more_title">更多服务</div>
            <div class="more_con">
                <div>
                    <i><img :src="icons.eduPic" alt=""></i>
                    <span>教育</span>
                </div>
                <div>
                    <i><img :src="icons.kuaPic" alt=""></i>
                    <span>跨境</span>
                </div>
                <div>
                    <i><img :src="icons.gaoPic" alt=""></i>
                    <span>广告</span>
                </div>
                <div>
                    <i><img :src="icons.eduPic" alt=""></i>
                    <span>零售</span>
                </div>
                <div>
                    <i><img :src="icons.kuaPic" alt=""></i>
                    <span>美业</span>
                </div>
                <div>
                    <i><img :src="icons.gaoPic" alt=""></i>
                    <span>有赞精选</span>
                </div>
                <div>
                    <i><img :src="icons.eduPic" alt=""></i>
                    <span>有赞担保</span>
                </div>
                <div>
                    <i><img :src="icons.kuaPic" alt=""></i>
                    <span>有赞分销</span>
                </div>
                <div>
                    <i><img :src="icons.gaoPic" alt=""></i>
                    <span>我要推广</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { icons } from "@/assets/picture";

export default {
  name: "moresev",
  data: function() {
    return {
      icons
    };
  }
};
</script>

<style lang="scss" scoped>
.moresev {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  background: #fff;
  > .more_box {
    margin-bottom: 20px;
    padding: 20px;
    > .more_title {
      margin-bottom: 20px;
      padding-left: 5px;
      font-size: 16px;
      color: #323233;
      font-weight: bold;
    }
    > .more_con {
      width: 100%;
      height: 81px;
      font-size: 12px;
      color: #323233;
      display: flex;
      justify-content: space-around;
      //   padding: 0px 16px 0px;
      > div {
        width: 72px;
        height: 100%;
        float: left;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        > i {
          width: 40px;
          height: 40px;
          //   background: red;
          display: block;
          > img {
            width: 100%;
            height: 100%;
          }
        }
        > span {
          display: block;
          text-align: center;
        }
      }
    }
  }
}
</style>

