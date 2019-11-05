<template>
  <div class="addman">
      <i class="el-icon-circle-close"></i>
      <div class="addlist">
          <div class="list-top"></div>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.addman{
    width:100%;
    height:100%;
    background:reba(99,99,100,.5);
    position: fixed;
    top:0;
    left:0;
    z-index: 999;
    i{
         position: fixed;
         top:14px;
         right:12px;
         width:20px;
         height:20px;
         text-align: center;
         line-height: 20px;
         background:#fff;
    }
    .addlist{
        width:450px;
        height:590px;
        position: absolute;
        left:50%;
        top:50%;
        margin:-225px 0 0 -289px;
        background:#fff;
        z-index: 9999;
        .list-top{
            width:450px;
            height:35px;
            border-bottom:1px solid #ccc;
            
        }
    }
}
</style>