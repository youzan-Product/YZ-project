<template>
<div class="real_time">
  <div class="real-header">
    <div class="header_le">
        <div class="time">
          <b>实时概况</b>
        </div>
        <div class="uptate">
            <span class="update-time">更新时间：2019-11-05 22:47:51</span>
        </div>
        <div class="ico">
          <i class="fa fa-question-circle-o"></i>
        </div>
        <div class="el-icon-view ico" ></div>
    </div>
    <div class="header_ri">
      <span>编辑</span>
    </div>
  </div>
  <div class="totalBox" v-if="realList && realList[0]">
    <div class="order">
      <span>支付订单数</span>
      <h3 v-text="realList[0].left.num"></h3>
      <span v-text="'昨日：'+realList[0].left.yes_num"></span>
    </div>
    <div class="order">
      <span>支付金额（元）</span>
      <h3 v-text="realList[0].left.money"></h3>
      <span v-text="'昨日：'+realList[0].left.yes_money"></span>
    </div>
    <div class="order">
      <span>浏览量</span>
      <h3 v-text="realList[0].left.visit"></h3>
      <span v-text="'昨日：'+realList[0].left.yes_visit"></span>
    </div>
    <div class="order">
      <span>累积客户数</span>
      <h3 v-text="realList[0].left.customer"></h3>
      <span></span>
    </div>
  </div>
  <div class="totalBox total_ri" v-if="realList &&realList[0]">
    <div class="order">
      <span>本月目标（元）</span>
      <h3 v-text="realList[0].right.target">0</h3>
      <span></span>
    </div>
    <div class="order">
      <span>完成进度（%）</span>
      <h3 v-text="realList[0].right.progress">0.00</h3>
      <span></span>
    </div>
    <div class="order">
      <span>可用店铺余额（元）</span>
      <h3 v-text="realList[0].right.balance">0</h3>
      <span></span>
    </div>
    <div class="order">
      <span>待结算</span>
      <h3 v-text="realList[0].right.settlement">0</h3>
      <span></span>
    </div>
  </div>     
</div>


</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "realtime",
  props: ["item"],
  data: function() {
    // var item1 = [...item1,...this.realList[0].left];
    // console.log(item1)
    return {
      // item1
    };
  },
  computed: {
    ...mapState(["realList"])
  },
  mounted() {
    this.getRealList();
  },
  methods: {
    ...mapActions(["getRealList"]),
    ...mapMutations(["updateRealList"])
  }
};
</script>

<style lang="scss" scoped>
.real_time {
  width: 100%;
  overflow: hidden;
  position: relative;
  background: rgb(255, 255, 255);
  margin-top: 1px;
  .real-header {
    line-height: 43px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    > .header_le {
      float: left;
      padding-left: 10px;
      > .time {
        float: left;
        > b {
          font-size: 16px;
          color: #323233;
        }
      }
      > .uptate {
        float: left;
        > span {
          color: #969799;
          font-size: 14px;
          margin-left: 7px;
        }
      }
      > .ico {
        float: left;
        color: #bbb;
        font-size: 14px;
        line-height: 43px;
        margin-left: 7px;
      }
    }
    > .header_ri {
      float: right;

      > span {
        font-size: 14px;
        color: #155bd4;
        cursor: pointer;
        padding-right: 10px;
      }
    }
  }
  .totalBox {
    float: left;
    width: 50%;
    height: 100%;
    margin-top: 43px;
    padding: 0px 40px;
    box-sizing: border-box;
    border-right: 1px solid #ccc;
    > .order {
      width: 50%;
      float: left;
      overflow: hidden;
      font-size: 14px;
      color: #969799;
      height: 85px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 10px;
      > h3 {
        font-size: 28px;
        color: #333;
        height: 31px;
        margin: 0;
      }
    }
  }
  .total_ri {
    border: none;
  }
}
</style>

