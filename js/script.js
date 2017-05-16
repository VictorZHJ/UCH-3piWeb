//---登入
function verifyLogin() {
  var xmlhttp = new XMLHttpRequest();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var url = "https://dreamweaver-3pi-victorzhj.c9users.io/login/connect.php?email=" + email + "&password=" + password;
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var doc = JSON.parse(xmlhttp.responseText);
      //alert(xmlhttp.responseText);
      if (doc.result == "ok") {
        //alert("登入成功");
        window.location.reload();
      }
      else {
        //alert("登入失敗");        
        document.getElementById("password").value = "";
        document.getElementById("password").focus();
        document.getElementById("error").inne
        rHTML = "帳號或密碼錯誤！";
      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
//---re登入

function reverifyLogin() {
  var xmlhttp = new XMLHttpRequest();
  var email = document.getElementById("reemail").value;
  var password = document.getElementById("repassword").value;
  var url = "https://dreamweaver-3pi-victorzhj.c9users.io/login/connect.php?email=" + email + "&password=" + password;
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var doc = JSON.parse(xmlhttp.responseText);
      //alert(xmlhttp.responseText);
      if (doc.result == "ok") {
        //alert("登入成功");
        window.location.reload();
      }
      else {
        //alert("登入失敗");
        document.getElementById("reerror").innerHTML = "帳號或密碼錯誤！";
        window.location.reload();
      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

//---
function navbarchange() {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://dreamweaver-3pi-victorzhj.c9users.io/login/getUserInfo.php";
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var doc = JSON.parse(xmlhttp.responseText);
      //alert(xmlhttp.responseText);
      if (doc.result == "ok") {
        document.getElementById("logout").style.display = "inline";
        document.getElementById("member").style.display = "inline";
      }
      else {
        //alert("請先登入");        
        document.getElementById("login").style.display = "inline";
        document.getElementById("regist").style.display = "inline";
      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

//---關於
function navbarabout() {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://dreamweaver-3pi-victorzhj.c9users.io/login/getUserInfo.php";
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var doc = JSON.parse(xmlhttp.responseText);
      //alert(xmlhttp.responseText);
      if (doc.result == "ok") {
        document.getElementById("logout").style.display = "inline";
        document.getElementById("member").style.display = "inline";
        document.getElementById("about").className = "dropdown active";
      }
      else {
        //alert("請先登入");        
        document.getElementById("login").style.display = "inline";
        document.getElementById("regist").style.display = "inline";
        document.getElementById("about").className = "dropdown active";
      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
//---初入教學
function navbarlevel1() {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://dreamweaver-3pi-victorzhj.c9users.io/login/getUserInfo.php";
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var doc = JSON.parse(xmlhttp.responseText);
      //alert(xmlhttp.responseText);
      if (doc.result == "ok") {
        document.getElementById("logout").style.display = "inline";
        document.getElementById("member").style.display = "inline";
        document.getElementById("level1").className = "dropdown active";
      }
      else {
        //alert("請先登入");        
        document.getElementById("login").style.display = "inline";
        document.getElementById("regist").style.display = "inline";
        document.getElementById("level1").className = "dropdown active";
      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
//---3pi應用
function navbarapp() {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://dreamweaver-3pi-victorzhj.c9users.io/login/getUserInfo.php";
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var doc = JSON.parse(xmlhttp.responseText);
      //alert(xmlhttp.responseText);
      if (doc.result == "ok") {
        document.getElementById("logout").style.display = "inline";
        document.getElementById("member").style.display = "inline";
        document.getElementById("application").className = "dropdown active";
      }
      else {
        //alert("請先登入");        
        document.getElementById("login").style.display = "inline";
        document.getElementById("regist").style.display = "inline";
        document.getElementById("application").className = "dropdown active";
      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
//---進階頁面有登入才給看，否則轉跳
function navbarlevel2() {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://dreamweaver-3pi-victorzhj.c9users.io/login/getUserInfo.php";
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var doc = JSON.parse(xmlhttp.responseText);
      //alert(xmlhttp.responseText);
      if (doc.result == "ok") {
        document.getElementById("member").style.display = "inline";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("level2").className = "dropdown active";
      }
      else {
        window.location.href = "https://dreamweaver-3pi-victorzhj.c9users.io/loginmsg.html";
      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

//---首頁判斷是否登入，並顯示登入訊息
function index() {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://dreamweaver-3pi-victorzhj.c9users.io/login/getUserInfo.php";
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var doc = JSON.parse(xmlhttp.responseText);
      //alert(xmlhttp.responseText);
      if (doc.result == "ok") {
        var h = doc.data.nickname + "歡迎你";
        var hello = h.fontcolor("#99ff33");
        var m = "接下來請點擊教學開始，將會帶您快速了解3pi機器人的基礎概念。";
        var msg = m.fontcolor("#ffcc99");
        document.getElementById("i1").innerHTML = hello;
        document.getElementById("i2").innerHTML = msg;
        document.getElementById("msg2").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("member").style.display = "inline";
        document.getElementById("index").className = "active";
      }
      else {
        //alert("請先登入");   
        var m2 = "P.S.請先登入，登入後享有瀏覽所有教學頁面的權限。";
        var msg2 = m2.fontcolor("#ffffff");
        document.getElementById("msg2").innerHTML = msg2;
        document.getElementById("login").style.display = "inline";
        document.getElementById("regist").style.display = "inline";
        document.getElementById("index").className = "active";
      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
//---會員頁面判斷是否登入
function loadUserInfo() {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://dreamweaver-3pi-victorzhj.c9users.io/login/getUserInfo.php";
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var doc = JSON.parse(xmlhttp.responseText);
      //alert(xmlhttp.responseText);
      if (doc.result == "ok") {
        document.getElementById("member").style.display = "inline";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("p1").innerHTML = "信箱帳號：" + doc.data.email;
        document.getElementById("p2").innerHTML = "姓名：" + doc.data.name;
        document.getElementById("p3").innerHTML = "暱稱：" + doc.data.nickname;
        document.getElementById("member").className = "active";
      }
      else {
        //alert("尚未登入");        
        window.location.href = "https://dreamweaver-3pi-victorzhj.c9users.io/index.html"; // 將網頁重導向至 login.html
      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

//---註冊頁面判斷是否登入 NoLogin
function NoLogin() {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://dreamweaver-3pi-victorzhj.c9users.io/login/getUserInfo.php";
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var doc = JSON.parse(xmlhttp.responseText);
      //alert(xmlhttp.responseText);
      if (doc.result == "ok") {
        window.location.href = "https://dreamweaver-3pi-victorzhj.c9users.io/index.html";
      }
      else {
        document.getElementById("login").style.display = "inline";
        document.getElementById("regist").style.display = "inline";
        document.getElementById("regist").className = "active";
      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
//---登入頁面判斷是否登入
function Login() {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://dreamweaver-3pi-victorzhj.c9users.io/login/getUserInfo.php";
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var doc = JSON.parse(xmlhttp.responseText);
      //alert(xmlhttp.responseText);
      if (doc.result == "ok") {
        window.location.href = "https://dreamweaver-3pi-victorzhj.c9users.io/index.html";
      }
      else {
        document.getElementById("login").style.display = "inline";
        document.getElementById("regist").style.display = "inline";
        document.getElementById("login").className = "active";
      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
//---登出
function logout() {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://dreamweaver-3pi-victorzhj.c9users.io/login/logout.php";
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var doc = JSON.parse(xmlhttp.responseText);
      //alert(xmlhttp.responseText);
      //alert("已登出!!!");        
      window.location.href = "https://dreamweaver-3pi-victorzhj.c9users.io/index.html";
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function loginmsg() {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://dreamweaver-3pi-victorzhj.c9users.io/login/getUserInfo.php";
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var doc = JSON.parse(xmlhttp.responseText);
      //alert(xmlhttp.responseText);
      if (doc.result == "ok") {
        window.location.href = "https://dreamweaver-3pi-victorzhj.c9users.io/index.html";
      }
      else {
        //alert("請先登入");        
        document.getElementById("login").style.display = "inline";
        document.getElementById("regist").style.display = "inline";
      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}


function qa() {
  document.getElementById("qaans").style.color = "#66ff66";
  document.getElementById("qaans").style.display = "inline";
}

function qaend() {
  document.getElementById("qaans").style.color = "#66ff66";
  document.getElementById("qaans").style.display = "inline";
  document.getElementById("qaendmsg").innerHTML = "恭喜你，你已做完所有的練習測驗！";
  document.getElementById("qaendmsg2").innerHTML = "相信這能使你對於3pi機器人能夠有更深入的了解";
}
//---問題反思
function reflection() {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://dreamweaver-3pi-victorzhj.c9users.io/login/getUserInfo.php";
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var doc = JSON.parse(xmlhttp.responseText);
      //alert(xmlhttp.responseText);
      if (doc.result == "ok") {
        document.getElementById("logout").style.display = "inline";
        document.getElementById("member").style.display = "inline";
        document.getElementById("level2").className = "dropdown active";
      }
      else {
        //alert("請先登入");        
        document.getElementById("login").style.display = "inline";
        document.getElementById("regist").style.display = "inline";
        document.getElementById("level2").className = "dropdown active";
      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
//---下載連結
function link() {
      document.getElementById("downlink").style.color = "#66ff66";
      document.getElementById("downlink").innerHTML = "https://mega.nz/#!b9BEVTDY!8mR2NtA4_-5cGZPxCZqlhkSOM0GLUQsI8v20AEnr7aA";
    }