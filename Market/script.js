class Product {
  constructor(_sku, _img, _name, _category, _stock, _price) {
    this.sku = _sku;
    this.img = _img;
    this.name = _name;
    this.category = _category;
    this.stock = _stock;
    this.price = _price;
  }
}

let dbProduct = [
  new Product("SKU-1-126374", "https://thumb.viva.co.id/media/frontend/thumbs3/2020/02/26/5e56094360ada-sosok-di-balik-kelezatan-biskuit-oreo-sang-ilmuwan-pangan-yang-buta-warna_665_374.jpg", "oreo", "Food", 25, 7500),
  new Product("SKU-2-198374", "https://upload.wikimedia.org/wikipedia/commons/4/4d/Pocari_Sweat_l%C3%A0_s%E1%BB%B1_l%E1%BB%B1a_ch%E1%BB%8Dn_t%E1%BB%91i_%C6%B0u_cho_s%E1%BB%A9c_kh%E1%BB%8Fe.png", "Pocari", "Drink", 50, 10000)
]

let selectedIdx = null;


function handleSubmit() {
  // 1. mengambil data
  let form = document.getElementById("form-product");
  let sku = `SKU-${dbProduct.length + 1}-${Math.round(Math.random() * 1000000)}`
  let img = form.elements[0].value;
  let name = form.elements[1].value;
  let category = form.elements[2].value;
  let stock = form.elements[3].value;
  let price = form.elements[4].value;

  // 2. proteksi jika ada 1 form yang kosong keluar alert "Isi semua data dengan benar"
  if (img == "" || name == "" || category == "null" || stock == "" || price == "") {
    alert("Isi semua data dengan benar!")
  } else {
    // 3. data disimpan kedalam dbProduct
    dbProduct.push(new Product(sku, img, name, category, parseInt(stock), parseInt(price)))
    // 4. reset ulang input element
    form.elements[0].value = "";
    form.elements[1].value = "";
    form.elements[2].value = null;
    form.elements[3].value = "";
    form.elements[4].value = "";
    printProduct();
  }
}

function printProduct() {
  document.getElementById("table-list").innerHTML = dbProduct.map((value, idx) => {
    // let htmlElement = dbProduct.map((value, idx) => {
    if (selectedIdx == idx) {
      return `<tr>
        <td>${value.sku}</td>
        <td><img src="${value.img}" width="75px"></td>
        <td><input type="text" id="new-name" value= "${value.name}" placeholder="Product Name" /></td>
        <td>${value.category}</td>
        <td><input type="number" id="new-stock" value= "${value.stock}" placeholder="Stock" /></td>
        <td><input type="number" id="new-price" value= "${value.price}" placeholder="Price" /></td>
        <td><button type="button" onclick="handleSave()">Save</button>
        <button type="button" onclick="">Cancel</button></td>
      </tr>`
    }
    return `<tr>
        <td>${value.sku}</td>
        <td><img src="${value.img}" width="75px"></td>
        <td>${value.name}</td>
        <td>${value.category}</td>
        <td>${value.stock.toLocaleString()}</td>
        <td> IDR. ${value.price.toLocaleString()}</td>
        <td><button type="button" onclick="handleEdit(${idx})">Edit</button>
        <button type="button" onclick="handleDelete(${idx})">Delete</button></td>
      </tr>`
  }).join("")
  // document.getElementById("table-list").innerHTML = htmlElement.join("");
}

function handleDelete(idx) {
  if (confirm("Yakin mau menghapus produk ini?"))
    dbProduct.splice(idx, 1)
  printProduct();

}

function handleEdit(idx) {
  selectedIdx = idx
  printProduct();
}


printProduct();






















// let dbStudent = [];

// class Student{
//   constructor(_name, _age, _email, _gender, _program){
//     this.name = _name;
//     this.age = _age;
//     this.email = _email;
//     this.gender = _gender;
//     this.program = _program;
//   }
// }

// const deleteData = (index) => {
//   dbStudent.splice(index, 1)
//   printData();

// }

// const handleSubmit = () => {
//   let form = document.getElementById("data-form");
//   let fullName = form.elements[0].value;
//   let age = form.elements[1].value;
//   let email = form.elements[2].value;
//   let gender = form.elements["gender"].value;
//   let classProgram = form.elements["program"].value;
//   dbStudent.push(new Student(fullName, age, email, gender, classProgram))
//   form.elements[0].value = null;
//   form.elements[1].value = null;
//   form.elements[2].value = null;
//   form.elements["gender"].value = null;
//   form.elements[5].value = null;
//   printData();
//   console.log(dbStudent);
// }

// const printData = () => {
//   let htmlElement = dbStudent.map((value, index) => {
//     return `<tr>
//         <td>${index + 1}</td>
//         <td>${value.name}</td>
//         <td>${value.age}</td>
//         <td>${value.email}</td>
//         <td>${value.gender}</td>
//         <td>${value.program}</td>
//         <td><button type="button" onclick="deleteData(${index})">Delete</button></td>
//       </tr>`
//   })
//   document.getElementById("list-data").innerHTML = htmlElement.join("");
// }