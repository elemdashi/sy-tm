<template>
<div>
<div class="login-zhezhao" style="display:none">
     <div class="login-tanchu">
       <div class="login-message">输入的账号与密码不符</div>
       <div class="login-message" @click="quxiao()" style="color:red">确定</div>
     </div>
    </div>
  <div class="login">
   
    <div class="login-top">
      
      <span>淘宝账户登录</span>
    </div>
    <!-- 输入框---------------------- -->
    <div class="login-text">
      <div class="login-text-one">
        <div class="login-zou">账户</div>
        <div>
          <input type="text" class="login-you" v-model="input1" placeholder="手机号/邮箱/会员名" />
        </div>
      </div>
      <div class="login-text-one">
        <div class="login-zou">登录密码</div>
        <div>
          <input type="text" class="login-you" v-model="input2" placeholder="请输入密码" />
        </div>

      </div>
    </div>

    <!-- 登录按钮 -->
    <router-link to="/home" tag="div">
      <div class="login-anniu" @click="denglu()" >
        <span>登&nbsp;录</span>
      </div>
    </router-link>
    <!-- 底部验证 -->

    <div class="login-bottom">
      <div class="login-yanzheng">短信效验码登录</div>
      <div class="login-yanzheng">免费注册</div>
    </div>

    <!-- -------------- -->
  </div>
</div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      input1: "",
      input2: "",
      leave:"",
      telephone: "110",
      email: "123456@qq.com",
      name: "小王",
      submit: "120"
    };
  },
  beforeRouteLeave: function(to, from, next) {
    if(this.leave=="true"){
      next()
    }
    
   
  },

  methods: {
    quxiao(){
      let a=document.querySelector(".login-zhezhao")
      a.style.display="none"
    },
    denglu(){
      console.log("bbb")
       if (
      this.input1 == this.telephone ||
      this.input1 == this.email ||
      this.input1 == this.email
    ) {
      if (this.input2 == this.submit) {
        this.$store.state.logging = "true";
        this.leave="true"
        console.log(this.$store.state.logging);
       
      } else {
          let a=document.querySelector(".login-zhezhao")
      a.style.display="block"
      }
    } else {
       let a=document.querySelector(".login-zhezhao")
      a.style.display="block"
    }
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.login {
  width: 100%;
  height: 812px;
  background-color: rgb(240, 240, 240);
}
.login-top {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: rgb(247, 247, 248);
}
.login-text {
  width: 100%;
  margin-top: 20px;
}
.login-text-one {
  border-bottom: 1px solid #ccc;
  width: 100%;
  display: flex;
}

.login-zou {
  width: 25%;
  height: 60px;

  line-height: 60px;
  background-color: white;
}
.login-you {
  width: 270px;
  height: 60px;
  border: 0;
}

input::-webkit-input-placeholder {
  color: #ccc;
}
.login-anniu {
  margin: 0 auto;
  height: 40px;
  width: 80%;
  background-color: rgb(255, 0, 54);
  margin-top: 20px;
  border-radius: 2px;
  text-align: center;
  line-height: 40px;
  color: white;
}
.login-bottom {
  color: red;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.login-yanzheng {
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}
.login-zhezhao{
  position: absolute;
  width: 100%;
  height: 812px;
  background-color:rgba(0, 0, 0, 0.3);
  z-index: 20
}
.login-tanchu{
  margin: 0 auto;
  margin-top: 350px;
   width: 80%;
   
}
.login-message{
  text-align: center;
    height: 45px;
    background-color: aliceblue;
    line-height: 45px;
    border: 1px solid #ccc
}
</style>
