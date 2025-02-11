function login(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Cek username, email, dan password (contoh sederhana)
    if (username === "admin" && email === "admin@gmail.com" && password === "password") {
        alert("Login berhasil!");
        window.location.href = "success.html"; // Ganti dengan nama file HTML yang diinginkan
    } else {
        alert("Username, email, atau password salah!");
    }
}