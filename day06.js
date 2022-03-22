// ARRAY OF OBJECT
/**
 * 1. Merupakan struktur data yang biasa digunakan untuk output database
 * 2. Juga digunakan untuk data JSON (Javascript Object Natation)
 * 3. Struktur penulisan :
 *      let arrObj = [
 *          {
 *              id:1,
 *              name: "Jacket",
 *              detail: [
 *                    {
 *                        type:"Red",
 *                        qty:20
 *                    }
 *              ],
 *          }
 *      ]
 *
 */

// Array.map() ===> sering digunakan karna ditujukan untuk mengolah data Array of Object agar di olah seluruh datanya menjadi data Array baru // untuk membuat struktur tampilan data ==> Output : Array
// Array.filter() ===> digunakan untuk memfilter data Array of Object ==> Output : Array
// Array.findIndex() ===> untuk mencari data yang kita miliki // ditujukan untuk mencari alamat index ==> Output : Number
// case findIndex untuk merubah data tapi kita lupa indexnya

let dataProduct = [
  {
    name: "Jacket",
    price: 85000,
    stock: [
      {
        type: "M",
        qty: 8
      },
      {
        type: "L",
        qty: 12
      },
      {
        type: "XL",
        qty: 5
      }
    ]
  },
  {
    name: "Shoes",
    price: 70000,
    stock: [
      {
        type: "40",
        qty: 10
      },
      {
        type: "41",
        qty: 5
      },
      {
        type: "42",
        qty: 3
      }
    ],
  },
  {
    name: "Hat",
    price: 70000,
    stock: [
      {
        type: "40",
        qty: 10
      },
      {
        type: "41",
        qty: 5
      },
      {
        type: "42",
        qty: 3
      }
    ],
  }
]
console.table(dataProduct);

let searchData = dataProduct.filter((value) => {
  return value.name == "Hat";
})

let dataIdx = dataProduct.findIndex(value => { // variasi penulisan arrow function apabila parameter cuma 1 bisa tanpa ()
  return value.name == "Hat";
})

// console.table(searchData);
// console.table(dataIdx);
dataProduct[dataIdx].name = "Topi";

// console.table(dataProduct);

// Concatination ==> penggabungan data atau menduplikasi data// antara data Array dan data Object bisa digabungkan
let mobil = ["Tesla", "Ferrari", "Lamborgini"];
let motor = ["Honda", "Yamaha", "Kawasaki"];
// let kendaraan = mobil.concat(motor, ["KTM", "Wuling"]); // Cara 1 // panggil dulu data array pertama  // membuat array baru dengan menggabungkan 2 array
let kendaraan = [...mobil, ...motor, "Harley", "HasQ"]; //menggunakan yang namanya spread operator //fungsi titik 3 adalah memanggil semua data array di dalam array mobil
//console.log(kendaraan);

let sepedaMotor = [...motor]; // jika seperti ini merubah data tetapi tidak merubah data asli // hanya untuk sementara
sepedaMotor[0] = "SUZUKI";

// console.log(motor);
// console.log(sepedaMotor);

let dbA = {
  name: "Reno",
  usia: 12,
  alamat: "BSD"
}
let dbB = {
  pekerjaan: "Coder",
  gaji: 7500000,
}
// ketika ingin menambahkan properti tapi nama propertinya sama, data yang lama akan diganti dengan data yang baru // mengganti data lama dengan data baru
let dataDb = { ...dbA, ...dbB, alamat: "Sudirman Thamrin", status: "aktif" };
console.log(dataDb);

// tips latihan fundamental codewars.com / hackerRank.com / testgorilla / codility.com //

// membuat semacam aplikasi e-commerce, ada 3 