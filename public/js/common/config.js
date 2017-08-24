require.config({
  baseUrl: '/public/',
  paths: {
    'jquery': 'assets/jquery/jquery',
    'jquery_cookie': 'assets/jquery-cookie/jquery.cookie',
    'template': 'assets/artTemplate/template-web',
    'bootstrap': 'assets/bootstrap/js/bootstrap.min',
    'tool': 'js/common/tool',
    'datepicker': 'assets/bootstrap-datepicker/js/bootstrap-datepicker.min',
    'datepicker_cn': 'assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
    'uploadify': 'assets/uploadify/jquery.uploadify.min'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    },
    datepicker_cn: {
      deps: ['jquery', 'dateicker']
    },
    uploadify: {
      deps: ['jquery']
    }
  }
})