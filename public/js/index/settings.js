define([
  'jquery',
  'template',
  'tool'
], function ($, template,tool) {
  'use strict';
  $(function () {

    $.ajax({
      type: 'get',
      url: '/api/teacher/profile',
      success: function (info) {
        if (info.code == 200) {
          var html = template('settingtemp', info.result);
          $(".settings").html(html);
          //引入插件
          tool.uploadify("#upfile");
        }
      }
    })

  })
});