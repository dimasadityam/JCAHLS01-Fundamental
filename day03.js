// Day 03 : Array Data Type
/**
 * 1. Definisi : Array adalah tipe data penampung, karena dapat menampung banyak data dan berbagai tipe data yang lain
 *              Setiap data pada array itu memiliki alamat index. Index pada array itu memiliki tipe data angka/number. 
 * 2. Tujuan : mempermudah pengelolaan data.
 * 3. Array itu bertipe Object jika di typeof
 *         Array memiliki alamat Index dengan tipe data number, object tipe data string
 * 4. Array ditandai dengan kurung siku [ data1, data2, .....] 
 * 
 * 
 */

// Penulisan syntax array
let namaApel = "Apel"; // tidak array
let namaJeruk = "Jeruk"; // tidak array

let namaBuah = ["Apel", "Jeruk", "Durian", "Melon"]; // Cara 1 // array hanya membuat 1 variabel
let stock = Array(10, 15, 25, 12); // Cara 2 mendeklarasikan Array
let harga = []; // cara 3 untuk menyimpan data array
harga[0] = 5000;
harga[1] = 2500;
harga[2] = 10000;
harga[3] = 7000;

// cara mengakses data pada array ==> namaVariable[index]
// console.log("Nama Buah :", namaBuah[1]);
// console.log("Stock Buah :", stock[1]);
// console.log("Harga Buah :", harga[1]);
console.log(`Buah ${namaBuah[0]} stoknya ada ${stock[0]} dan harganya Rp. ${harga[0]};`)
// let toko = "Toko Buah Manis";
// console.log(toko.split(''));

// let polin = "malam";
// let arrPolin = polin.split('') // merubah string menjadi array
// console.log(arrPolin);
// // console.log(arrPolin.reverse()); // membalik urutan data array
// polin = arrPolin.reverse().join('');
// console.log(polin);

// merubah value dari salah satu data pada array
// Reassign

// console.log(namaBuah);
// console.table(namaBuah); // khusus untuk array
let printBuah = '';
for (let i = 0; i < namaBuah.length; i++) {
  printBuah += `${i + 1} Buah ${namaBuah[i]} stoknya ada ${stock[i]} dan harganya Rp. ${harga[i]};\n`
}
console.log(printBuah);

///////////////////////////////////////////////////// ARRAY FUNCTION ///////////////////////////////////////////////
// namaVariableArray.length : untuk mengetahui jumlah data yang ada didalam array
// OUTPUT dari function length adalah NUMBER/INT
console.log("Banyak Data Array :", namaBuah.length);
console.log("Value terakhir :", namaBuah[namaBuah.length - 1]);

// namaVariableArray.push(data) : digunakan untuk menambah data baru di akhir array
namaBuah.push("Alpukat");
stock.push(20);
harga.push(6500);
console.table(namaBuah);
console.table(stock);
console.table(harga);

// namaVariableArray.pop() : digunakan untuk menghapus data terakhir dari array
namaBuah.pop();
stock.pop();
harga.pop();

// namaVariableArray.unshift(data) : digunakan untuk menambah data baru di awal array
namaBuah.unshift("Nangka");
stock.unshift(10);
harga.unshift(2500);

// namaVariableArray.shift(data) : digunakan untuk menghapus data pertama dari array
namaBuah.shift();
stock.shift();
harga.shift();

// namaVariableArray.reverse() : untuk membalikan urutan data array
let motor = ["Yamaha", "Honda", "Kawasaki", "Ducati"];
console.log("sebelum reverse :", motor);
motor.reverse()
console.log("sudah reverse :", motor);

// namaVariableArray.join("separator") : menggabungkan semua data array menjadi data string
console.log(motor.join()); // Output : Ducati,Kawasaki,Honda,Yamaha
console.log(motor.join(" ")); // Output : Ducati Kawasaki Honda Yamaha
console.log(motor.join(" / ")); // Output : Ducati / Kawasaki / Honda / Yamaha

// namaVariable.splice(indexAwal, jumlahDataYangDihapus, dataBaru) : untuk menghapus data array pada index tertentu dan menambahkan data array baru
// fungsi splice 1 : menghapus data array pada index tertentu
let mobil = ["Daihatsu", "Toyota", "Lexus", "BMW"];
console.log("Sebelum dihapus :", mobil);
mobil.splice(2, 1);
console.log("sudah dihapus :", mobil);
// fungsi splice 2 : menyisipkan data baru
console.log("Sebelum disisipkan :", mobil);
mobil.splice(2, 0, "Honda", "Mazda", "Wuling");
console.log("Sudah disisipkan :", mobil);
// fungsi splice 3 : Mengganti Data
console.log("Sebelum diganti :", mobil);
mobil.splice(1, 1, "Ferrari");
console.log("Sudah diganti :", mobil);

// namaVariableArray.slice(startIndex, endIndex);
console.log(mobil.slice(1, 4)) // startIndex data yang diambil, endIndex data yang tidak diambil

// namaVariableArray.includes("data") : memeriksa ada atau tidak data pada array
console.log(mobil.includes("Lexus")); // output : true
console.log(mobil.includes("Isuzu")); // output : false

// namaVariableArray.indexOf("data") : mencari alamat index dari suatu data
console.log(mobil.indexOf("BMW")); // output : 5
console.log(mobil.indexOf("Isuzu")); // output : -1


let myArray = ["one", "two", "three", "four"];
for (let i = 0; i < myArray.length; i++) {
  console.log("tes myArray", i + 1, myArray[i]);
}