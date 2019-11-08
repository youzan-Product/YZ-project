 <template>
    <div class="exp_wrap">
        <div class="exp_title">
            <div class="exp_row">
                <i class="fa fa-thumbs-o-up"></i>
                <span>你已完成该体验的所有任务</span>
            </div>
            <span class="zixun">看推荐资讯，助力店铺经营</span>
        </div>
        <!-- <div class="exp_content">
            <div>
                <div class="con_left">
                    <span>条条朋友圈点赞破 300，让老客连买 3 年，复购 10...</span>
                    <span>立即查看</span>
                </div>
                <div><i></i></div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
  name: "experience"
};
</script>

<style lang="scss" scoped>
.exp_wrap {
  width: 100%;
  height: 234px;
  display: flex;
  justify-content: center;
  .exp_title {
    width: 100%;
    margin: 34px 0px 40px;
    height: 46px;
    > .exp_row {
      height: 24px;
      line-height: 24px;
      color: #000;
      display: flex;
      justify-content: center;
      > i {
        font-size: 16px;
        margin-right: 10px;
        line-height: 24px;
      }
    }
    > span {
      width: 100%;
      display: block;
      font-size: 14px;
      height: 18px;
      line-height: 18px;
      text-align: center;
    }
  }
}
</style>

