<template>
  <div class="loginDown">
    <el-select v-model="value" placeholder="中国 + 86">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "中国 +86"
        },
        {
          value: "选项2",
          label: "阿根廷 +54"
        },
        {
          value: "选项3",
          label: "爱尔兰 +353"
        },
        {
          value: "选项4",
          label: "澳大利亚 +61"
        },
        {
          value: "选项5",
          label: "中国澳门 +853"
        },
        {
          value: "选项6",
          label: "巴基斯坦 +92"
        },
        {
          value: "选项7",
          label: "巴拿马 +507"
        },
        {
          value: "选项8",
          label: "比利时 +32"
        },
        {
          value: "选项9",
          label: "丹麦 +45"
        },
        {
          value: "选项10",
          label: "法国 +33"
        },
        {
          value: "选项11",
          label: "韩国 +82"
        }

      ],
      value: "中国 +86"
    };
  }
};
</script>

<style lang="scss" scoped>
.loginDown {
  width: 120px;
  padding-top: 13px;

  > .el-select {
    width: 120px;
    .el-option{
      width: 100%;
      overflow: scroll;
      overflow-x: hidden;
    }
  }
}
</style>

