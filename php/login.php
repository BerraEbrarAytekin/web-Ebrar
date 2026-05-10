<?php
$dogru_kullanici = "b251210084@sakarya.edu.tr";
$dogru_sifre     = "b251210084";

$kullanici = $_POST["kullanici"] ?? "";
$sifre     = $_POST["sifre"] ?? "";

if ($kullanici === $dogru_kullanici && $sifre === $dogru_sifre) {
?>
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>Hoşgeldiniz</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<div class="container page-content text-center">
  <div class="mt-5">
    <h1 class="text-success">Hoşgeldiniz <?= htmlspecialchars($kullanici) ?></h1>
    <p class="lead">Başarıyla giriş yaptınız.</p>
    <a href="../index.html" class="btn btn-dark mt-3">Ana Sayfaya Dön</a>
  </div>
</div>
</body>
</html>
<?php
} else {
  header("Location: ../login.php?hata=1");
  exit;
}
?>