<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Giriş</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="index.html">Berra Ebrar Aytekin</a>    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="index.html">Hakkında</a></li>
        <li class="nav-item"><a class="nav-link" href="cv.html">CV</a></li>
        <li class="nav-item"><a class="nav-link" href="sehrim.html">Şehrim</a></li>
        <li class="nav-item"><a class="nav-link" href="miras.html">Mirasımız</a></li>
        <li class="nav-item"><a class="nav-link" href="ilgi.html">İlgi Alanlarım</a></li>
        <li class="nav-item"><a class="nav-link" href="iletisim.html">İletişim</a></li>
        <li class="nav-item"><a class="nav-link active" href="login.php">Giriş</a></li>
      </ul>
    </div>
  </div>
</nav>

<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Giriş — Ebrar Ay</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container page-content">
  <div class="row justify-content-center">
    <div class="col-md-5">
      <div class="card p-4">
        <h2 class="mb-4 text-center">Giriş Yap</h2>

        <?php if (isset($_GET["hata"])): ?>
        <div class="alert alert-danger">Kullanıcı adı veya şifre hatalı!</div>
        <?php endif; ?>

        <form id="loginForm" action="php/login.php" method="POST">
          <div class="mb-3">
            <label class="form-label">Kullanıcı Adı</label>
            <input type="email" id="kullanici" name="kullanici" class="form-control" placeholder="b2412100001@sakarya.edu.tr">
            <small class="text-danger" id="kullanici-hata"></small>
          </div>
          <div class="mb-3">
            <label class="form-label">Şifre</label>
            <input type="password" id="sifre" name="sifre" class="form-control" placeholder="Öğrenci numaranız">
            <small class="text-danger" id="sifre-hata"></small>
          </div>
          <button type="button" class="btn btn-dark w-100" onclick="loginKontrol()">Giriş Yap</button>
          <a href="login.php" class="btn btn-outline-secondary w-100 mt-2">Temizle</a>
        </form>
      </div>
    </div>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script>
function loginKontrol() {
  let gecerli = true;

  document.getElementById("kullanici-hata").textContent = "";
  document.getElementById("sifre-hata").textContent = "";

  const kullanici = document.getElementById("kullanici").value.trim();
  const sifre = document.getElementById("sifre").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (kullanici === "") {
    document.getElementById("kullanici-hata").textContent = "Kullanıcı adı boş bırakılamaz.";
    gecerli = false;
  } else if (!emailRegex.test(kullanici)) {
    document.getElementById("kullanici-hata").textContent = "Geçerli bir e-posta giriniz.";
    gecerli = false;
  }

  if (sifre === "") {
    document.getElementById("sifre-hata").textContent = "Şifre boş bırakılamaz.";
    gecerli = false;
  }

  if (gecerli) {
    document.getElementById("loginForm").submit();
  }
}
</script>
</body>
</html>

<footer>
  <p>© 2026 Berra Ebrar Aytekin — Sakarya Üniversitesi Web Teknolojileri Projesi</p>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>