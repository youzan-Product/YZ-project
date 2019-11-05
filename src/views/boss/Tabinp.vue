<template>
  <div>
    <div class="inp-two">
         <div class="some-inp">
          <span>客户身份：</span>
          <el-select v-model="value" placeholder="全部">
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
          <el-select v-model="value" placeholder="全部">
            <el-option
                v-for="item in options2"
                :key="item.value2"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
      </div>
    </div>

    <div class="inp-two">
           <div class="some-inp">
          <span>客户身份：</span>
          <el-select v-model="value" placeholder="全部">
            <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value3">
            </el-option>
        </el-select>
      </div>

            <div class="some-inp">
                <span>权益卡：</span>
                <el-select v-model="value" placeholder="全部">
                    <el-option
                        v-for="item in options4"
                        :key="item.value2"
                        :label="item.label"
                        :value="item.value4">
                    </el-option>
                </el-select>
            </div>
      </div>

    <div class="inp-two">
           <div class="some-inp">
          <span>客户身份：</span>
          <el-select v-model="value" placeholder="全部">
            <el-option
                v-for="item in options5"
                :key="item.value"
                :label="item.label"
                :value="item.value5">
            </el-option>
        </el-select>
      </div>

       <div class="some-inp">
          <span>权益卡：</span>
          <el-select v-model="value" placeholder="全部">
            <el-option
                v-for="item in options6"
                :key="item.value2"
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
import Tabmin from './Tabmin.vue'
export default {
    components:{
        Tabmin
    },
     data() {
      return {
        options: [{
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
        value: '',
     
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
        value3: '',
    
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