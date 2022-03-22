/////////////////////////////// LOOP STATEMENT ////////////////////////////////////////
// LOOP : perulangan

/**
 * A. WHILE LOOP : digunakan ketika akhir perulangan nya tidak pasti
 * 
 * 
 * */


// example :
let nilai = 10;

while (nilai > 0) {
  //console.log("Angka :", nilai);
  nilai--;
}

/**
 * B. DO...WHILE LOOP
 */

let count = 1;
do {
  //console.log(`Bus No. ${count}`);
  count++;
} while (count <= 10);

/**
 * C. FOR LOOP
 * 
 */

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    //console.log(`Kereta No. ${i} genap`);
  } else {
    //console.log(`Kereta No. ${i} ganjil`);
  }
}

for (let b = 1; b <= 30; b++) {
  if (b % 3 == 0 && b % 5 == 0) {
    console.log(`BizzBuzz ==> ${b}`);
  } else if (b % 3 == 0) {
    console.log(`Bizz ==> ${b}`);
  } else if (b % 5 == 0) {
    console.log(`Buzz ==> ${b}`)
  } else {

  }

}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi, all my name is ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name, age, employer) {
    super(name, age);  // NOTE : super must call before accessing (this)
    this.employer = employer;
  }

  greeting() {
    super.greet();  // this is how we call
    console.log(`I'm working at ${this.employer}`);
  }
}

let Steve = new Employee('Xman', 25, 'Skynet');
Steve;
Steve.greeting();