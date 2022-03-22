///////////// DAY 05 : OBJECT ////////////////////
/** Object : data penampung seperti array, tapi tidak harus berurutan dan alamatnya menggunakan properti 
 * 
 *  Array => penampung data yang berdasarkan alamat index // index pasti number
 * Object => penampung data yang berdasarkan alamat nama properti
 * 
 * let variableArray = [data1, data2, data3];
 * 
 * let variableObject = {     // object diwakili dengan kurung kurawal, dan tipe datanya bervariasi
 *      namaProperty: data,
 *      namaProduct:"Sepatu Air Jordan",
 *      price:250000,
 *      isReady:true,
 *      size:[42, 43, 45],
 *      total:(parameter)=>{block code}
 * }
 * 
 */

// menulis data object
// Cara 1 : Syntax object literal
let instructor = {
  name: "Dimas Aditya",
  class: "JCWDAHLS-01",
  age: 28,
  materi: [
    "Fundamental", "Front-end", "Back-end"
  ]
};

console.log(instructor) // ciri-ciri Object ada titiknya, kalo array []
console.log(`${instructor.name},\n ${instructor.age}`) // apabila ingin memanggil 2
console.log(instructor["age"]) // ciri-ciri Object ada titiknya, kalo array []

// Cara 2 : Syntax object "new" keyword

let student = new Object();

student.name = "Mega";
student.age = 28; // ac
// Object Destructuring
let { name, age, classes } = student;

console.log(age);

// Object Destructuring Array
let data = ["edo", "Jr", 27];
let [namaDepan, namaBelakang, usia] = data
console.log(namaDepan);
console.log(namaBelakang);
console.log(usia);

// ARRAY of OBJECT
let product = [
  {
    name: "Hoodie",
    stock: 12,
    price: 75000
  },
  {
    name: "Sepatu",
    stock: 10,
    price: 80000
  }
];

console.log(product[0].name) // dalan pemanggilan dari tipe data paling luar sampai ketujuan / variable product, array 0 dan name

// Looping pada object
for (let properti in instructor) {
  console.log(properti);
  // console.log(instructor[properti]);
}
