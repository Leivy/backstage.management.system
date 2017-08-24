define([
  'jquery',
  'template',
  'bootstrap'
], function ($, template) {
  'use strict';
  $(function () {

    //发送ajax请求 拉取数据渲染页面
    $.ajax({
      type: 'get',
      url: '/api/teacher',
      success: function (info) {
        if (info.code == 200) {
          var html = template('teacherlisttemp', info);
          $(".teacherlistwrap").html(html); //渲染教师列表
        }
      }
    });

    //点击查看显示模态框 委托事件 用tc_id拉取数据渲染模态框
    $('body').on('click', '#checkout', function () {
      var tc_id = $(this).data('id'); //拿到存放在查看链接里的自定义属性data-id里的tc_id
      //发送ajax请求获取tc_id对应的数据
      $.ajax({
        type: 'get',
        url: '/api/teacher/view',
        data: {
          tc_id: tc_id
        },
        success: function (info) {
          if (info.code == 200) {
            var html = template('modaltemp', info.result);
            $('#teacherModal').html(html);
          }
        }
      })
    })

  })
});