# Aplikasi Users

Aplikasi ini ditujukan untuk melihat data dari database, membuat user baru, dan mengirimkan email Sign-Up Notification kepada user yang baru didaftarkan.

## Cara Menjalankan Aplikasi

1. Copy isi file dari .env.example ke dalam file .env.

 ```powershell
   cp env.example .env
```

2. Isi kredensial database yang meliputi username, host, nama database, dan password database Anda (jika ada).

3. Pada folder /dumps ada file .sql yang bisa Anda import ke dalam database yang baru Anda buat untuk mendapatkan data dummy.

4. Isi variabel untuk Redis pada file .env yang meliputi Host dan Port Redis.

5. Pastikan Anda sudah menginstall docker di device anda (disarankan Docker Desktop).

6. Pada command line, run perintah berikut untuk menjalankan redis:

 ```powershell
   docker run -d --name redis -p 6379:6379 redis
```
7. Install package yang dibutuhkan oleh aplikasi Node.js dengan menjalankan perintah berikut di root directory project:

 ```powershell
   npm install
```

8. Jalankan aplikasi dengan run perintah berikut:

 ```powershell
   node index.js
```