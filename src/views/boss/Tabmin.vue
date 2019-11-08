<template>
  <div style="max-width:1200px">
    <div class="min-inp">
      <span>购买次数：</span>
      <div class="inp-one">
        <el-input v-model="input1" placeholder="请输入内容"></el-input>
      </div>
      <i>-</i>
      <div class="inp-one">
        <el-input v-model="input1" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="min-inp">
      <span>购买次数：</span>
      <div class="inp-one">
        <el-input v-model="input1" placeholder="请输入内容"></el-input>
      </div>
      <i>-</i>
      <div class="inp-one">
        <el-input v-model="input1" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="min-inp">
      <span>购买次数：</span>
      <div class="inp-one">
        <el-input v-model="input1" placeholder="请输入内容"></el-input>
      </div>
      <i>-</i>
      <div class="inp-one">
        <el-input v-model="input1" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="min-inp">
      <span>购买次数：</span>
      <div class="inp-one">
        <el-input v-model="input1" placeholder="请输入内容"></el-input>
      </div>
      <i>-</i>
      <div class="inp-one">
        <el-input v-model="input1" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="min-inp">
      <span>购买次数：</span>
      <div class="inp-one">
        <el-input v-model="input1" placeholder="请输入内容"></el-input>
      </div>
      <i>-</i>
      <div class="inp-one">
        <el-input v-model="input1" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="min-inp">
      <span>购买次数：</span>
      <div class="inp-one">
        <el-input v-model="input1" placeholder="请输入内容"></el-input>
      </div>
      <i>-</i>
      <div class="inp-one">
        <el-input v-model="input1" placeholder="请输入内容"></el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      input2: ""
    };
  }
};
</script>

<style lang='scss' scoped>
.min-inp {
  margin-bottom: 24px;
  height: 40px;
  display: inline-block;
  span {
    font-size: 16px;
    float: left;
    width: 112px;
    height: 40px;
    line-height: 40px;
    text-align: right;
  }
  .inp-one {
    float: left;
    width: 100px;
  }
  i {
    width: 17px;
    float: left;
    line-height: 40px;
    text-align: center;
  }
}
</style>