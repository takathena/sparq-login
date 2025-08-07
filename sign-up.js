function login(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    var user = document.getElementById("user").value; // Mengambil username
    var email = document.getElementById("email").value; // Mengambil email
    var password = document.getElementById("password").value; // Mengambil password

    // Data pengguna
    let dataUserAndEmail = [
        { username: "admin", email: "admin@gmail.com", password: "admin" },
        { username: "pantek", email: "pantek@gmail.com", password: "pantek" },
        { username: "takathena", email: "amanataka0@gmail.com", password: "exe" }
    ];

    // Cek username, email, dan password
    let loginSuccessful = false;

    for (let userData of dataUserAndEmail) {
        // Memeriksa apakah username atau email cocok dan password juga cocok
        if (user === userData.username && email === userData.email && userData.password === password) {
            loginSuccessful = true;
            break;
        }
    }

    if (loginSuccessful) {
        window.location.href = "success.html"; // Ganti dengan nama file HTML yang diinginkan
        console.log('Login Success')
        
        let success = document.getElementById("container").innerHTML = "<h1>Selamat Datang di Halaman Ini!</h1>"
        document.writeln(success)
    } else {
        alert("Username, email, atau password salah!");
    }
}