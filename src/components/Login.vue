<template>
  <div class="login-wrap">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light">
          <div class="login-title">
            <div>
              <img src="../assets/images/loginPic.png" alt="logo">
            </div>
            <div>
              <span>登录</span>
            </div>

          </div>
          <div class="login-con">
            <div class="login-box">
              <div class="lo_header">
                <span>密码登录</span>
                <span>验证码登录</span>
              </div>
              <div class="users">
                <div class="phone-left">
                  <LoginDown></LoginDown>
                </div>
                <div class="phone-right"><input type="text" placeholder="请输入手机号"></div>
              </div>
              <div class="password">
                <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
              </div>
              <div class="checkbox">
                <el-checkbox v-model="checked">三天内自动登录</el-checkbox>
              </div>
              <div class="lo_btn">
                <el-button type="primary" @click='login'>登录</el-button>
              </div>
              <div class="agren">
                <div class="agren_left">
                  <el-checkbox v-model="checked2">
                    已阅读并同意 《用户使用协议》
                  </el-checkbox>
                </div>
                <div class="agren_right">
                  <span>忘记密码</span>
                  <span>免费注册</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple">
          <div class="login_pic">
            <div class="picBox">
              <img :src="icons.loginPic" alt="">
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-light">
        </div>
      </el-col>
    </el-row>
    <div class="footer">
      <a>© 2012 - 2019 Youzan.com</a>
    </div>
  </div>
</template>

<script>
import { icons } from "@/assets/picture";
import LoginDown from "./LoginDown.vue";
export default {
  name: "login",
  data() {
    return {
      checked: true,
      checked2: true,
      input: "",
      icons
    };
  },
  components: {
    LoginDown
  },
  methods: {
    login() {
      let res = {
        isLogin: true,
        token: "token"
      };
      localStorage.setItem("login", JSON.stringify(res));
      setTimeout(() => {
        this.$router.replace("/");
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.login-wrap {
  position: relative;
  .footer {
    height: 12px;
    position: absolute;
    bottom: 0;
    left: 45%;
    > a {
      font-size: 12px;
      color: #999;
    }
  }
}
.login-title {
  height: 96px;
  > div {
    padding: 50px 0px 21px;
    float: left;
  }
  > div:nth-child(2) {
    padding-left: 10px;
    cursor: pointer;
    > span {
      border-left: 1px solid #ccc;
      padding-left: 10px;
      color: #333;
      font-size: 16px;
    }
  }
}
.login-con {
  height: 404px;
  padding-top: 40px;
  width: 90%;
  > .login-box {
    margin: 2px 20px;
    padding: 15px 25px;
    background: #fff;
    box-sizing: border-box;
    box-shadow: 0 0 12px #ccc;
    > .lo_header {
      height: 35px;
      > span {
        float: left;
        font-size: 18px;
        line-height: 20px;
        margin-top: 15px;
        padding: 0 15px;
        box-sizing: border-box;
        // position: relative;
      }
      > span:nth-child(2) {
        border-left: 2px solid #ccc;
        cursor: pointer;
        color: #999;
      }
    }
    > .users {
      height: 54px;
      margin-top: 28px;
      font-size: 14px;
      text-align: center;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      > .phone-left {
        float: left;
      }
      > .phone-right {
        float: left;
        padding-top: 20px;
        > input {
          width: 100%;
          border: none;
          outline: none;
          -webkit-appearance: none;
          font-size: 14px;
          padding-left: 10px;
        }
      }
    }
    > .password {
      height: 54px;
      padding-top: 18px;
      font-size: 14px;
      text-align: center;
      line-height: 54px;
      > .el-input {
        height: 54px;
      }
    }
    > .checkbox {
      // background: red;
      height: 28px;
      margin-top: 20px;
    }
    > .lo_btn {
      height: 45px;
      margin-top: 10px;
      > .el-button {
        width: 100%;
        height: 45px;
      }
    }
    > .agren {
      height: 37px;
      padding-top: 10px;
      line-height: 37px;
      > .agren_left {
        float: left;
        > p {
          display: inline-block;
        }
      }
      > .agren_right {
        float: right;
        font-size: 12px;
        > span {
          height: 14px;
          color: #3388ff;
          padding-right: 10px;
        }
        > span:nth-child(2) {
          padding-left: 10px;
          box-sizing: border-box;
          border-left: 2px solid #ccc;
          padding-right: 0px;
        }
      }
    }
  }
}
.login_pic {
  height: 404px;
  width: 90%;

  > .picBox {
    margin-top: 135px;
    height: 325px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
}

.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

