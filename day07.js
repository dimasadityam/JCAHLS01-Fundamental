// CLASS OBJECT at JAVASCRIPT
// Template yang diperuntukan untuk membuat data object
/**
 * class structure :
 * class className{
 *     constructor(argument1, argument2...){
 *          this.propertyName = argument1;
 *          this.propertyName = argument2;
 *      }
 *      
 *      method=()=>{
 *          // code
 *    }
 * }
 * 
 */

// cara membuat class
// disarankan dalam membuat class harus menggunakan huruf kapital di awal huruf
class Manusia {
  constructor(_name, _birth, _gender) {
    this.name = _name;
    this.birth = _birth;
    this.gender = _gender;
  }

  getAge = () => {
    let birthYear = parseInt(this.birth.split("-")[2])
    let date = new Date();
    return date.getFullYear() - birthYear
  }

  introduce = () => {
    return `My name is ${this.name}, I born at ${this.birth}, my age ${this.getAge()} years old`
  }
}

let dataPenduduk = [];

dataPenduduk.push(new Manusia("Renold", "12-11-1980", 20, "L")) //menjadi object ke array
dataPenduduk.push(new Manusia("Reva", "12-10-2000", 18, "P"))

console.log(dataPenduduk);
// console.log(dataPenduduk[0].introduce());
// console.log(dataPenduduk[1].introduce());
let list = dataPenduduk.map((value, index) => {
  return `${index + 1}.` + value.introduce()
})

console.log(list.join("\n"))

// class Inheritance / class pewarisan / class turunan dari class utama agar dapat digunakan oleh class turunan nya
// class Pekerjaan adalah class turunan karena melakukan extends dari class manusia
// membuat class utama dari data general nya dulu, secara general dimiliki oleh semua data, data spesifik tinggal di extends di turunan nya
// extends biasanya hanya dipanggil 1x biasanya, jarang sampe 2x turunan
class Pekerjaan extends Manusia {
  constructor(_name, _birth, _gender, _profesion, _salary) {
    super(_name, _birth, _gender) //super ==> menggunakan properti dari class utama
    this.profesion = _profesion;
    this.salary = _salary;
    this.age = this.getAge();
  }
}

let dbJob = [];

dbJob.push(new Pekerjaan("Arnold", "13-10-1985", "Male", "Chef", 30000000))
//console.log(dbJob.join(" "));

let jobDesc = {
  job: "Prepare Tools",
  getStatus: () => {
    return dbJob.join("/")
  }
}

console.log(jobDesc.getStatus());

