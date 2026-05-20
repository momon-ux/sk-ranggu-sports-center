function openSection(section) {

  const content = document.getElementById("content");

  if(section === "profil") {

    content.innerHTML = "<h2>👨‍🏫 Profil Guru</h2><p>Sedang memuatkan data guru...</p>";
const SHEET_URL = "https://opensheet.elk.sh/1hUhXavyR4SWQMsLcZGv6NaOm3ammv0ypTnk6ErLOjJE/GURU";

    fetch(SHEET_URL)
      .then(response => response.json())
      .then(data => {

        let html = `
          <h2>👨‍🏫 Profil Guru</h2>
<div class="table-container">

<table style="width:100%; border-collapse:collapse; margin-top:20px;">

            <tr style="background:#0b3d91; color:white;">
              <th style="padding:10px; border:1px solid #ccc;">Nama Guru</th>
              <th style="border:1px solid #ccc;">Jawatan</th>
              <th style="border:1px solid #ccc;">Unit</th>
<th style="border:1px solid #ccc;">Maklumat Profil</th>
<th style="border:1px solid #ccc;">Pencapaian</th>
            </tr>
        `;

        data.forEach(guru => {

html += `
<tr>

<td style="padding:10px; border:1px solid #ccc;">
${guru["Nama Guru"] || ""}
</td>

<td style="border:1px solid #ccc; padding:10px;">
${guru["Jawatan"] || ""}
</td>

<td style="border:1px solid #ccc; padding:10px;">
${guru["Unit"] || ""}
</td>

<td style="border:1px solid #ccc; padding:10px;">
<a href="${guru["Link Borang Maklumat Guru"] || '#'}"
target="_blank">
👤 Profil
</a>
</td>

<td style="border:1px solid #ccc; padding:10px;">
<a href="${guru["Link Google Form Pencapaian"] || '#'}"
target="_blank">
🏆 Pencapaian
</a>
</td>

</tr>
`;

        });

html += `</table></div>`;

        content.innerHTML = html;

      })

      .catch(error => {

        content.innerHTML = `
          <h2>👨‍🏫 Profil Guru</h2>
          <p>❌ Gagal memuatkan data guru.</p>
        `;

      });

  }

  else if(section === "carta") {

    content.innerHTML = `
      <h2>👥 Carta Organisasi</h2>
      <p>Bahagian carta organisasi sekolah.</p>
    `;

  }

  else if(section === "olahraga") {

    content.innerHTML = `
      <h2>🏟️ Kejohanan Olahraga Tahunan</h2>
      <p>Maklumat rumah sukan, acara balapan dan padang.</p>
    `;

  }

  else if(section === "opr") {

    content.innerHTML = `
      <h2>📋 OPR Canva Auto Generate</h2>
      <p>Bahagian auto generate OPR.</p>
    `;

  }

  else if(section === "galeri") {

    content.innerHTML = `
      <h2>🖼️ Galeri & Dokumentasi</h2>
      <p>Galeri gambar aktiviti sekolah.</p>
    `;

  }

}
const hari = [
"Ahad",
"Isnin",
"Selasa",
"Rabu",
"Khamis",
"Jumaat",
"Sabtu"
];

const bulan = [
"Januari",
"Februari",
"Mac",
"April",
"Mei",
"Jun",
"Julai",
"Ogos",
"September",
"Oktober",
"November",
"Disember"
];

const today = new Date();

const tarikhText =
hari[today.getDay()] + ", " +
today.getDate() + " " +
bulan[today.getMonth()] + " " +
today.getFullYear();

document.getElementById("tarikhHari").innerText =
"Paparan: " + tarikhText;
function toggleMenu(){
    document.getElementById("sidebar")
    .classList.toggle("active");
}
