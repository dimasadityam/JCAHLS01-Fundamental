# Introduce Git and Github
## - Git
>Merupakan bagian dari SCM (Source Code Management) yang ada pada local storage/PC.

## - Gituhub
>Management program secara online. Sehingga, program/code yang kita miliki bisa di share secara umum/open-source.
---------------------------------------------------------------------------------
## - Bagian pada Git
1. Modified / Changes Session
   * Bagian dari Git untuk merecord perubahan yang dilakukan pada file didalam project.
   * Record perubahan, record penambahan file dan record pengurangan file.
2. Staged Session
   * Bagian dari Git untuk menyiapkan file apa saja yang akan kita simpan kedalam Git.
3. Commited Session
   * Bagian dari Git untuk menyimpan perubahan pada file project kita.
--------------------------------------------------------------------------------
## - Konfigurasi Git
Menghubungkan Git dengan Github :
- Konfigurasi username : git config --global user.name "username_github"
- Konfigurasi email : git config --global user.email "email_github"

>kita akan menyiapkan project untuk menggunakan Git
1. Melakukan inisialisasi Git / mengaktifkan Git pada project
   - git init | untracked warna hijau lambang U adalah file baru
2. Melihat status Git pada project
   - git status
3. Memindahkan ke staged session
   - git add nama_file : jika nama file spesifik
   - git add . : jika mengarahkan ke semua file
4. Menyimpan perubahan di commited session/kedalam Git
   - git commit -m "pesan apa saja yang sudah dirubah"
5. Melihat history commit :
   - git log
6. Menambahkan link Github
   - git remote add origin_name link_github
   - git remote -v : memeriksa link github repository yang terdaftar pada project
7. Konfigurasi branch utama
   - git branch -m nama_branch
8. Mengupload/menyimpan ke Github
   - git push -u origin_name nama_branch