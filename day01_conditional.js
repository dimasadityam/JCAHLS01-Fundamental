//////////////////////////////////// CONDITIONAL STATEMENT //////////////////////////////////////////
/**
* Aturan :
* 1. Dia membutuhka nilai Boolean
*
* Jenis :
* 1. IF STATEMENT : untuk 1 kondisi
* 2. IF…ELSE STATEMENT : untuk 2 kondisi
* 3. IF…ELSE IF…ELSE STATEMENT : untuk >= 3 kondisi
* 3. SWITCH…CASE STATEMENT : untuk memastikan nilai dengan case yang ditentukan
*/

// 1. IF STATEMENT
let nama = "Leonardo";
let usia = "18";
let email = "leo@mail.com";
/**
* Aturan penulisan IF STATEMENT :
* if (condition) {
*         // task
* }
* note :
* - condition : kondisi yang diinginkan, bernilai BOOLEAN (COMPARISON / LOGICAL OPERATOR / TRUTHLY / FALSY)
* - task : apa yang ingin dijalankan ketika condition terpenuhi
*/


// Example Case : memverifikasi usia pendaftarn pembuatan SIM yang harus minimal 17 Tahun
if (usia >= 17) {
  console.log("Verifikasi usia berhasil", nama); // cara 1
  console.log(`Verifikasi usia ${nama} berhasil, periksa email ${email} anda`); // cara 2 yang sering digunakan
}

// 2. IF ELSE STATEMENT
/**
* Aturan penulisan IF STATEMENT :
* if (condition) {
*       // task
* } else {
*       // task
* }
* note :
* - condition : kondisi yang diinginkan, bernilai BOOLEAN (COMPARISON / LOGICAL OPERATOR / TRUTHLY / FALSY)
* - task : apa yang ingin dijalankan ketika condition terpenuhi
*/

if (usia >= 17) {
  // task
  console.log(`Verifikasi usia ${nama} berhasil, periksa email ${email} anda`); // cara 2 yang sering digunakan
} else {
  // task
  console.log(`Verifikasi usia ${nama} gagal`); // cara 2 yang sering digunakan
}




// 3. IF ELSE IF ELSE STATEMENT
/**
* Aturan penulisan IF STATEMENT :
* if (condition) {
*       // task
* } else if (condition) {
*       // task
* } else {
        // task
}
* note :
* - condition : kondisi yang diinginkan, bernilai BOOLEAN (COMPARISON / LOGICAL OPERATOR / TRUTHLY / FALSY)
* - task : apa yang ingin dijalankan ketika condition terpenuhi
*/
let nilai = 94;

if (nilai >= 90) {
  console.log("Grade A", nilai)
} else if (nilai >= 80 && nilai <= 89) {
  console.log("Grade B", nilai)
} else if (nilai >= 70 && nilai < 80) {
  console.log("Grade C", nilai)
} else {
  Console.log("Grade D", nilai)
}





// 4. SWTICH CASE // kekurangan dari switch case akan memeriksa semua case sampe selesai, harus menggunakan BREAK agar berhenti memeriksa case apabila sudah ada case yang sesuai // biasanya switch case dilakukan untuk memeriksa sebuah nilai dan kita sudah tau casenya mau ngapain aja
let profesi = "Coder";
switch (profesi) {
  case "Coder":
    // task
    console.log("Saya suka bikin aplikasi");
    break;
  case "Dokter":
    console.log("Saya suka mengobati orang");
    break;
  case "Polisi":
    console.log("Saya suka menilang pelanggar aturan");
    break;
  default:
    console.log("Belum tau mau ngapain");
}

// Ternary operator : condition ? task : task // ternary operator sama saja dengan conditional statement bedanya hanya menggunakan ? dan :
// apabila condition nya berjalan maka akan menjalankan task setelah tanda tanya dan apabila tidak berjalan maka menjalankan task setelah titik dua

let validasi_usia = usia > 17 ? "usia cukup" : "usia tidak cukup";
console.log(validasi_usia);