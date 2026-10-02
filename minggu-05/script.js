const daftarProduk = [
    { barcode: 1008, produk: 'Sabun Lifebuoy Total 10' },
    { barcode: 1015, produk: 'Shampo Pantene Anti Dandruff' },
    { barcode: 1023, produk: 'Sikat Gigi Pepsodent' },
    { barcode: 1045, produk: 'Pasta Gigi Colgate MaxFresh' },
    { barcode: 1061, produk: 'Kecap Manis Bango 275ml' },
    { barcode: 1078, produk: 'Saus Sambal ABC' },
    { barcode: 1092, produk: 'Minyak Goreng Sania 2L' },
    { barcode: 1113, produk: 'Teh Celup Sariwangi' },
    { barcode: 1124, produk: 'Kopi Kapal Api Special' },
    { barcode: 1139, produk: 'Gula Pasir Gulaku 1kg' },
    { barcode: 1156, produk: 'Tepung Terigu Segitiga Biru' },
    { barcode: 1177, produk: 'Mie Instan Indomie Goreng' },
    { barcode: 1198, produk: 'Biskuit Roma Kelapa' },
    { barcode: 1219, produk: 'Snack Twisko Jagung Bakar' },
    { barcode: 1234, produk: 'Wafer Tango Cokelat' },
    { barcode: 1251, produk: 'Susu UHT Ultra Milk Cokelat' },
    { barcode: 1266, produk: 'Yogurt Cimory Strawberry' },
    { barcode: 1282, produk: 'Jus Buavita Jambu' },
    { barcode: 1305, produk: 'Air Mineral Aqua 600ml' },
    { barcode: 1321, produk: 'Deterjen Rinso Anti Noda' },
    { barcode: 1344, produk: 'Pewangi Molto Pure' },
    { barcode: 1367, produk: 'Pembersih Lantai Super Pell' },
    { barcode: 1388, produk: 'Sabun Cuci Piring Sunlight' },
    { barcode: 1409, produk: 'Obat Nyamuk Baygon' },
    { barcode: 1423, produk: 'Baterai ABC Alkaline AA' },
    { barcode: 1447, produk: 'Deodoran Rexona Men' },
    { barcode: 1468, produk: 'Parfum Axe Cokelat' },
    { barcode: 1489, produk: 'Sabun Muka Garnier Men' },
    { barcode: 1512, produk: 'Hand Sanitizer Antis' },
    { barcode: 1533, produk: 'Tisu Wajah Paseo' },
    { barcode: 1555, produk: 'Popok Bayi MamyPoko' },
    { barcode: 1578, produk: 'Beras Sania 5kg' },
    { barcode: 1599, produk: 'Telur Ayam Negeri (per kg)' },
    { barcode: 1621, produk: 'Roti Tawar Sari Roti' },
    { barcode: 1645, produk: 'Selai Cokelat Nutella' },
    { barcode: 1666, produk: 'Keju Kraft Cheddar' },
    { barcode: 1687, produk: 'Sarden ABC Tomat' },
    { barcode: 1708, produk: 'Kornet Sapi Pronas' },
    { barcode: 1729, produk: 'Bubur Bayi Sun Pisang' },
    { barcode: 1751, produk: 'Pembalut Charm Body Fit' },
    { barcode: 1774, produk: 'Cokelat SilverQueen' },
    { barcode: 1798, produk: 'Permen Kiss Mint' },
    { barcode: 1823, produk: 'Keripik Kentang Chitato' },
    { barcode: 1845, produk: 'Minuman Soda Coca-Cola' },
    { barcode: 1867, produk: 'Sirup Marjan Cocopandan' },
    { barcode: 1888, produk: 'Es Krim Walls Magnum' },
    { barcode: 1910, produk: 'Sereal Koko Krunch' },
    { barcode: 1932, produk: 'Mentega Blue Band' },
    { barcode: 1956, produk: 'Sambal Terasi Uleg' },
    { barcode: 1999, produk: 'Kopi Sachet Nescafe Classic' }
  ];
  
  // --- Implementasi Linear Search ---
  function linearSearch(arr, targetBarcode) {
    let steps = 0;
    let logText = `=== LINEAR SEARCH (Target: ${targetBarcode}) ===\n`;
  
    for (let i = 0; i < arr.length; i++) {
      steps++;
      logText += `Langkah ${steps}: Memeriksa indeks ${i} (${arr[i].barcode}) -> ${arr[i].produk}\n`;
  
      if (arr[i].barcode === targetBarcode) {
        logText += `\n[HASIL] Ditemukan: "${arr[i].produk}"\n[EFISIENSI] Total: ${steps} langkah.`;
        console.log(logText);
        return { item: arr[i], steps, logText };
      }
    }
  
    logText += `\n[HASIL] Barcode ${targetBarcode} tidak ditemukan.\n[EFISIENSI] Total: ${steps} langkah.`;
    console.log(logText);
    return { item: null, steps, logText };
  }
  
  // --- Implementasi Binary Search ---
  function binarySearch(arr, targetBarcode) {
    let left = 0;
    let right = arr.length - 1;
    let steps = 0;
    let logText = `=== BINARY SEARCH (Target: ${targetBarcode}) ===\n`;
  
    while (left <= right) {
      steps++;
      let mid = Math.floor((left + right) / 2);
      let currentItem = arr[mid];
  
      logText += `Langkah ${steps}: Rentang [${left}..${right}], Tengah Indeks ${mid} (${currentItem.barcode}) -> ${currentItem.produk}\n`;
  
      if (currentItem.barcode === targetBarcode) {
        logText += `\n[HASIL] Ditemukan: "${currentItem.produk}"\n[EFISIENSI] Total: ${steps} langkah.`;
        console.log(logText);
        return { item: currentItem, steps, logText };
      }
  
      if (currentItem.barcode < targetBarcode) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    logText += `\n[HASIL] Barcode ${targetBarcode} tidak ditemukan.\n[EFISIENSI] Total: ${steps} langkah.`;
    console.log(logText);
    return { item: null, steps, logText };
  }
  
  // --- Menghubungkan Fungsi dengan Tampilan Web (DOM) ---
  document.getElementById('btnCari').addEventListener('click', function () {
    const inputVal = document.getElementById('inputBarcode').value;
    const targetBarcode = parseInt(inputVal);
  
    if (isNaN(targetBarcode)) {
      alert('Masukkan nomor barcode berupa angka!');
      return;
    }
  
    // Eksekusi Pencarian
    const resLinear = linearSearch(daftarProduk, targetBarcode);
    const resBinary = binarySearch(daftarProduk, targetBarcode);
  
    // Update Tampilan Ringkasan
    document.getElementById('summary').classList.remove('hidden');
    document.getElementById('linearSteps').textContent = `${resLinear.steps} Langkah`;
    document.getElementById('binarySteps').textContent = `${resBinary.steps} Langkah`;
  
    const productResultEl = document.getElementById('productResult');
    if (resLinear.item) {
      productResultEl.style.color = '#27ae60';
      productResultEl.textContent = `Produk Ditemukan: ${resLinear.item.produk} (Barcode: ${resLinear.item.barcode})`;
    } else {
      productResultEl.style.color = '#e74c3c';
      productResultEl.textContent = `Produk dengan barcode ${targetBarcode} tidak ditemukan.`;
    }
  
    // Update Tampilan Log
    document.getElementById('linearLog').textContent = resLinear.logText;
    document.getElementById('binaryLog').textContent = resBinary.logText;
  });