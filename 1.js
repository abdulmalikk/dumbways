// jawaban soal nomor 1

const hitungGaji = (golongan, jenkel, status, anak) => {
  // membuat fungsi untuk memformat angka menjadi bilangan rupiah
  const formatRupiah = (uang) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(uang);
  }

  const golGaji = {
    gol1: 1500000,
    gol2: 2000000,
    gol3: 3000000,
    gol4: 4000000,
  }
  const golTunjangan = {
    gol1: 200000,
    gol2: 400000,
    gol3: 600000,
    gol4: 1000000,
  }

  let gajiPokok;
  let tunjangan;
  const tunjanganIstri = 200000;
  const tunjanganAnak = 100000 * anak;

  // switch case untuk menentukan gaji dan tunjangan sesuai golongan
  switch (golongan.toLowerCase()) {
    case 'golongan i':
      gajiPokok = golGaji.gol1;
      tunjangan = golTunjangan.gol1;
      break;
    case 'golongan ii':
      gajiPokok = golGaji.gol2;
      tunjangan = golTunjangan.gol2;
      break;
    case 'golongan iii':
      gajiPokok = golGaji.gol3;
      tunjangan = golTunjangan.gol3;
      break;
    case 'golongan iv':
      gajiPokok = golGaji.gol4;
      tunjangan = golTunjangan.gol4;
      break;
  }

  const total = gajiPokok + tunjangan + tunjanganIstri + tunjanganAnak;
  const pajak = total / 10;
  const potonganPensiun = 200000;
  const potonganBPJS = 150000;

  // membuat variabel untuk menampung hasil
  const hasil = `
  HASIL PERHITUNGAN GAJI
  ====================================
  INFO PEGAWAI
  ====================================
  Pegawai yang bersangkutan
  Golongan: ${golongan}
  Jenis Kelamin: ${jenkel}
  Jumlah Anak: ${anak}
  ====================================
  GAJI DAN TUNJANGAN
  ====================================
  Gaji Pokok: ${formatRupiah(gajiPokok)}
  Tunjangan: ${formatRupiah(tunjangan)}
  ${
    jenkel.toLowerCase() === 'laki-laki' && status.toLowerCase() === 'menikah'
    ? `Tunjangan Istri : ${formatRupiah(tunjanganIstri)}`
    : null
  }
  Tunjangan Anak : ${formatRupiah(tunjanganAnak)}
  Total : ${formatRupiah(total)}
  Pajak: ${formatRupiah(pajak)}
  Gaji Sementara : ${formatRupiah(total - pajak)}
  ====================================
  GAJI BERSIH
  ====================================
  Potongan Pensiun: ${formatRupiah(potonganPensiun)}
  Potongan BPJS: ${formatRupiah(potonganBPJS)}
  GAJI BERSIH: ${formatRupiah(total - pajak - potonganPensiun - potonganBPJS)}
  `;

  // mencetak hasil
  console.log(hasil);
}

// memanggil fungsi hitungGaji
hitungGaji('Golongan I', 'laki-laki', 'menikah', 1);
