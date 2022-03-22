// Variable : Penampung data pada program
/** 
 * susunan variable ===> keywordVariable namaVariable = nilaiVariable ;
 * 
 * keywordVariable : var, let, const
 * 
 * namaVariable : harus diawali dengan huruf atau symbol "_" atau "$"
 * 
 * valueVariable : berdasarkan tipe data ==> string, number, boolean, array, object
*/

// keyword var : Redeclare, Reassign
var name = "David"; // deklarasi variable : tahap pertama ketika membuat variable
var name = "Edo"; // sifat Redeclare (deklarasi ulang namaVariable) apabila dipanggil nilai yang keluar yang terakhir. Redeclare tidak disarankan
nama = "Budi"; // Reassign

console.log(nama); // console.log(nilai_yang _ingin_dilihat) : untuk menampilkan nilai pada terminal

// keyword let : Non-Redeclare, Reassign. agar mencegah deklarasi terulang
let age = 26;
// let age = 20; gak bisa Redeclare
age = 30; // bisa di Reassign atau dipanggil ulang
console.log(age);

// keyword const : Lawan dari var Non-Redeclare, Non-Reassign / const adalah nilai tetap menggunakan KAPITAL
const PI = 3.14;
// const PI = 14; // gak bisa Redeclare
// PI = 22 / 7; // gak bisa Reassign

console.log(PI);

//////////////////////////////////////// ATURAN PENULISAN VARIABLE ////////////////////////////////////////////////////
// 1. harus diawali dengan huruf
// let 1nama; gak bisa karna diawali dengan angka
let pekerjaan; // bisa karena diawali dengan huruf
var alamat = "Surabaya"; // bisa karena huruf

// 2. boleh diawali dengan symbol (_ atau $)
let _telp = "08176044203";
let $fax = "08176044203";

// 3. Variable yang terdiri dari 2 suku kata atau lebih
let fullName = "Dimas Aditya"; // camelCase
let harga_barang = "20000"; // snake_case
let namaproduk = "Air Jordan"; // Jarang digunakan
// let stok barang; // gak bisa karena pake spasi
// let stok-barang; // gak bisa karena pake strip bukan underscore

// keyboard shortcut yang biasa digunakan

// shift + alt + f : merapihkan program
// windows + . : emoticon
// ctrl + s : save untuk program
// ctrl + / : membuat comment
// ctrl + f : untuk mencari program atau mencari code / find code
// ctrl + ` : untuk membuka terminal
// alt + arrow atas atau bawah : menggeser baris program
// shift + alt + arrow bawah atau atas : duplicate baris program

///////////////////////////////////////////////// DATA TYPE //////////////////////////////////////////////////////////////

////// 1. String : type data untuk huruf atau character //////////
let namaToko = "Gladius 'A' \"Toko\" \n Olahraga"; // string menggunakan double quote atau tanda petik ""
let nama_toko = 'Gladius \'B\' \n Toko Olahraga'; // string menggunakan single quote atau tanda petik ''
let namatoko = `Gladius 'C'
"Toko"
Olahraga`; // string menggunakan backthick atau tanda petik `` // backthick bisa menggunakan single dan double quotes langsung, jadi lebih sering digunakan
// kelebihan backthick tinggal enter tanpa harus ketik "\n"
console.log(namaToko);
console.log(nama_toko);
console.log(namatoko);

let alamatToko = "Jl. Sudirman No 23";

// let alamatLengkap = namaToko + " " + alamatToko; // cara 1
let alamatLengkap = `Pak Eko, ${namaToko}. ${alamatToko}`; // cara 2

console.log(alamatLengkap);

//////////////////////////////////////////////////////// FUNGSI PADA TIPE DATA STRING ///////////////////////////////////////////////////////////////////
let greeting = "Hello, Purwadhika Student";

// typeof : memeriksa suatu nilai atau variable tipe data
console.log("output typeof ===>", typeof greeting); // double quotes string untuk memberi label pada console.log agar tidak bingung // nilai dari variable
console.log("output typeof ===>", typeof "Hello"); // double quotes string untuk memberi label pada console.log agar tidak bingung // nilai langsung

// string.length = untuk menghitung panjang data string // menghitung jumlah huruf yang digunakan
console.log("output dari string.length ===>", greeting.length);

// string.toLowerCase() : merubah semua huruf menjadi huruf kecil
console.log("output dari string.toLowerCase() ===>", greeting.toLowerCase());

// string.toUpperCase() : merubah semua huruf menjadi huruf besar
console.log("output dari string.toUpperCase() ===>", greeting.toUpperCase());

// string.includes() : untuk memastikan / mencari sebuah kata apakah ada pada variable // kata yang mau dicari harus sama persis dengan data di variable
console.log("output dari string.includes('kata_cari') ===>", greeting.includes("Purwadhika"));


