let database = [
  {
    name: "Hoodie",
    stock: 12,
    price: 75000
  },
  {
    name: "Sepatu",
    stock: 10,
    price: 80000

  }, {
    name: "Helm",
    stock: 12,
    price: 40000
  },
  {
    name: "Celana",
    stock: 10,
    price: 20000

  }
];

// 1. Menghitung total harga menggunakan forEach

// let totalHarga = 0;
// let temp = [];
// database.forEach(function (value, index) {
//   totalHarga += value.price
// })

// console.log(totalHarga)

// 2. Menghitung total harga menggunakan duplikasi fungsi ForEach\
const duplicateForEach = (cbfn, array) => {
  for (let i = 0; i < array.length; i++)
    cbfn(array[i], i);

};

let total = 0;
duplicateForEach((value, index) => {
  total += value.price
}, database)

console.log(total)

// let listBarang = "";
// duplicateForEach((value, index) => {
//   listBarang += `${value.name}\n`
// }, database)

// console.log(listBarang)

//return product.map((value, index) => {
//  return `${index + 1}. ${value.name}, Stock : ${value.stock}, Harga : Rp. ${value.price}`;}).join("\n ");

// let databaseArr = database.map((value, index) => {
//   return `${index + 1}. ${value.name}, stock: ${value.stock}, Harga: Rp.${value.price}`
// }).join("\n")
//
// console.log(databaseArr)
//


// 3. Membuat list barang menggunakan duplikasi fungsi map
const duplicateMap = (cbfn, array) => {
  let tempArr = [];
  for (let i = 0; i < array.length; i++) {
    tempArr.push(cbfn(array[i], i));
  }
  return tempArr;
}

let newDb = duplicateMap((value, index) => {
  return `Nama barang: ${value.name}, Stock: ${value.stock}, Harga:${value.price}`
}, database).join("\n")

console.log(newDb)

// 4 Membuat list filter barang menggunakan duplikasi fungsi filter
// cbfn berisi kondisi
// yang di filter harga

//let numb = [2, 3, 4, 1, 6, 5];

// let filterGenap = database.filter((value, index) => {
//   return value.price > 50000
// })

// console.log(filterGenap)

const duplicateFilter = (cbfn, array) => {
  let tempArr = [];
  for (let i = 0; i < array.length; i++) {
    if (cbfn(array[i], i)) {
      tempArr.push(array[i]);
      // console.log(tempArr)
    }
  }
  return tempArr
  //  return tempArr
}

let filter = duplicateFilter((value, index) => {
  return value.price
}, database)

console.log(filter)

// 5. Object function
let student = {
  nama: "Edo Ronaldo",
  usia: 20,
  kelas: "IPA"
}

// Object.keys(student); // jika di console.log // ["nama", "usia", "kelas"]
// console.log(Object.keys(student))

const duplicateGetKeys = (obj) => {
  let myArr = []
  for (let properti in obj) {
    myArr.push(properti)
    // console.log(properti);
  }

  return myArr;
};

console.log(duplicateGetKeys(student)); // ["nama", "usia", "kelas"]

const duplicateGetValue = (obj) => {
  let myArr = []
  for (let value in obj) {
    myArr.push(obj[value])
    // console.log(properti);
  }

  return myArr;
};

console.log(duplicateGetValue(student)); // ["Edo Renaldo", "20", "IPA"]

const duplicateGetEntries = (obj) => {
  let myArr = []
  for (let property in obj) {
    let myArr1 = []
    myArr1.push(property, obj[property])
    // console.log(properti);
    myArr.push(myArr1)
  }

  return myArr;
};

console.log(duplicateGetEntries(student)); // [["nama","Edo Renaldo"],["usia",20],["kelas","IPA"]]