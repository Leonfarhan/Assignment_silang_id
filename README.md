# 🚀 Fullstack **Silang ID** – Farhan Alwahid

Aplikasi ini merupakan implementasi arsitektur **Fullstack** dengan *backend* menggunakan **Laravel** untuk RESTful API serta **ReactJS** sebagai *frontend*. Fungsionalitas utama mencakup autentikasi dan manajemen data pengguna.

---

## 🧰 Teknologi yang Digunakan

### 🔹 Frontend

* ⚛️ [React](https://reactjs.org/)
* 🎨 [Tailwind CSS](https://tailwindcss.com/)
* 📡 [Axios](https://axios-http.com/)

### 🔸 Backend

* 🧬 [Laravel 12](https://laravel.com/)
* 🐘 PHP 8.2+
* 📦 Composer
* 📁 NPM

---

## 📋 Prasyarat Instalasi

Sebelum menjalankan aplikasi, pastikan Anda telah menginstal:

* 🟢 **Node.js** `v18+`
* 📦 **NPM** (biasanya sudah termasuk dengan Node.js)
* 🐘 **PHP** `v8.2+`
* 📥 **Composer**
* 🗃️ **Database** (MySQL / PostgreSQL / SQLite sesuai konfigurasi)

> ⚠️ **Catatan:**
> Untuk instruksi lebih lengkap tentang instalasi dan cara menjalankan aplikasi, silakan buka file:
> `Cara_instalasi_dan_menjalankan_aplikasi.docx`

---

## 🔐 API Endpoints

Berikut adalah endpoint utama yang disediakan oleh backend:

### 🔑 **Autentikasi**

| Method | Endpoint     | Deskripsi                                |
| ------ | ------------ | ---------------------------------------- |
| POST   | `/api/login` | Login pengguna & mendapatkan token akses |

### 👤 **Manajemen Pengguna** *(Membutuhkan Autentikasi Token)*

| Method | Endpoint          | Deskripsi                                   |
| ------ | ----------------- | ------------------------------------------- |
| GET    | `/api/user`       | Mendapatkan data pengguna yang sedang login |
| GET    | `/api/users`      | Mendapatkan daftar semua pengguna           |
| POST   | `/api/users`      | Membuat pengguna baru                       |
| GET    | `/api/users/{id}` | Mendapatkan detail pengguna berdasarkan ID  |
| DELETE | `/api/users/{id}` | Menghapus pengguna berdasarkan ID           |

---

Semua endpoint menggunakan format JSON dan mendukung autentikasi berbasis token (Bearer Token) untuk akses yang aman.