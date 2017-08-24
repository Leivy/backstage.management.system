define([
  'jquery',
  'datepicker',
  'datepicker_cn',
  'uploadify'
], function ($) {
  'use strict';
  //获取地址栏的参数 输出参数对象 或者参数值字符串
  function getPra() {
    var pram = location.search.slice(1);
    var pramArr = pram.split('&'); //得到参数名和值
    //遍历数组 将参数名和值存入对象中
    var pramObj = {};
    pramArr.forEach(function (v, i) {
      var temp = v.split('=');
      pramObj[temp[0]] = temp[1];
    });

    return pramObj[arguments[0]] || pramObj;
    console.log(pramObj);
  }
  //设置日期的插件 传入参数是日期input框
  function setDate(ele) {
    $(ele).datepicker({
      autoclose: "ture",
      endDate: '0d',
      format: 'yyyy-mm-dd',
      language: 'zh-CN',
      todayBtn: 'linked',
      todayHighlight: true,
    });
  }
  //上传头像的插件 传入参数

  function uploadify(ele) {
    $(ele).uploadify({
      height: 30,
      swf: '/public/assets/uploadify/uploadify.swf',
      uploader: '/api/uploader/avatar',
      width: 120,
      onUploadSuccess:function(){
        cosole.log(1)
      }
    });
  }
  return {
    getPra: getPra,
    setDate: setDate,
    uploadify: uploadify
  }

});