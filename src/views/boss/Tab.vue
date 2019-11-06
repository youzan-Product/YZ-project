<template>
  <div class="tab">
       <div class="block">
            <span class="demonstration">上次消费时间：</span>
            <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">成为客户时间：</span>
            <el-date-picker
                v-model="value2"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions">
            </el-date-picker>
        </div>
         <div class="block">
            <span class="demonstration">成为会员时间：</span>
            <el-date-picker
                v-model="value3"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions">
            </el-date-picker>

        </div>
        <div class="word">
             <span>   关键词：</span>
        <div class="inp">
           
            <el-input
                placeholder="请输入内容"
                v-model="input"
                clearable class="inp-wap">
            </el-input>
        </div>
        </div>

  <div>
   
       

        <div style="margin-top: 20px;">
                <el-collapse-transition>
                     <div v-show="show3">
                         <Tabinp></Tabinp>
                      </div>
                </el-collapse-transition>
         </div>
         <button class="but">筛选</button>
         <el-button @click="show3 = !show3">展开</el-button> 
  </div>
        
     
  </div>
</template>

<script>
import Tabinp from'./Tabinp.vue'
// import { mapState } from 'vuex'
export default {
  // computed:{
  //   ...mapState(['list'])
  // },
    components:{
        Tabinp
    },
         data() {
      return {
          show3:true,
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: '',
        value3:'',
        input:''
      };
    }
}
</script>

<style lang='scss' scoped>
.tab{
    padding:20px 0 20px 20px;
    background:#f7f8fa;
    .block{
        margin-bottom:24px;
    }
    .word{
            height:40px;
        margin-bottom:24px;
     >span{
            font-size:16px;
            float: left;
            width:112px;
            height:40px;
            line-height: 40px;
            text-align: right;
        }

    .inp{
       
        >.inp-wap{
            // display: inline-block;
            float: left;
             width:350px;
        }
     }
    }
    .but{
      height:40px;
       border-radius: 4px;
    background-color: #fff;
    text-align: center;
    line-height: 40px;
    color: rgb(21,91,212);
    width:70px;
    box-sizing: border-box;
    border:none;
    border:1px solid #ccc;
    margin-right:40px;

    }
  //    .transition-box {
  //   margin-bottom: 10px;
  //   width: 200px;
  //   height: 100px;
  //   border-radius: 4px;
  //   background-color: #409EFF;
  //   text-align: center;
  //   color: rgb(21,91,212);
  //   padding: 40px 20px;
  //   box-sizing: border-box;
  //   margin-right: 120px;
  // }
}
</style>