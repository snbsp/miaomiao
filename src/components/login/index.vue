<template>
    <div class="login_body">
        <div class="login_input">
            <input type="text"  id="login_text" placeholder="账户名/手机号/Email" style="width: 100%;height: 40px; border:none; border-bottom: 1px solid #ccc; margin-bottom:5px; outline: none;text-indent: 10px;">
        </div>
        <div class="login_input">
            <input type="text" id="login_text" placeholder="请输入手机号" style="width: 100%;height: 40px; border:none; border-bottom: 1px solid #ccc; margin-bottom:5px; outline: none;text-indent: 10px;">
        </div>
        <div class="login_btn">
            <input type="submit" value="登录">
        </div>
        <div class="login_link">
            <a href="#">立即注册</a>
            <a href="#">找回密码</a>
        </div>
    </div>
</template>

<script>
export default {
    name:"login"
}
</script>
<style >
    #content .login_body{width: 100%};
    #content .login_body #login_text {width: 100%;height: 40px; border:none; border-bottom: 1px solid #ccc; margin-bottom:5px; outline: none;text-indent: 10px;}
    .login_body .login_btn {height: 50px; margin: 10px;}
    .login_body .login_btn input {width: 100%; height: 100%; color:white; font-size: 22px; display: block;border: none;border-radius: 3px;background: #e54847;}
    .login_body .login_link {display: flex; justify-content: space-between;}
    .login_body .login_link a {text-decoration: none; margin: 0 5px; font-size: 12px; color: #e54847;}
</style>