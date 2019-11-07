<template>
  <div class="header-center">
    <el-button @click="show3 = !show3" class="logo-btn">
      <i class="fa fa-mortar-board"></i>
    </el-button>

    <div style="margin-top: 20px;">
      <el-collapse-transition>
        <div v-if="show3">
          <div class="transition-box">
            <span>新店开张</span>
            <div class="intro">
              <li>简介</li>
              <li>
                <span>1.发布商品</span>
                <span>
                  <i>√</i>
                  未完成
                </span>
              </li>
              <li>
                <span>2.设置开业活动</span>
                <span>
                  <i>√</i>
                  未完成
                </span>
              </li>
              <li>
                <span>4.配置快递发货</span>
                <span>
                  <i>√</i>
                  未完成
                </span>
              </li>
              <li>
                <span>5.推广店铺，产生首单</span>
                <span>
                  <i>√</i>
                  未完成
                </span>
              </li>
              <li>
                <span>6.发货，完成订单</span>
                <span>
                  <i>√</i>
                  未完成
                </span>
              </li>
              <li>
                <span>7.设置开业活动</span>
                <span>
                  <i>√</i>
                  未完成
                </span>
              </li>
              <li>
                <span>8.配置快递发货</span>
                <span>
                  <i>√</i>
                  未完成
                </span>
              </li>
              <li>
                <span>9.设置开业活动</span>
                <span>
                  <i>√</i>
                  未完成
                </span>
              </li>
              <li>
                <span>10.配置快递发货</span>
                <span>
                  <i>√</i>
                  未完成
                </span>
              </li>
            </div>
            <div class="welcome">
              <div class="desc">
                <p>欢迎使用有赞！有赞为你提供了一套通用的休闲零食解决方案。</p>
                <p>点击按钮，进入第一阶段任务——新店开张。</p>
              </div>
              <div>
                <a>更改解决方案</a>
                <div class="plan">
                  <p>任务完成奖励： +</p>
                  <p>当前进度： </p>
                </div>
              </div>
              <div class="btn">
                <el-button plain>进入新店开张</el-button>
              </div>
            </div>
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show3: true
    };
  }
};
</script>

<style lang="scss" scoped>
.header-center {
  position: relative;
  background: rgb(255, 255, 255);
  width: 100%;
  .logo-btn {
    position: absolute;
    right: 0px;
    top: -66px;
    vertical-align: baseline;
  }
  .transition-box {
    background-color: rgb(248, 248, 248);
    > span {
      display: block;
      height: 44px;
      font-size: 14px;
      color: #000;
      padding: 0px 15px;
      line-height: 44px;
    }
    .intro {
      width: 35%;
      height: 215px;
      overflow: scroll;
      overflow-x: hidden;
      float: left;
      > li {
        height: 38px;
        line-height: 38px;
        color: #333;
        font-size: 14px;
        padding: 0px 15px;
        background: rgb(255, 255, 255);
        > span:nth-child(1) {
          float: left;
        }
        > span:nth-child(2) {
          float: right;
          color: #bbb;
        }
      }
      li:nth-child(1) {
        background: #f2f9ff;
      }
    }
    .welcome {
      width: 62%;
      height: 100%;
      // height: 200px;
      float: left;
      padding: 0px 15px 15px;
      background: rgb(255, 255, 255);
      > .desc {
        padding: 15px 0px 0px;
        > p {
          font-size: 12px;
          color: #666;
          height: 23px;
        }
      }

      a {
        color: #155bd4;
        font-size: 12px;
        height: 22px;
        line-height: 22px;
      }
      .plan {
        padding: 15px 0px 0px;
        > p {
          font-size: 12px;
          color: #666;
          height: 22px;
          line-height: 22px;
        }
      }
      .btn {
        padding: 15px 0px 0px;
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>

