function jsKontrol() {
  let gecerli = true;

  document.querySelectorAll("small[id$='-hata']").forEach(el => el.textContent = "");
  document.getElementById("js-basari").style.display = "none";

  if (window.__vueApp) {
    window.__vueApp.vueHatalar = {};
    window.__vueApp.vueBasari = false;
  }

  const adsoyad = document.getElementById("adsoyad").value.trim();
  if (adsoyad === "") {
    document.getElementById("adsoyad-hata").textContent = "Ad soyad boş bırakılamaz.";
    gecerli = false;
  }

  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("email-hata").textContent = "E-posta boş bırakılamaz.";
    gecerli = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("email-hata").textContent = "Geçerli bir e-posta giriniz.";
    gecerli = false;
  }

  const telefon = document.getElementById("telefon").value.trim();
  const telRegex = /^[0-9]{10,11}$/;
  if (telefon === "") {
    document.getElementById("telefon-hata").textContent = "Telefon boş bırakılamaz.";
    gecerli = false;
  } else if (!telRegex.test(telefon)) {
    document.getElementById("telefon-hata").textContent = "Telefon sadece rakamlardan oluşmalı (10-11 hane).";
    gecerli = false;
  }

  const konu = document.getElementById("konu").value;
  if (konu === "") {
    document.getElementById("konu-hata").textContent = "Lütfen bir konu seçiniz.";
    gecerli = false;
  }

  const mesaj = document.getElementById("mesaj").value.trim();
  if (mesaj === "") {
    document.getElementById("mesaj-hata").textContent = "Mesaj boş bırakılamaz.";
    gecerli = false;
  }

  const kvkk = document.getElementById("kvkk").checked;
  if (!kvkk) {
    document.getElementById("kvkk-hata").textContent = "KVKK onayı zorunludur.";
    gecerli = false;
  }

  if (gecerli) {
    document.getElementById("js-basari").style.display = "block";
    document.getElementById("iletisimForm").action = "php/form_islem.php";
    document.getElementById("iletisimForm").method = "POST";
    document.getElementById("iletisimForm").submit();
  }
}

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      form: {
        adsoyad: "",
        email: "",
        telefon: "",
        tarih: "",
        cinsiyet: "",
        konu: "",
        mesaj: "",
        kvkk: false
      },
      vueHatalar: {},
      vueBasari: false
    };
  },
  methods: {
    vueKontrol() {
      this.vueHatalar = {};
      this.vueBasari = false;

      document.querySelectorAll("small[id$='-hata']").forEach(el => el.textContent = "");
      document.getElementById("js-basari").style.display = "none";

      if (!this.form.adsoyad.trim())
        this.vueHatalar.adsoyad = "Ad soyad boş bırakılamaz.";

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.email.trim())
        this.vueHatalar.email = "E-posta boş bırakılamaz.";
      else if (!emailRegex.test(this.form.email))
        this.vueHatalar.email = "Geçerli bir e-posta giriniz.";

      const telRegex = /^[0-9]{10,11}$/;
      if (!this.form.telefon.trim())
        this.vueHatalar.telefon = "Telefon boş bırakılamaz.";
      else if (!telRegex.test(this.form.telefon))
        this.vueHatalar.telefon = "Telefon sadece rakamlardan oluşmalı (10-11 hane).";

      if (!this.form.konu)
        this.vueHatalar.konu = "Lütfen bir konu seçiniz.";

      if (!this.form.mesaj.trim())
        this.vueHatalar.mesaj = "Mesaj boş bırakılamaz.";

      if (!this.form.kvkk)
        this.vueHatalar.kvkk = "KVKK onayı zorunludur.";

      if (Object.keys(this.vueHatalar).length === 0) {
        this.vueBasari = true;
      }
    }
  }
}).mount("#app");

window.__vueApp = app;