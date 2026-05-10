<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  header("Location: ../iletisim.html");
  exit;
}

$adsoyad  = htmlspecialchars($_POST["adsoyad"] ?? "");
$email    = htmlspecialchars($_POST["email"] ?? "");
$telefon  = htmlspecialchars($_POST["telefon"] ?? "");
$tarih    = htmlspecialchars($_POST["tarih"] ?? "");
$cinsiyet = htmlspecialchars($_POST["cinsiyet"] ?? "");
$konu     = htmlspecialchars($_POST["konu"] ?? "");
$mesaj    = htmlspecialchars($_POST["mesaj"] ?? "");
$kvkk     = isset($_POST["kvkk"]) ? "Onaylandı" : "Onaylanmadı";
?>

<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>Form Sonucu</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<div class="container page-content">
  <h1>Gönderilen Form Bilgileri</h1>
  <hr>
  <table class="table table-bordered">
    <tr><th>Ad Soyad</th><td><?= $adsoyad ?></td></tr>
    <tr><th>E-posta</th><td><?= $email ?></td></tr>
    <tr><th>Telefon</th><td><?= $telefon ?></td></tr>
    <tr><th>Doğum Tarihi</th><td><?= $tarih ?></td></tr>
    <tr><th>Cinsiyet</th><td><?= $cinsiyet ?></td></tr>
    <tr><th>Konu</th><td><?= $konu ?></td></tr>
    <tr><th>Mesaj</th><td><?= $mesaj ?></td></tr>
    <tr><th>KVKK</th><td><?= $kvkk ?></td></tr>
  </table>
  <a href="../iletisim.html" class="btn btn-dark">Geri Dön</a>
</div>
</body>
</html>