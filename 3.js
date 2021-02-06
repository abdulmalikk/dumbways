// jawaban soal nomor 3

const cetakPola = () => {
  // membuat variabel untuk mencetak hasil
  let hasil = '';

  // jajar genjang atas
  for (let i = 0; i < 6; i++) {
    for (let j = 5; j > i; j--) {
      hasil += ' ';
    }
    for (let k = 7; k > 0; k--) {
      if (i > 0 && i < 5) {
        if (k > 1 && k < 7) {
          hasil += ' ';
        } else {
          hasil += '*';
        }
      } else {
        hasil += '*';
      }
    }
    hasil += '\n';
  }

  // jajar genjang bawah
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < i; j++) {
      hasil += ' ';
    }
    for (let k = 0; k < 7; k++) {
      if (i > 0 && i < 5) {
        if (k > 0 && k < 6) {
          hasil += ' ';
        } else {
          hasil += '*';
        }
      } else {
        hasil += '*';
      }
    }
    hasil += '\n';
  }

  // mencetak hasil
  console.log(hasil);
}

// memanggil fungsi cetakPola
cetakPola();
