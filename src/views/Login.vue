<template>
    <div class="login">
     <CommonHeader/>
      <div class="login-banner"></div>
       <div class="login-box">
         <div class="login-content">
          <el-form ref="form" :model="form" status-icon :rules="rules" label-width="80px">
             <el-col :span="6"><div class="grid-content bg-purple title">用户登录</div></el-col>
              <el-col :span="24">
            <el-form-item prop="phone">
              <el-input v-model="form.phone" autocomplete="off" placeholder="请输入手机号码"></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input v-model="form.code" autocomplete="off" placeholder="请输入验证码"  style="width:150px;float:left"></el-input>
              <div class="login-code" @click="refreshCode">
                <img :src="imgCode"/>
              </div>
            </el-form-item>
            <el-form-item style="margin-bottom:0px;" prop="password">
              <el-input type="password" v-model="form.password" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            </el-col>
          </el-form>
          <el-col :span="24"><a @click="forget"><div class="grid-content bg-purple forget">忘记密码？</div></a></el-col>
           <el-col :span="24">
          <el-button type="danger" style="width:100%;" class="submit"  @click="submitForm('form')" :loading="loading">立即登录</el-button>
            </el-col>
         </div>
       </div>
    </div>
</template> 

<script>
import CommonHeader from "../components/Header.vue";
import Bus from "@/components/bus.js";
import { getUUID } from "../utils/getUUid.js";
import { getLogin } from "../utils/api.js";
import md5 from "js-md5";
import { Loading, Message } from "element-ui";

export default {
  name: "login",
  components: {
    CommonHeader
  },
  data() {
    var validatePhone = (rule, value, callback) => {
      let regFormat = /^[1][3578][0-9]{9}$/; //正确手机号
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      if (!regFormat.test(value)) {
        callback(new Error("请输入正确手机号"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      }
      callback();
    };
    return {
      form: {
        phone: "",
        code: "",
        password: ""
      },
      //验证表单
      rules: {
        phone: [{ validator: validatePhone, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }]
      },
      code: "", //text框输入的验证码
      navItem: true,
      loading: false,
      imgCode: "",
      UUID: ""
    };
  },
  created() {
    //初始化验证码
    this.refreshCode();
  },
  methods: {
    //刷新验证码
    refreshCode() {
      this.UUID = getUUID(); // 获取随机UUID
      this.imgCode = `http://qo.bzhuan888.com/app/validImg/${this.UUID}`; //获取图片验证码
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          let params = {
            phone: this.form.phone,
            loginPwd: md5(this.form.password),
            validCode: this.form.code,
            validKey: this.UUID
          };
          getLogin(params)
            .then(res => {
              this.loading = false;
              if (res.code === 200) {
                Message({
                  showClose: true,
                  message: "登录成功！",
                  type: "success"
                });
                this.loading = false;
                let payload = {
                  Token: res.data.Token,
                  userNo: res.data.userNo,
                  companyName: res.data.companyName,
                  tel: res.data.tel,
                  headImg: res.data.headImg,
                  nickName: res.data.nickName
                };
                this.$store.commit("SET_TOKEN", payload);
                this.$router.push("/activityList");
              } else {
                Message({
                  showClose: true,
                  message: res.message,
                  type: "error"
                });
              }
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          return false;
        }
      });
    },
    forget() {
      this.$router.push("/forgetPassword");
    }
  }
};
</script>

<style scoped>
a {
  color: #333333;
  cursor: pointer;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.login {
  background-color: #ffffff;
  overflow: hidden;
  width: 100%;
  position: relative;
}
.login-banner {
  background: url("../assets/image/login-banner.png");
  background-repeat: no-repeat;
  margin: 0 auto;
  padding: 0;
  left: 50%;
  margin-left: -960px;
  position: relative;
  width: 1920px;
  height: 627px;
  background-size: cover;
}
.login-box {
  width: 350px;
  height: 400px;
  box-sizing: border-box;
  background: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -130px;
  border-radius: 5px;
}
.login-content {
  padding: 30px 40px 40px 40px;
}
.title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 30px;
}
.submit {
  background: -webkit-linear-gradient(left, #ec6c44, #e8403a);
  background: -o-linear-gradient(right, #ec6c44, #e8403a);
  background: -moz-linear-gradient(right, #ec6c44, #e8403a);
  background: linear-gradient(to right, #ec6c44, #e8403a);
  margin-bottom: 20px !important;
}
.forget {
  color: #ec6843;
  font-size: 14px;
  margin-bottom: 20px !important;
  text-align: right;
}
</style>


