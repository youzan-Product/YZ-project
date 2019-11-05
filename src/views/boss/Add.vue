<template>
  <div>
     
  <el-button type="text" @click="dialogFormVisible = true"> <span>添加客户</span></el-button>

<el-dialog title="添加客户" :visible.sync="dialogFormVisible">
     <div class="form-radio">
            <span class="radio-one">客户身份：</span>
             <el-radio v-model="radio" label="1">非会员</el-radio>
             <el-radio v-model="radio" label="2">会员</el-radio>
        </div>

        <div class="form-radio">
            <span class="radio-one">手机号：</span>
            <div class="numbel">
                <el-input size="small" v-model="input" placeholder="请输入内容"></el-input>
            </div>
        </div>

        <div class="form-radio">
              <span class="radio-one">姓名：</span>
              <div class="numbel">
                <el-input size="small" v-model="input" placeholder="请输入内容"></el-input>
            </div>
        </div>


        <div class="form-radio">
              <span class="radio-one">标签：</span>
              <div class="tab">
                <el-select size="small" v-model="value" placeholder="请选择">
                    <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                 </el-select>
            </div>
        </div>

         <div class="form-radio">
            <span class="radio-one">性别：</span>
             <el-radio v-model="radios" label="3">男</el-radio>
             <el-radio v-model="radios" label="4">女</el-radio>
        </div>

         <div class="form-radio">
            <span class="radio-one">生日：</span>
             <div class="numbel">
                 <!-- <div class="block"> -->
                    <!-- <span class="demonstration">默认</span> -->
                    <el-date-picker size="small"
                        v-model="value1"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                 <!-- </div> -->
                <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
            </div>
        </div>

        <div class="form-radio">
              <span class="radio-one">姓名：</span>
              <div class="tab">
                <el-select size="small" v-model="value3" placeholder="请选择">
                    <el-option-group
                            v-for="group in options"
                            :key="group.label"
                            :label="group.label">
                        <el-option
                                v-for="item in group.options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value3">
                        </el-option>
                    </el-option-group>
                </el-select>
            </div>
        </div>

        <div class="form-radio">
              <span class="radio-one">备注：</span>
              <div class="numbel">
                    <div style="margin: 20px 0;"></div>
                    <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="textarea"
                        maxlength="30"
                        show-word-limit
                        >
                    </el-input>
                 </div>
        </div>


    <!-- <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        </el-form-item>
    </el-form> -->

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
         radio: '1',
         radios: '3',
         input:'',
         value:'',
          text: '',
      textarea: '',
          options1: [{
          value: '选项1',
          label: '无标签用户'
        }, ],
        // form: {
         
        //   name: '',
        //   region: '',
        //   date1: '',
        //   date2: '',
        //   delivery: false,
        //   type: [],
        //   resource: '',
        //   desc: ''
        // },
        formLabelWidth: '120px',
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
         options: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        value3: ''

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
   
         .form-radio{
        // width:32px;
        height:32px;
        // text-align: center;
        line-height: 32px;
        margin-bottom:24px;
        .radio-one{
            height:32px;
            background:#fff;
            color:rgb(96,98,102);
            line-height: 40px;
            text-align: right;
        }
        .numbel{
            width:158px;
            float:left;
            
        }
        .tab{
             float:left;
             width:300px;
             height:32px;
        }
   
    
}

   
}
</style>21,91,212