////////////////// 2. Number : berkaitan dengan tipe data angka //////////////////////
let jarak = 1500; // NILAI INT/INTEGER atau nilai bulat
let berat = 90.25; // Nilai FLOAT atau desimal
let saldoATM = 25e6; // 25000000

// console.log (saldoATM);

// Arithemetic operator : +, -, *, /, %
let hasil = jarak + 500;
hasil = jarak - 500;
hasil = jarak / 500;
hasil = jarak * 500;

// Increment
jarak++; // 1501
jarak++; // 1502
jarak++; // 1503
jarak++; // 1504

jarak += 5; // ==> jarak = jarak + 5 // 1509
jarak += 5; // ==> jarak = jarak + 5 // 1514


// Decrement
jarak--;
jarak--;
jarak--;
jarak--;

jarak -= 5;
jarak -= 5;

console.log("Jarak ===>", jarak);

///////////////////////// Math Object ///////////////////////////////
const PI_CIRCLE = Math.PI;
console.log(PI_CIRCLE);

console.log(Math.abs(-25.5)); // absolute untuk merubah nilai negatif menjadi positif
console.log(Math.abs(-25.5) * -1); // absolute untuk merubah nilai menjadi negatif
console.log(-Math.abs(-25.5)); // absolute untuk merubah nilai menjadi negatif cara ke-2

console.log(Math.pow(4, 2)); // 4 pangkat 2
console.log(Math.sqrt(4)); // akar pangkat 2
console.log(Math.cbrt(8)); // akar pangkat 3

// Pembulatan
console.log(Math.round(2.5)) // pembulatan ke nilai terdekat
console.log(Math.ceil(2.1)) // pembulatan selalu ke atas
console.log(Math.floor(2.1)) // pembulatan selalu ke bawah

console.log(Math.min(3, 2, 5, 67, 3, 1)); // mencari nilai terkecil
console.log(Math.max(3, 2, 5, 67, 3, 1)); // mencari nilai terbesar

console.log(Math.random()); // membuat nilai random dari 0.xx sd 1

// Parsing data string to number
let angka = "123.456";

console.log(typeof angka);
console.log(parseInt(angka)); // 123
console.log(parseFloat(angka)); // 123.456

// Parsing data number to string
let angkaB = 150050;

console.log(angkaB.toString()); // "150050"
console.log(angkaB.toLocaleString()); // "150,050"

// memeriksa data apakah sebuah angka
console.log(isNaN(2)); // false
console.log(isNaN("ABCDE")); // true
console.log(isNaN("12")); // false

// 3. Boolean : nilai benar =>> TRUE atau nilai salah =>> FALSE
let benar = true;
let salah = false;

// Comparison Operator : >, <, >=, <=, ==, ===, !=
let angka_A = 20;
let angka_B = 15;
console.log("Comparison : ", angka_A > angka_B); // true
console.log("Comparison : ", angka_A < angka_B); // false
console.log("Comparison : ", angka_A == angka_A); // true
console.log("Comparison : ", angka_A == angka_B); // false
console.log("Comparison : ", angka_A != angka_B); // true
console.log("Comparison : ", angka_A == 20); // true
console.log("Comparison : ", angka_A == "20"); // true =>> walau tipe datanya beda tetapi nilainya sama akan menghasilkan TRUE
console.log("Comparison : ", angka_A === "20"); // false =>> nilai dan tipe datanya harus sama akan menghasilkan TRUE

// Logical Operator : AND, OR, NOT

// AND : akan menghasilkan nilai TRUE apabila kedua perbandingan bernilai TRUE
console.log("Logical AND : ", true && true); // true
console.log("Logical AND : ", true && false); // false
console.log("Logical AND : ", false && false); // false
console.log("Logical AND : ", angka_A > 19 && angka_B < 19); // true
console.log("Logical AND : ", angka_A < 19 && angka_B < 19); // false




// OR : selama ada yang bernilai TRUE maka hasilnya adalah TRUE
console.log("Logical OR : ", true || true); // true
console.log("Logical OR : ", true || false); // true
console.log("Logical OR : ", false || true); // true
console.log("Logical OR : ", false || false); // false
console.log("Logical OR : ", angka_A >= 15 || angka_B <= 15); // true
console.log("Logical OR : ", angka_A >= 15 || angka_B > 15); // true

// NOT : membalik logika
console.log("Logical NOT : ", !true); // false
console.log("Logical NOT : ", !false); // true

// Tipe data Truthly dan Falsy
// Truthly : tipe data yang bernilai TRUE
console.log(Boolean(2)); // true
console.log(Boolean("ABCDEFG")); // true
console.log(Boolean(true)); // true
console.log(Boolean(-2)); // true
console.log(Boolean("false")); // true
console.log(Boolean(" ")); // true

// Falsy : tipe data yang bernilai FALSE
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
