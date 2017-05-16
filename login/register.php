<?php session_start(); ?>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php
include("mysql_connect.inc.php");

$email = $_REQUEST['email'];
$pwd = $_REQUEST['password'];
$pwd2 = $_REQUEST['password2'];
$name = $_REQUEST['name'];
$nickname = $_REQUEST['nickname'];


//判斷帳號密碼是否為空值
//確認密碼輸入的正確性
if($email != null && $pwd != null && $pwd2 != null && $pwd == $pwd2)
{
        //新增資料進資料庫語法
        $sql = "insert into member (email, password, name, nickname) values ('$email', '$pwd', '$name', '$nickname')";
        if(mysql_query($sql))
        {
                $sql = "SELECT email, name, nickname FROM member where email = '$email' and password = '$password'";
                //$result = $conn->query($sql);
                
                echo '<meta http-equiv=REFRESH CONTENT=0;url=../relogin.html>';
        }
        else
        {
                echo '<meta http-equiv=REFRESH CONTENT=0;url=https://dreamweaver-3pi-victorzhj.c9users.io/index.html>';
        }
}
else
{
        echo '<meta http-equiv=REFRESH CONTENT=0;url=https://dreamweaver-3pi-victorzhj.c9users.io/index.html>';
}
?>