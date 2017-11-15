<template lang="html">
  <div class = "login">
    <h1 class = "welcome">欢迎加入豆瓣</h1>
    <form>
      <input type = "email" class = "box"/>
      <input type = "password" class = "box"/>
      <input type = "text" class = "box"/>
      <button class = 'box btn' style = "padding:0" @click = "handleLogin">{{login ? "正在提交...  " : "立即注册"}}</button>
    </form>
    <div class = "prompt">
      点击[注册]代表你已阅读并同意用户使用协议
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      login:false
    }
  },
  methods:{
    handleLogin(){
      var _this = this;
      this.login = true;
      setTimeout(function(){
        _this.$router.push("/movie")
      },3000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .login{
    padding:0 1.8rem;
    h1{
      font-size:4rem;
      color:#42bd56;
      text-align:center;
      margin:10% 0 9%;
      font-weight:300;
    }
    form{
      .box{
        width:90%;
        margin:0 auto;
        height:4.4rem;
        line-height:4.4rem;
      }
      input{
        display:block;
        font-size:1.5rem;
        border:0.1rem solid #ccc;
        background:#fff;
        outline:none;
        border-top-left-radius:0.3rem;
        border-top-right-radius:0.3rem;
      }
      button{
        font-size:1.5rem;
        text-align:center;
        background:#42bd56;
        color:#fff;
        border:none;
        margin:0 auto;
        display:block;
        outline:none;
      }
      .btn{
        margin-top:2rem;
      }
    }
    .prompt{
      margin-top:2rem;
      font-size:1.4rem;
      color:#aaa;
      text-align:center;
    }
  }
</style>
