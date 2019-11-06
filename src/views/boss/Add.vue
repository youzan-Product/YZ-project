<template>
  <div>
     
  <el-button type="text" @click="dialogFormVisible = true"> <span>添加客户</span></el-button>

<el-dialog title="添加客户" :visible.sync="dialogFormVisible">
    <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
</el-dialog>
      <span class="fans">粉丝管理</span>
  </div>
</template>

<script>
export default {
    data:function(){
        return{
             dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
        }
    }
      
}
</script>

<style lang='scss' scoped>
div{
    width:100%;
    // height:32px;
    margin-bottom:10px;
    span:nth-child(1){
        width:90px;
        height:32px;
        background:rgb(21,91,212);
        float: left;
        color:#fff;
        text-align: center;
        line-height: 32px;
    }
    .fans{
        width:90px;
        height:32px;
        color:rgb(21,91,212);
        float: right;
        text-align: center;
        line-height: 32px;
    }
}
</style>21,91,212