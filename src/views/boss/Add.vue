<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true">
      <span>添加客户</span>
    </el-button>

    <el-dialog title="添加客户" :visible.sync="dialogFormVisible">
      <div class="form-radio">
        <span class="radio-one">客户身份：</span>
        <el-radio v-model="radio" label="非会员">非会员</el-radio>
        <el-radio v-model="radio" label="会员">会员</el-radio>
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
          <el-input size="small" v-model="input2" placeholder="请输入内容"></el-input>
        </div>
      </div>

      <div class="form-radio">
        <span class="radio-one">标签：</span>
        <div class="tab">
          <el-select size="small" v-model="value" placeholder="请选择">
            <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
      </div>

      <div class="form-radio">
        <span class="radio-one">性别：</span>
        <el-radio v-model="radios" label="男">男</el-radio>
        <el-radio v-model="radios" label="女">女</el-radio>
      </div>

      <div class="form-radio">
        <span class="radio-one">生日：</span>
        <div class="numbel">
          <!-- <div class="block"> -->
          <!-- <span class="demonstration">默认</span> -->
          <el-date-picker size="small" v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          <!-- </div> -->
          <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
        </div>
      </div>

      <div class="form-radio">
        <span class="radio-one">城市：</span>
        <div class="tab">
          <el-select size="small" v-model="value3" placeholder="请选择">
            <el-option-group v-for="group in options" :key="group.label" :label="group.label">
              <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-option-group>
          </el-select>
        </div>
      </div>

      <div class="form-radio">
        <span class="radio-one">备注：</span>
        <div class="numbel">
          <div style="margin: 20px 0;"></div>
          <el-input type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="30" show-word-limit></el-input>
        </div>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <div @click="add" style="display:inline-block;width:75px;">
           <el-button type="primary" @click=" dialogFormVisible=false">确 定</el-button>
        </div>
       
      </div>
    </el-dialog>
    <span class="fans">粉丝管理</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import moment from "moment";
export default {
  methods: {
    ...mapMutations(["updataListArr"]),
    add() {
      let item = {
        vip: this.radio,
        num: this.input,
        name: this.input2,
        sex: this.radios,
        "vip-time": moment(Date.now()).format("YYYY-MM-DD"),
        address: this.value3,
        zip: this.value
      };
      //  dialogFormVisible=false,
      console.log(item);
      this.updataListArr({ type: "insert", item: item });
    }
  },
  computed: {
    ...mapState(["list"])
  },
  data: function() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      radio: "vip",
      radios: "1",
      input: "",
      input2: "",
      value: "",
      text: "",
      textarea: "",
      options1: [
        {
          value: "46898908",
          label: "1243567678"
        }
      ],

      formLabelWidth: "120px",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      options: [
        {
          label: "热门城市",
          options: [
            {
              value: "Shanghai",
              label: "上海"
            },
            {
              value: "Beijing",
              label: "北京"
            }
          ]
        },
        {
          label: "城市名",
          options: [
            {
              value: "Chengdu",
              label: "成都"
            },
            {
              value: "Shenzhen",
              label: "深圳"
            },
            {
              value: "Guangzhou",
              label: "广州"
            },
            {
              value: "Dalian",
              label: "大连"
            }
          ]
        }
      ],
      value3: ""
    };
  }
};
</script>

<style lang='scss' scoped>
div {
  width: 100%;
  // height:32px;
  margin-bottom: 10px;
  span:nth-child(1) {
    width: 90px;
    height: 32px;
    background: rgb(21, 91, 212);
    float: left;
    color: #fff;
    text-align: center;
    line-height: 32px;
  }
  .fans {
    width: 90px;
    height: 32px;
    color: rgb(21, 91, 212);
    float: right;
    text-align: center;
    line-height: 32px;
  }

  .form-radio {
    // width:32px;
    height: 32px;
    // text-align: center;
    line-height: 32px;
    margin-bottom: 24px;
    .radio-one {
      height: 32px;
      background: #fff;
      color: rgb(96, 98, 102);
      line-height: 40px;
      text-align: right;
    }
    .numbel {
      width: 158px;
      float: left;
    }
    .tab {
      float: left;
      width: 300px;
      height: 32px;
    }
  }
}
</style>21,91,212