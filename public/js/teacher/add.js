define([
  'jquery',
  'template',
  'tool',
], function ($, template, tool) {
  'use strict';
  $(function () {

    //判断是编辑还是添加按钮跳转过来的 依据地址栏是否有参数
    var tc_id = tool.getPra('tc_id');
    if (typeof (tc_id) != "object") {
      // console.log('编辑')
      //编辑功能
      var url = '/api/teacher/update';
      //在编辑下需要根据tc_id来拉取数据渲染页面
      $.ajax({
        type: "get",
        url: '/api/teacher/edit',
        data: {
          tc_id: tc_id
        },
        success: function (info) {
          if (info.code == 200) {
            info.result.title = '讲师编辑';
            info.result.btnTxt = '编辑';
            var html = template('teacheraddtemp', info.result);
            $(".teacheraddwrap").html(html);
            //设置日期
            tool.setDate('#setDate');
          }
        }
      })
    } else {
      //添加功能
      // console.log('添加')
      var url = '/api/teacher/add';
      var html = template('teacheraddtemp', {
        title: '讲师添加',
        btnTxt: '添加'
      });
      $(".teacheraddwrap").html(html);
      tool.setDate('#setDate');

    }
    //点击保存按钮 发送请求给后台修改或者新增用户信息
    $("body").on('click', '#savebtn', function () {
      // $that = $(this);
      $.ajax({
        type: 'post',
        url: url,
        data: $('form').serialize(),
        success: function (info) {
          console.log(info);
          if (info.code == 200) {
            location.href = '/teacher/list';
          }
        }
      })
      return false;
    });

  })
});