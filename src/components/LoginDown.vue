<template>
    <div class="loginDown">
        <el-select v-model="value" placeholder="中国 + 86">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
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
  }
}
</style>

