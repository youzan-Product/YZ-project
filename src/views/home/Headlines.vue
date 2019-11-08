<template>
    <div class="dynamic">
        <div class="pro_dyn">
            <span>有赞头条</span>
        </div>
        <li v-for="(item,idx) in headList" :key="idx" v-text="item.desc"></li>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "headlines",
  computed: {
    ...mapState(["headList"])
  },
  mounted() {
    this.getHeadList();
  },
  methods: {
    ...mapActions(["getHeadList"]),
    ...mapMutations(["updateHeadList"])
  }
};
</script>

<style lang="scss" scoped>
.dynamic {
  width: 100%;
  background: #fff;
  margin-bottom: 20px;
  .pro_dyn {
    padding: 20px 20px 15px;
    > span:nth-child(1) {
      color: #323233;
      font-size: 14px;
      margin-right: 10px;
      font-weight: bold;
    }
  }
  li {
    padding: 0px 20px 10px;
    color: #323233;
    font-size: 12px;
    &:hover {
      color: #155bd4;
    }
  }
}
</style>

