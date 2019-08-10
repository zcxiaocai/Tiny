<template>
    <div>
        <!--头部登录-->
        <div class="Tiny-head">
            <span class="Tiny-return">
                &lt;
            </span>
            <span class="Tiny-login">登录</span>
        </div>
        <!--文本框部分-->
        <div class="Tiny-txt">
            <div class="Tiny-text">
                <span>账号</span>
                <input type="text" :placeholder="unameholder" v-model="uname">
            </div>
           <div class="Tiny-pwd">
                <span>密码</span>
                <input type="password" :placeholder="pwdholder" v-model="pwd" >
           </div>
        </div>
        <!--忘记密码-->
        <div class="forget">
               <span>忘记密码</span>
        </div>
        <!--按钮部分-->
        <div class="Tiny-btn">
            <button @click="login">登录</button>
            <button>注册</button>
        </div>
        <!--第三方登录-->
        <div class="container-Tiny">
            <div class="third third-left">
            </div>
            <div class="third-txt">第三方账号登录</div>
            <div class="third third-right"></div>
        </div>
        <!--微信和QQ登录-->
        <div class="tool-Tiny">
            <img src="../assets/images/wx.png" alt="">
            <img src="../assets/images/qq.png" alt="">
        </div>
        <!--底部-->
        <div class="Tiny-footer">
            点击注册或登录，表示您已阅读并同意<a @click="agreement" href="javascript:;">《微距服务协议》</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            unameholder:"请输入您账号",
            pwdholder:"请输入密码",
            uname:"",//用户输入的账号
            pwd:"",//用户输入的密码
        }
    },
    methods:{
        agreement(){
            this.$router.push('/agreement');
        },
        login(){
            //定义正则验证用户输入的账号
            var ureg=/^\s*1[3-9]\d{9}\s*$/;
            var upwd=/^\s*\w{6,20}\s*$/;
            //获取账号和密码
            var u=this.uname;
            var p=this.pwd;
            if(!ureg.test(u)){ //如果正则验证为false 则提示用户输入手机号，并return不执行下面的代码
                this.$toast("请输入手机号")
                return;
            }
            if(!upwd.test(p)){
                this.$toast("请输入6-20密码")
                return;
            }
        }
    },
}
</script>
<style>
@import url('../assets/css/T_login.css');
</style>