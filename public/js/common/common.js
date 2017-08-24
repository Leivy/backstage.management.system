define([
  'jquery',
  'template',
  'jquery_cookie'
], function ($, template) {
  'use strict';
  $(function () {
    // console.log(location.href.indexOf('login'))
    //先判断是否非登录页面 登录页面不需要aside和header设置
    if (location.href.indexOf('login') == -1) {
      //先取出cookie中的对象 先转换
      var userinfo = JSON.parse($.cookie('userinfo'));
      //1.设置aside的头像和姓名
      $(".tc_avatar img").attr('src', userinfo.tc_avatar);
      $(".tc_avatar").next().text(userinfo.tc_name);
      //2.按钮点击高亮
      var pathname = location.pathname;
      var pathObj = {
        '/settings': '/index',
        '/repass': '/index'
      };
      pathname = pathObj[pathname] || pathname;
      //找到所有链接 遍历
      $(".links a").removeClass('active').each(function () {
        if ($(this).attr('href') == pathname) {
          //跳转到哪个页面就让当前链接高亮
          $(this).addClass('active').siblings();
        }
      });

      //2.header个人中心






    }
  });
});