function login(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    var usernameOrEmail = document.getElementById("userAndEmail").value;
    var password = document.getElementById("password").value;

    // Data pengguna
    let dataUserAndEmail = [
        { username: "admin", email: "admin@gmail.com", password: "admin" },
        { username: "pantek", email: "pantek@gmail.com", password: "pantek" },
        { username: "takathena", email: "amanataka0@gmail.com", password: "exe" }
    ];

    // Cek username, email, dan password
    let loginSuccessful = false;

    for (let user of dataUserAndEmail) {
        if ((user.username === usernameOrEmail || user.email === usernameOrEmail) && user.password === password) {
            loginSuccessful = true;
            break;
        }
    }

    if (loginSuccessful) {
        window.location.href = "success.html"; // Ganti dengan nama file HTML yang diinginkan

        console.log('Login Success')
        
        document.getElementById("container").innerHTML = "<h1>Selamat Datang di Halaman Ini!</h1>"
        document.writeln(success)
    } else {
        alert("Username, email, atau password salah!");
    }
}