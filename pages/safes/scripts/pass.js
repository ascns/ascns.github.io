var pass = prompt("Для доступа к странице введите пароль", "");
if (pass == null)  window.location = "wrong.html";
else if (pass.toLowerCase() == "wwvsfc")  
      window.location = "index.html";
else  window.location = "wrong.html";