// jawaban soal nomor 2

const filterKonversiArray = (array1, array2, vocal) => {
  // filter kata
  const objKata = []
  array1.forEach((arr1, index) => {
    objKata[index] = {
      kata: arr1,
      jumlah: 0,
    }
    array2.forEach((arr2) => {
      arr2.includes(`${arr1} `) ? objKata[index]['jumlah'] += 1 : null
    });
  });

  // konversi kata
  const newArray2 = array2.map((arr) => arr.replaceAll(/a|i|u|e|o/gi, vocal));

  // variabel untuk menampung hasil
  const hasil = ` 
  HASIL FILTER DAN KONVERSI
  =================================
  Kata yang difilter muncul sebanyak:
  ${objKata.map((obj) => `Kata ${obj.kata} muncul sebanyak: ${obj.jumlah} kali \n`)}
  =================================
  Kalimat yang dikonversi menjadi "${vocal}" :
  ${newArray2.map((arr, index) => `${array2[index]} => ${arr}\n`)}
  `;
  
  // mencetak hasil
  console.log(hasil);
}

const array1 = ['apa', 'saya', 'anda', 'kamu', 'hallo'];
const array2 = ['apa yang anda lakukan?', 'selamat pagi', 'kamu ternyata cantik juga ya', 'yukk belajar javascript', 'kamu itu adalah kebanggaan saya', 'music hari ini yang akan di putar oleh gabut FM apa ya?'];
const vocal = 'i';

// memanggil fungsi filterKonversiArray
filterKonversiArray(array1, array2, vocal);
