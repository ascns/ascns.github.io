var pass = prompt("Для доступа к странице введите пароль", "");
if (pass == null)  window.location = "error/wrong.html";
else if (pass.toLowerCase() == "until")  
      window.location = "site/index.html";
else  window.location = "error/error.html";