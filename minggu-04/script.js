// =====================================================
// PROGRAM PERINGKAT KELAS
// Mencari 3 nilai terbesar menggunakan Linear Search
// =====================================================

const siswa = [];

const namaInput = document.getElementById("nama");
const nilaiInput = document.getElementById("nilai");
const tambahBtn = document.getElementById("tambahBtn");
const rankingBtn = document.getElementById("rankingBtn");
const dataSiswa = document.getElementById("dataSiswa");
const hasilRanking = document.getElementById("hasilRanking");
const pesan = document.getElementById("pesan");

// Menambahkan data siswa
tambahBtn.addEventListener("click", function () {
  const nama = namaInput.value.trim();
  const nilai = Number(nilaiInput.value);

  if (nama === "" || nilaiInput.value === "") {
    pesan.textContent = "Nama dan nilai harus diisi.";
    return;
  }

  if (nilai < 0 || nilai > 100) {
    pesan.textContent = "Nilai harus antara 0 sampai 100.";
    return;
  }

  siswa.push({ nama: nama, nilai: nilai });

  namaInput.value = "";
  nilaiInput.value = "";
  pesan.textContent = "";

  tampilkanData();
  hasilRanking.innerHTML =
    '<p class="muted">Klik "Cari 3 Nilai Terbesar" untuk melihat peringkat.</p>';
});

// Menampilkan seluruh data siswa
function tampilkanData() {
  if (siswa.length === 0) {
    dataSiswa.innerHTML = '<p class="muted">Belum ada data siswa.</p>';
    return;
  }

  let html = `
    <table>
      <tr>
        <th>No</th>
        <th>Nama</th>
        <th>Nilai</th>
      </tr>
  `;

  for (let i = 0; i < siswa.length; i++) {
    html += `
      <tr>
        <td>${i + 1}</td>
        <td>${siswa[i].nama}</td>
        <td>${siswa[i].nilai}</td>
      </tr>
    `;
  }

  html += "</table>";
  dataSiswa.innerHTML = html;
}

// =====================================================
// LINEAR SEARCH
// Memeriksa data satu per satu untuk mencari nilai terbesar.
// =====================================================
function cariTerbesarLinear(data, sudahDipakai) {
  let posisiTerbesar = -1;

  for (let i = 0; i < data.length; i++) {
    if (sudahDipakai.includes(i)) {
      continue;
    }

    if (
      posisiTerbesar === -1 ||
      data[i].nilai > data[posisiTerbesar].nilai
    ) {
      posisiTerbesar = i;
    }
  }

  return posisiTerbesar;
}

// Mencari 3 nilai terbesar
rankingBtn.addEventListener("click", function () {
  if (siswa.length < 3) {
    hasilRanking.innerHTML =
      '<p class="muted">Masukkan minimal 3 siswa terlebih dahulu.</p>';
    return;
  }

  const sudahDipakai = [];
  const top3 = [];

  // Linear Search dijalankan 3 kali:
  // pencarian pertama = terbesar ke-1
  // pencarian kedua   = terbesar ke-2
  // pencarian ketiga  = terbesar ke-3
  for (let i = 0; i < 3; i++) {
    const posisi = cariTerbesarLinear(siswa, sudahDipakai);

    if (posisi !== -1) {
      top3.push(siswa[posisi]);
      sudahDipakai.push(posisi);
    }
  }

  let html = "";

  for (let i = 0; i < top3.length; i++) {
    html += `
      <div class="rank">
        <span class="rank-number">${i + 1}.</span>
        <span class="rank-name">${top3[i].nama}</span>
        <span>Nilai: <b>${top3[i].nilai}</b></span>
      </div>
    `;
  }

  hasilRanking.innerHTML = html;
});
