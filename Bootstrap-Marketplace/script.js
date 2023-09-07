document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Lakukan validasi login di sini (misalnya, cek username dan password)
      // Contoh sederhana: Jika username adalah "user" dan password adalah "pass", maka sukses
      if (username === "user" && password === "pass") {
        alert("Login berhasil!");
      } else {
        alert("Login gagal. Periksa kembali username dan password Anda.");
      }
    });
  });
  