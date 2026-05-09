const API_KEY = "c742087d";

const favoriler = [
  { imdbId: "tt1305826", title: "Adventure Time" },
  { imdbId: "tt2861424", title: "Rick and Morty" },
  { imdbId: "tt1196946", title: "The Mentalist" },
  { imdbId: "tt4857264", title: "Contratiempo" }
];

async function favoriYukle() {
  const favorilerDiv = document.getElementById("favoriler");

  for (let i = 0; i < 4; i++) {
    const placeholder = document.createElement("div");
    placeholder.className = "col-md-3 mb-4";
    placeholder.innerHTML = `
      <div class="card h-100">
        <div style="height: 300px; background: #e0e0e0; animation: pulse 1.5s infinite;"></div>
        <div class="card-body">
          <div style="height: 16px; background: #e0e0e0; border-radius: 4px; margin-bottom: 8px; animation: pulse 1.5s infinite;"></div>
          <div style="height: 12px; background: #e0e0e0; border-radius: 4px; width: 60%; animation: pulse 1.5s infinite;"></div>
        </div>
      </div>
    `;
    favorilerDiv.appendChild(placeholder);
  }

  const istekler = favoriler.map(favori =>
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${favori.imdbId}`)
      .then(res => res.json())
  );

  const sonuclar = await Promise.all(istekler);

  favorilerDiv.innerHTML = "";

  sonuclar.forEach(data => {
    const kart = document.createElement("div");
    kart.className = "col-md-3 mb-4";
    kart.innerHTML = `
      <div class="card h-100">
        <img src="${data.Poster !== 'N/A' ? data.Poster : 'images/placeholder.jpg'}" 
             class="card-img-top" alt="${data.Title}" style="height: 300px; object-fit: cover;">
        <div class="card-body">
          <h6 class="card-title">${data.Title}</h6>
          <p class="card-text text-muted" style="font-size: 13px;">${data.Year} — ${data.Type}</p>
          <p class="card-text" style="font-size: 12px;">${data.Plot}</p>
        </div>
      </div>
    `;
    favorilerDiv.appendChild(kart);
  });
}

async function filmAra() {
  const aranan = document.getElementById("aramaInput").value.trim();

  if (aranan === "") {
    document.getElementById("hata").style.display = "block";
    document.getElementById("hata").textContent = "Lütfen bir film veya dizi adı giriniz.";
    return;
  }

  document.getElementById("hata").style.display = "none";
  document.getElementById("sonuclar").innerHTML = "";
  document.getElementById("yukleniyor").style.display = "block";

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(aranan)}`);
    const data = await response.json();

    document.getElementById("yukleniyor").style.display = "none";

    if (data.Response === "False") {
      document.getElementById("hata").style.display = "block";
      document.getElementById("hata").textContent = "Sonuç bulunamadı: " + data.Error;
      return;
    }

    const sonuclarDiv = document.getElementById("sonuclar");
    data.Search.forEach(film => {
      const kart = document.createElement("div");
      kart.className = "col-md-3 mb-4";
      kart.innerHTML = `
        <div class="card h-100">
          <img src="${film.Poster !== 'N/A' ? film.Poster : 'images/placeholder.jpg'}" 
               class="card-img-top" alt="${film.Title}" style="height: 300px; object-fit: cover;">
          <div class="card-body">
            <h6 class="card-title">${film.Title}</h6>
            <p class="card-text text-muted" style="font-size: 13px;">${film.Year} — ${film.Type}</p>
          </div>
        </div>
      `;
      sonuclarDiv.appendChild(kart);
    });

  } catch (hata) {
    document.getElementById("yukleniyor").style.display = "none";
    document.getElementById("hata").style.display = "block";
    document.getElementById("hata").textContent = "Bir hata oluştu, lütfen tekrar deneyin.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  favoriYukle();
  document.getElementById("aramaInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") filmAra();
  });
});