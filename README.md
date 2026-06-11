Vanta Supply - Product Catalog

Vanta Supply adalah aplikasi Product Catalog berbasis React, Vite, dan Axios. Aplikasi ini mengambil data produk dari Fake Store API dan menampilkan katalog produk dengan tampilan modern, responsif, serta interaktif.

Deskripsi Project

Project ini dibuat untuk memenuhi Tugas Praktikum 6 Pemrograman Web dengan topik Data Fetching menggunakan Axios. Aplikasi ini menampilkan daftar produk dari API, menyediakan fitur pencarian, filter kategori, sorting harga, filter rating, detail produk, serta simulasi add to cart.

Fitur Aplikasi
Menampilkan daftar produk dari Fake Store API
Mengambil data menggunakan Axios
Loading indicator saat data sedang dimuat
Error handling jika request API gagal
Filter produk berdasarkan kategori dari API
Search produk berdasarkan judul
Product detail modal
Responsive grid
Sorting harga dari termurah ke termahal
Sorting harga dari termahal ke termurah
Rating filter
Add to cart
Cart drawer
Mengatur jumlah produk di cart
Menghapus produk dari cart
Simulasi checkout dengan tombol Beli Sekarang
Toast notification
Teknologi yang Digunakan
React
Vite
Axios
CSS
Fake Store API
API yang Digunakan

Aplikasi ini menggunakan Fake Store API dengan endpoint berikut:

https://fakestoreapi.com/products
https://fakestoreapi.com/products/categories
https://fakestoreapi.com/products/category/{category}
Cara Menjalankan Aplikasi
Clone repository:
git clone [link-repository]
Masuk ke folder project:
cd [nama-folder-project]
Install dependencies:
npm install
Jalankan aplikasi:
npm run dev
Buka aplikasi di browser:
http://localhost:5173
Struktur Folder
src/
├── components/
│   ├── Header.jsx
│   ├── Toolbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductModal.jsx
│   ├── LoadingState.jsx
│   └── CartDrawer.jsx
├── App.jsx
├── App.css
└── main.jsx
Author

Nur Seto Hidayatulloh
24.11.6047
S1 IF03