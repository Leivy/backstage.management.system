<?php
header("content-type:text/html;charset=utf-8");
// var_dump($_SERVER);
if(array_key_exists("PATH_INFO", $_SERVER)){
    $pathInfo = $_SERVER['PATH_INFO'];
    $pathInfo = substr($pathInfo, 1);

    $arr = explode("/", $pathInfo);
    if(count($arr) == 2){
        include 'views/'.$arr[0].'/'.$arr[1].'.html';
    }

    if(count($arr) == 1){
        include 'views/index/'.$arr[0].'.html';
    }

}else {
    include 'views/index/index.html';
}
