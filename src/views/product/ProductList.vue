<template lang="html">
    <div class="pro_list">
        <el-row>
            <el-col :span="4">
                <el-checkbox v-model="checked">商品</el-checkbox>
                <span>价格<i class="el-icon-caret-top"></i>
                  <i class="el-icon-caret-bottom"></i>
                </span>
            </el-col>
            <el-col :span="4"><span>访问量</span></el-col>
            <el-col :span="4">
                <span>库存<i class="el-icon-caret-top"></i>
                  <i class="el-icon-caret-bottom"></i>
                </span>
            </el-col>
            <el-col :span="4">
                <span>总销量<i class="el-icon-caret-top"></i>
                  <i class="el-icon-caret-bottom"></i>
                </span>
            </el-col>
            <el-col :span="4">
                <span>创建时间<i class="el-icon-caret-top"></i>
                  <i class="el-icon-caret-bottom"></i>
                </span>
            </el-col>
            <el-col :span="4">
                <span>序号<i class="el-icon-caret-top"></i>
                  <i class="el-icon-caret-bottom"></i>
                  <i class="el-icon-question"></i>
                </span>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.pro_list{
    width: 100%;
    height: 750px;
    margin: 20px;
}
</style>
