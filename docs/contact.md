# Contact Form — Google Apps Script

Dokumentasi setup Google Apps Script sebagai endpoint contact form dan konfigurasi environment variable pada hosting.

## 1. Buat Google Spreadsheet

Buat Google Spreadsheet untuk menyimpan pesan contact form.

Gunakan header:

| Timestamp | Name | Email | Phone | Message |
| --------- | ---- | ----- | ----- | ------- |

Catat nama tab spreadsheet, misalnya:

```text
Sheet1
```

## 2. Buat Google Apps Script

Pada spreadsheet, buka:

**Extensions → Apps Script**

Hapus kode bawaan, kemudian masukkan:

```javascript
const SHEET_NAME = "Sheet1";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const phone = String(data.phone || "").trim();
    const message = String(data.message || "").trim();

    if (!name || !email || !phone || !message) {
      return jsonResponse({
        success: false,
        error: "Semua field wajib diisi.",
      });
    }

    if (name.length > 100) {
      return jsonResponse({
        success: false,
        error: "Nama terlalu panjang.",
      });
    }

    if (email.length > 200) {
      return jsonResponse({
        success: false,
        error: "Email terlalu panjang.",
      });
    }

    if (phone.length > 30) {
      return jsonResponse({
        success: false,
        error: "Nomor telepon terlalu panjang.",
      });
    }

    if (message.length > 5000) {
      return jsonResponse({
        success: false,
        error: "Pesan terlalu panjang.",
      });
    }

    const sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName(SHEET_NAME);

    if (!sheet) {
      return jsonResponse({
        success: false,
        error: "Sheet tidak ditemukan.",
      });
    }

    sheet.appendRow([
      new Date(),
      name,
      email,
      phone,
      message,
    ]);

    return jsonResponse({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return jsonResponse({
      success: false,
      error: "Gagal menyimpan pesan.",
    });
  }
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Jika nama tab bukan `Sheet1`, ubah:

```javascript
const SHEET_NAME = "Sheet1";
```

sesuai nama tab spreadsheet.

## 3. Deploy Google Apps Script

Di Apps Script pilih:

**Deploy → New deployment**

Pilih:

```text
Type: Web app
Execute as: Me
Who has access: Anyone
```

Kemudian lakukan **Authorize access** jika diminta.

Setelah berhasil deploy, salin **Web App URL** yang berakhiran:

```text
/exec
```

Contoh:

```text
https://script.google.com/macros/s/XXXXXXXXXXXX/exec
```

> Spreadsheet tidak perlu dibuat public. `Anyone` hanya diperlukan agar contact form dapat mengirim request ke Web App.

## 4. Environment Variable Hosting

Simpan Web App URL sebagai environment variable pada platform hosting.

### Vercel

Buka:

**Project → Settings → Environment Variables**

Tambahkan:

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXXXXXXXXXX/exec
```

Aktifkan untuk environment yang diperlukan, terutama **Production**.

Setelah menambahkan atau mengubah variable, lakukan **redeploy**.

## Checklist

* [ ] Buat Google Spreadsheet.
* [ ] Buat header `Timestamp`, `Name`, `Email`, `Phone`, `Message`.
* [ ] Buat Apps Script dari **Extensions → Apps Script**.
* [ ] Sesuaikan `SHEET_NAME` jika diperlukan.
* [ ] Deploy sebagai **Web app**.
* [ ] Set **Execute as: Me**.
* [ ] Set **Who has access: Anyone**.
* [ ] Salin Web App URL `/exec`.
* [ ] Tambahkan URL sebagai `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` di hosting.
* [ ] Redeploy aplikasi.
