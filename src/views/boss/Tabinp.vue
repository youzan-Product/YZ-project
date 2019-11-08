<template>
  <div>
    <div class="inp-two">
         <div class="some-inp">
          <span>客户身份：</span>
          <el-select v-model="label" placeholder="全部" @change="pushVal">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
         </div>

       <div class="some-inp">
          <span>权益卡：</span>
          <el-select v-model="value2" placeholder="全部">
            <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
      </div>
    </div>

    <div class="inp-two">
           <div class="some-inp">
          <span>性别：</span>
          <el-select v-model="valueSex" placeholder="全部" @change="pushSex">
            <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
      </div>

            <div class="some-inp">
                <span>权益卡：</span>
                <el-select v-model="value4" placeholder="全部">
                    <el-option
                        v-for="item in options4"
                        :key="item.value4"
                        :label="item.label"
                        :value="item.value4">
                    </el-option>
                </el-select>
            </div>
      </div>

    <div class="inp-two">
           <div class="some-inp">
          <span>客户身份：</span>
          <el-select v-model="value5" placeholder="全部">
            <el-option
                v-for="item in options5"
                :key="item.value5"
                :label="item.label"
                :value="item.value5">
            </el-option>
        </el-select>
      </div>

       <div class="some-inp">
          <span>权益卡：</span>
          <el-select v-model="value6" placeholder="全部">
            <el-option
                v-for="item in options6"
                :key="item.value6"
                :label="item.label"
                :value="item.value6">
            </el-option>
        </el-select>
      </div>

      
    </div>

    <div class="inp-two">
        <Tabmin></Tabmin>
    </div>
    
     
      
  </div>
</template>

<script>
// import { mapState,mapActions,mapMutations } from 'vuex'
import Tabmin from './Tabmin.vue'
import Use from './Use.js'
export default {
  // props:['item'],
    components:{
        Tabmin
    },
    
     data() {
      return {
        options: [{
          value: '1',
          label: '全部'
        }, {
          value: '2',
          label: '会员'
        }, {
          value: '3',
          label: '非会员'
        }, {
          value: '4',
          label: '禁止购买名单'
        }
        ],
        label: '',
        
     
       options2: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '会员'
        }, {
          value: '选项3',
          label: '非会员'
        }, {
          value: '选项4',
          label: '禁止购买名单'
        }
        ],
        value2: '',
    
     options3: [{
          value: '1',
          label: '全部'
        }, {
          value: '2',
          label: '男'
        }, {
          value: '3',
          label: '女'
        }, 
        ],
        valueSex: '',
    
      options4: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '会员'
        }, {
          value: '选项3',
          label: '非会员'
        }, {
          value: '选项4',
          label: '禁止购买名单'
        }, 
        ],
        value4: '',
        options5: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '会员'
        }, {
          value: '选项3',
          label: '非会员'
        }, {
          value: '选项4',
          label: '禁止购买名单'
        }, 
        ],
        value5: '',
      
      options6: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '会员'
        }, {
          value: '选项3',
          label: '非会员'
        }, {
          value: '选项4',
          label: '禁止购买名单'
        }, 
        ],
        value6: '',
      
      }
     },
     methods:{
       pushVal(){
         Use.$emit('chat',this.options[this.label-1].label)
       },
       pushSex(){
         Use.$emit('char',this.options3[this.valueSex-1].label)
       }
     }
}
</script>

<style lang='scss' scoped>
.inp-two{
    margin-bottom:24px;
}
.some-inp{
    height:40px;
    display: inline-block;
   span{
       font-size:16px;
            float: left;
            width:112px;
            height:40px;
            line-height: 40px;
            text-align: right;
   }
   el-select{
       float: left;
       width:350px;
   }
}
</style>