/////////////////////////////////////////// DAY 03 FUNCTION //////////////////////////////////////////////
/** 
 * 1. Function sekumpulan program, yang digunakan untuk menyelesaikan tugas tertentu, dan umumnya bisa digunakan berkali-kali
 * 2. untuk menggunakan function, maka kita akan membuat function 
 * 3. function bersifat reusable
 * 4. Build-in Function : Function bawaan javascript
 * 5. User-defined Function : Function yang kita buat sendiri
 *    a. kita harus menggunakan keyword function
 *    b. nama function
 *    c. parameter/argument : agar function dapat menerima data dari luar function
 *        i. disimpan dalam ()
 *        ii. boleh ada, boleh tidak
 *        iii. jika argument lebih dari 1, maka harus dipisah dengan ","
*/

/** DECLARATIVE FUNCTION
 * 
 * keywordFunction namaFunction(argument){
 * // function code
 * }
*/

// global data adalah variable yang tidak masuk scope manapun / diluar dari aplikasi seperti database
let angka1 = 200;
let angka2 = 25;


// deklarasi function / pembuatan function
function penjumlahan() {
  let hasil = angka1 + angka2
  console.log(hasil) // untuk memanggil variable yang bukan global harus ada di dalam 1 scoope, kalo dipanggil diluar scope akan tidak terbaca
}

// memanggil function tapi tidak dijalankan : biasanya dipakai untuk front end dalam event on click / menaruh fungsi di element button nya yang eksekusi event button nya saat di klik
penjumlahan;

// menggunakan/menjalankan function
penjumlahan(); // untuk menjalankan function harus menggunakan kurung buka kurung tutup

// function argument digunakan apabila datanya dinamis dan sering digunakan baik 1 scope atau beda scope
function pengurangan(argument1, argument2) {
  let hasil = argument1 - argument2; // variable bisa digunakan walaupun namanya sama, karna function hanya memanggil scope masing-masing
  // akan error apabila variable 1 di global dan 1 di scope
  console.log(hasil);
}

pengurangan(100, 35); // argument hasil di isi karena dalam function terdapat variable argument

/** Function Expression
 * 
 * keywordVariable namaVariable = keywordFunction(argument){
 *  // function code
 * }
 * 
 */

const perkalian = function (argument1, argument2) {
  let hasil = argument1 * argument2;
  console.log(hasil);
}

perkalian(3, 3);


/** Arrow Function 
 * 
 * keywordVariable namaVariable = (argument) => {
 *  // function code
 * }
 * 
 */

const pembagian = (argument1, argument2) => {
  let hasil = argument1 / argument2;
  console.log(hasil);
}

pembagian(10, 2);

const ganjilGenap = (numb1, numb2 = 2) => {
  let hasil = numb1 % numb2;
  if (hasil == 0) {
    console.log(`${numb1} adalah bilangan Genap`)
  } else {
    console.log(`${numb1} adalah bilangan Ganjil`)
  }

}

ganjilGenap(5)
ganjilGenap(8)
ganjilGenap(99)
ganjilGenap(110)



// console.log(printData);
// namaVariableArray.map() : melooping sebuah data array dan bisa menghasilkan array baru atau menghasilkan

// let listBarang = barang.map((value, index) => {
//   return `${index + 1} ${value}`
// })


//let numb = [2, 3, 4, 1, 6, 5];

let kali = (value, index) => {
  return value * 2 // apabila tidak pake return akan tetap membuat data Array baru tapi tulisan nya undifined
}

// map berfungsi untuk melooping dan return/mengembalikan data Array baru // forEach hanya melooping tidak membuat data Array baru
// map di realcase berfungsi untuk menampilkan data barang karna menghasilkan data Array baru dan menampilkan
// forEach untuk mengumpulkan sekumpulan data array menjadi string karna ditampil dalam variable // map menghasilkan data array
// forEach penjumlahan menggunakan string
let numbArr = numb.map((value, index) => {
  // return value * 2
  return `${index + 1}. ini angka ${value}`
})

console.log(numb)
console.log(numbArr)

// CALLBACK FUNCTION : fungsi di dalam fungsi

const jumlah = (angka1, angka2) => { //argument harus sudah ditentukan untuk melakukan callback function
  return angka1 + angka2
}

const jumlahDikali = (cb, pengali) => {
  return cb(2, 3) * pengali
}

console.log(jumlahDikali(jumlah, 5));


// namaVariableArray.filter() : mengolah data array sehingga menghasilkan array baru tapi berdasarkan condition yang diberikan

let numb = [2, 3, 4, 1, 6, 5];

let filterGenap = numb.filter((value, index) => {
  return value % 2 == 0
})

console.log(filterGenap) // fungsinya untuk memfilter data, jadi hanya yang sesuai kondisi yang akan keluar di output