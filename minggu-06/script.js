// Data awal mahasiswa. Nilai berupa angka agar dapat dibandingkan.
const initialStudents = [
    { nama: "Andi Saputra", nilai: 88 },
    { nama: "Budi Santoso", nilai: 75 },
    { nama: "Citra Lestari", nilai: 92 },
    { nama: "Dewi Anggraini", nilai: 81 },
    { nama: "Eko Pratama", nilai: 67 },
    { nama: "Fitri Amelia", nilai: 95 },
    { nama: "Gilang Ramadhan", nilai: 78 },
    { nama: "Intan Permata", nilai: 84 },
    { nama: "Joko Setiawan", nilai: 70 },
    { nama: "Kirana Putri", nilai: 90 },
    { nama: "Lukman Hakim", nilai: 83 },
    { nama: "Maya Salsabila", nilai: 76 },
    { nama: "Nanda Prakoso", nilai: 89 },
    { nama: "Putri Maharani", nilai: 68 },
    { nama: "Rizky Firmansyah", nilai: 97 }
  ];
  
  let students = [...initialStudents];
  
  const tableBody = document.getElementById("studentTableBody");
  const sortOrder = document.getElementById("sortOrder");
  const sortButton = document.getElementById("sortButton");
  const resetButton = document.getElementById("resetButton");
  const statusText = document.getElementById("status");
  
  // Menampilkan data mahasiswa ke tabel.
  function renderStudents(data) {
    tableBody.innerHTML = "";
  
    data.forEach((student, index) => {
      const row = document.createElement("tr");
  
      const numberCell = document.createElement("td");
      numberCell.textContent = index + 1;
  
      const nameCell = document.createElement("td");
      nameCell.textContent = student.nama;
  
      const scoreCell = document.createElement("td");
      scoreCell.textContent = student.nilai;
  
      row.append(numberCell, nameCell, scoreCell);
      tableBody.appendChild(row);
    });
  }
  
  // Algoritma Bubble Sort: membandingkan nilai bersebelahan dan menukarnya.
  function bubbleSort(data, order) {
    const result = [...data];
    const length = result.length;
  
    for (let i = 0; i < length - 1; i++) {
      let swapped = false;
  
      for (let j = 0; j < length - 1 - i; j++) {
        const shouldSwap = order === "asc"
          ? result[j].nilai > result[j + 1].nilai
          : result[j].nilai < result[j + 1].nilai;
  
        if (shouldSwap) {
          const temporary = result[j];
          result[j] = result[j + 1];
          result[j + 1] = temporary;
          swapped = true;
        }
      }
  
      // Jika tidak ada pertukaran, data sudah terurut.
      if (!swapped) {
        break;
      }
    }
  
    return result;
  }
  
  sortButton.addEventListener("click", () => {
    const order = sortOrder.value;
    students = bubbleSort(students, order);
    renderStudents(students);
  
    statusText.textContent = order === "asc"
      ? "Data berhasil diurutkan secara ascending (nilai terkecil ke terbesar)."
      : "Data berhasil diurutkan secara descending (nilai terbesar ke terkecil).";
  });
  
  resetButton.addEventListener("click", () => {
    students = [...initialStudents];
    sortOrder.value = "asc";
    renderStudents(students);
    statusText.textContent = "Data dikembalikan ke urutan awal.";
  });
  
  // Tampilkan data awal saat halaman dibuka.
  renderStudents(students);
  