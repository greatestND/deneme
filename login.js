document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 
        const username = document.getElementById("usernam").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "1234") {
        window.location.href = "home.html";
         } else {
        alert("Hatalı kullanıcı adı veya şifre!");
        }

    });
});
