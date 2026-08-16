# Project Contribution

Panduan untuk menambahkan project baru ke website.

## 1. Struktur File

Setiap project memiliki **satu file MDX** di `content/projects` dan **satu folder gambar** di `public/projects`.

```text
content/
└── projects/
    ├── fortik.mdx
    ├── project-two.mdx
    └── project-three.mdx

public/
└── projects/
    ├── fortik/
    │   ├── thumbnail.webp
    │   ├── hero.webp
    │   ├── image-1.webp
    │   ├── image-2.webp
    │   ├── image-3webp
    │   ├── image-4.webp
    │   ├── image-5.webp
    │   ├── image-6.webp
    │   ├── image-7.webp
    │   ├── image-8.webp
    │   ├── image-9.webp
    │   └── image-10.webp
    │
    ├── project-two/
    │   └── ...
    │
    └── project-three/
        └── ...
```

Nama file MDX dan folder gambar harus sama.

Contoh:

```text
content/projects/fortik.mdx
public/projects/fortik/
```

---

## 2. Membuat File MDX

Buat file:

```text
content/projects/<nama-project>.mdx
```

Gunakan struktur berikut:

```mdx
---
title: "Nama Project"
description: "Deskripsi singkat mengenai project."
category: "Kategori Project"
services:
  - "web design"
  - "web development"
  - "ui/ux design"
url: "https://example.com/"

challenges:
  - title: "The Impact We Delivered"
    description: "Jelaskan dampak atau hasil yang diberikan project."

  - title: "The Challenge"
    description: "Jelaskan masalah atau tantangan yang dihadapi."

  - title: "How We Made It Happen"
    description: "Jelaskan pendekatan, proses desain, dan development."

  - title: "What We Achieved Together"
    description: "Jelaskan hasil akhir dan pencapaian project."
---

## "Testimonial"

Tulis testimonial atau kutipan dari client/project owner.

## Nama - Jabatan

Tulis nama dan jabatan pemberi testimonial.
```

---

## 3. Frontmatter

### `title`

Nama project.

```yaml
title: "fortik"
```

### `description`

Deskripsi singkat mengenai project.

```yaml
description: "FORTIK adalah Forum Teknologi Informasi dan Komunikasi..."
```

### `category`

Kategori utama project.

```yaml
category: "Content Management System (CMS)"
```

### `services`

Daftar layanan yang dikerjakan pada project.

```yaml
services:
  - "web design"
  - "web Development"
  - "ui/ux design"
  - "CMS development"
  - "admin dashboard"
```

### `url`

URL website project jika tersedia.

```yaml
url: "https://example.com/"
```

### `challenges`

Berisi empat bagian yang menjelaskan project:

```yaml
challenges:
  - title: "The Impact We Delivered"
    description: "..."

  - title: "The Challenge"
    description: "..."

  - title: "How We Made It Happen"
    description: "..."

  - title: "What We Achieved Together"
    description: "..."
```

Gunakan **empat bagian tersebut secara konsisten** pada setiap project.

---

## 4. Menambahkan Gambar

Setiap project memiliki folder gambar sendiri di:

```text
public/projects/<nama-project>/
```

Struktur gambar:

```text
public/
└── projects/
    └── nama-project/
        ├── thumbnail.webp
        ├── hero.webp
        ├── image-1.webp
        ├── image-2.webp
        ├── image-3.webp
        ├── image-4.webp
        ├── image-5.webp
        ├── image-6.webp
        ├── image-7.webp
        ├── image-8.webp
        ├── image-9.webp
        └── image-10.webp
```

### `thumbnail.webp`

Digunakan sebagai **thumbnail project** pada halaman daftar project.

File ini wajib tersedia untuk setiap project.

### `hero.webp`

Digunakan sebagai **hero image** pada halaman detail project.

File ini wajib tersedia untuk setiap project.

### `image-1.webp` — `image-10.webp`

Digunakan sebagai **gambar gallery/detail project**.

Jumlah gambar tidak harus selalu 10. Tambahkan sesuai kebutuhan project.

Contoh project dengan 4 gambar:

```text
public/
└── projects/
    └── fortik/
        ├── thumbnail.webp
        ├── hero.webp
        ├── image-1.webp
        ├── image-2.webp
        ├── image-3.webp
        └── image-4.webp
```


### Konvensi Penamaan

Gunakan nama file berikut secara konsisten:

```text
thumbnail.webp
hero.webp
image-1.webp
image-2.webp
image-3.webp
...
```

Gunakan format `.webp` dan hindari spasi atau nama file yang tidak konsisten.


## 5. Path Gambar

Karena gambar berada di dalam `public`, path yang digunakan di aplikasi **tidak menyertakan `public`**.

Contoh:

```text
/projects/fortik/01.webp
```

Bukan:

```text
/public/projects/fortik/01.webp
```

---

## 6. Penamaan

Gunakan lowercase dan hindari spasi.

**File MDX:**

```text
fortik.mdx
```

**Folder:**

```text
fortik/
```

**Gambar:**

```text
thumbnail.webp
hero.webp
image-1.webp
image-2.webp
image-3.webp
```

Hindari nama seperti:

```text
Fortik Website Final.webp
Screenshot (1).png
final-final-benar.webp
```

---

## 7. Contoh Project

Contoh struktur project FORTIK:

```text
content/
└── projects/
    └── fortik.mdx

public/
└── projects/
    └── fortik/
        ├── thumbnail.webp
        ├── hero.webp
        ├── image-1.webp
        ├── image-2.webp
        ├── image-3.webp
        └── image-4.webp
```

File `fortik.mdx` kemudian berisi frontmatter dan konten project sesuai schema yang telah ditentukan.

---

## 8. Checklist

Sebelum membuat Pull Request:

* [ ] Buat `<nama-project>.mdx` di `content/projects/`.
* [ ] Buat folder `<nama-project>/` di `public/projects/`.
* [ ] Lengkapi `title`.
* [ ] Lengkapi `description`.
* [ ] Tentukan `category`.
* [ ] Tambahkan `services`.
* [ ] Tambahkan `url` jika tersedia.
* [ ] Lengkapi empat bagian `challenges`.
* [ ] Tambahkan testimonial jika tersedia.
* [ ] Tambahkan `thumbnail.webp`.
* [ ] Tambahkan gambar project lainnya.
* [ ] Pastikan nama file dan folder konsisten.
* [ ] Pastikan semua gambar dapat ditampilkan.
* [ ] Jalankan project secara lokal.
* [ ] Pastikan project tampil dengan benar.
* [ ] Commit dan push perubahan.
* [ ] Buat Pull Request.
