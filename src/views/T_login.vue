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
                <input type="text" placeholder="请输入您账号">
            </div>
           <div class="Tiny-pwd">
                <span>密码</span>
                <input type="password" placeholder="请输入密码">
           </div>
        </div>
        <!--忘记密码-->
        <div class="forget">
               <span>忘记密码</span>
        </div>
        <!--按钮部分-->
        <div class="Tiny-btn">
            <button>登录</button>
            <button>注册</button>
        </div>
        <!--第三方登录-->
        <div>
            
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
@import url('../assets/css/T_login.css');
</style>