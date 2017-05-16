<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php
//資料庫設定
//資料庫位置
$db_server = "0.0.0.0";
//資料庫名稱
$db_name = "3pi";
//資料庫管理者帳號
$db_user = "victorzhj";
//資料庫管理者密碼
$db_passwd = "";

//對資料庫連線
if(!@mysql_connect($db_server, $db_user, $db_passwd))
        die("無法對資料庫連線");

//資料庫連線採UTF8
mysql_query("SET NAMES utf8");

//選擇資料庫
if(!@mysql_select_db($db_name))
        die("無法使用資料庫");
?> 
<!--
$servername = "0.0.0.0";
$username = "victorzhj";
$password = "";
$dbname = "3pi";
$prefix = "";
$bd = mysql_connect($mysql_hostname, $mysql_user, $mysql_password) or die("Could not connect database");
mysql_select_db($mysql_database, $bd) or die("Could not select database");

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$conn->query("SET NAMES 'UTF8'");

$email = $_REQUEST["email"];
$password = $_REQUEST["password"];
$password2 = $_REQUEST["password2"];
$name = $_REQUEST["name"];
$nickname = $_REQUEST["nickname"];

if ($email!= null && ($password==$password2) )
{
    mysql_query("INSERT INTO member(email, password, name, nickname)VALUES('$email', '$password', '$name', '$nickname')");
    echo ' {"result":"ok"}';
} else {
    echo '{"result":"fail"}';
}
$conn->close();
-->