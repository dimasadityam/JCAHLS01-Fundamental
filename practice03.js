// let symbol = ""

// for (let i = 1; i <= 5; i++) {
//   symbol += `# # # # #\n`
// }

// console.log(symbol);

// let symC = ""


// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     symC += "# "
//   }
//   if (i < 5) {
//     symC += "\n"
//   }
// }

// console.log(symC)
// ///////////////////////////////////////////
// let symC = ""
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     if (i === j) {
//       symC += `${i} `
//     } else {
//       symC += "0 "
//     }
//   }
//   if (i < 5) {
//     symC += "\n"
//   }
// }

// console.log(symC)
//////////////////////////////////////////////////////

// let symC = ""
// for (let i = 1; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     symC += "#";
//   }
//   if (i < 5) {
//     symC += "\n"
//   }
// }

// console.log(symC)




// i = 1
// symC = # # # # # \n
// i = 2
// symC = # # # # # \n # # # # # \n

// Dat Product dan Pembeli

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// PRACTICE GET REPORT ////////////////////////////////////
let db = [
  {
    idproduct: 1,
    name: "Hoodie",
    stock: 12,
    price: 75000
  },
  {
    idproduct: 2,
    name: "Sepatu",
    stock: 10,
    price: 80000
  }
];

let beli = [
  {
    iduser: 1,
    user: "budi",
    keranjang: [
      {
        idproduct: 2,
        qty: 2,
        subtotal: 160000
      },
      {
        idproduct: 1,
        qty: 2,
        subtotal: 150000
      },
    ]
  },
  {
    iduser: 2,
    user: "Edo",
    keranjang: [
      {
        idproduct: 1,
        qty: 1,
        subtotal: 75000
      },
    ]
  },
  {
    iduser: 3,
    user: "Edi",
    keranjang: [
      {
        idproduct: 2,
        qty: 5,
        subtotal: 400000
      },
    ]
  }
]

// membuat temporary Array dan temporary Object karena yang ditampilan adalah array of object
const getReport = (database, cart) => {
  let reportTemp = [];
  let objectTemp = new Object();

  // membuat looping database agar mencari data di let db
  for (let i = 0; i < database.length; i++) {
    // membuat variable penampung yang dibutuhkan agar bisa menyimpan data sementara dan dipanggil ke objectTemp
    let salesQtyTemp = 0;
    let stockTemp = 0;
    let omsetTemp = 0;

    // membuat looping cart agar mencari data di let beli
    for (let j = 0; j < cart.length; j++) {
      // membuat looping keranjang yang ada di cart agar mencari data keranjang di let beli
      for (let k = 0; k < cart[j].keranjang.length; k++) {
        // membuat kondisi jika idproduct yang ada di let db == idproduct yang ada di keranjang let beli
        if (database[i].idproduct == cart[j].keranjang[k].idproduct) {
          // jika kondisi sesuai maka nilai qty yang ada di keranjang let beli dijumlahkan ke variable penampung salesQty
          salesQtyTemp += cart[j].keranjang[k].qty
        }
      }
    }
    // menghitung jumlah omset dengan perkalian, harga di let db * jumlah barang yang terjual
    omsetTemp += database[i].price * salesQtyTemp
    // menghitung jumlah stock sisa dengan pengurangan, stock di let db - jumlah barang yang terjual
    stockTemp += database[i].stock - salesQtyTemp

    // memasukan nilai id produk, nama, stok sisa, harga, barang yang terjual, omset dan total stok ke dalam object
    objectTemp.idproduct = database[i].idproduct
    objectTemp.name = database[i].name
    objectTemp.stock = stockTemp
    objectTemp.price = database[i].price
    objectTemp.salesQty = salesQtyTemp
    objectTemp.omset = omsetTemp
    objectTemp.totalStock = database[i].stock

    // memasukan object kedalam array
    reportTemp.push(objectTemp)
  }
  // mengembalikan nilai array
  return reportTemp
}

// tampilkan nilai array yang ada di getReport
console.log(getReport(db, beli))