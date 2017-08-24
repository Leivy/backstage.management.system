define([
  'jquery',
  'jquery_cookie'
], function (require, factory) {
  'use strict';
  $(function () {
    //给登录按钮注册点击事件
    $("#savebtn").click(function () {
      //发送登录请求
      $.ajax({
        type: 'post',
        url: '/api/login',
        data: $("form").serialize(),
        success: function (info) {
          if (info.code == 200) {
            //cookie只存储字符串,所以要先将对象转为字符串
            var userinfo = JSON.stringify(info.result);
            $.cookie('userinfo', userinfo);//头像和name存入cookie
            location.href = '/';//页面跳转到首页
          }
        }
      })

      return false;
    })

  });
});