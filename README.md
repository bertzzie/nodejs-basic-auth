# Langkah Awal Pengembangan

HTTP Basic Authentication akan menggunakan data file [htpasswd](http://httpd.apache.org/docs/2.4/programs/htpasswd.html) sebagai format penyimpanan username dan password sederhana. Karenanya, sebelum mengembangkan sistem, kita terlebih dahulu harus memiliki perangakt lunak untuk menangani file htpasswd.

Untuk instalasi sistem htpasswd gunakan perintah berikut untuk sistem Linux / Mac:

    $ sudo npm install -g htpasswd

untuk sistem Windows hilangkan "sudo":

    $ npm install -g htpasswd

Pembuatan pengguna baru dapat dilakukan dengan menggunakan perintah `htpasswd` seperti berikut:

    $ htpasswd -bc htpasswd username password

sintaks dari perintah di atas yaitu:

    $ htpasswd -bc <nama-file> <username> <password>

`<nama-file>`, `<username>`, dan `<password>` dapat diganti sesuai dengan kebutuhan. Sesuai dengan perintah sebelumnya, setelah dijalankan kita akan mendapatkan file `htpasswd` dengan isi:

    username:$apr1$7.4.YDdY$CIN4bHyQC1vbUDW9oLkBV/

yang berisi username (`username`) dan password (`$apr1$7.4.YDdY$CIN4bHyQC1vbUDW9oLkBV/`) yang terenkripsi.

Selanjutnya, kita akan memerlukan modul [http-auth](https://www.npmjs.com/package/http-auth) untuk mendukung autentikasi dasar HTTP, dan [cookies](https://www.npmjs.com/package/cookies) untuk membuat dan mengakses HTTP Cookies. Informasi kebutuhan telah dimasukkan ke `package.json`, maka kita hanya perlu menjalankan perintah:

    $ npm install 

untuk mendapatkan daftar kebutuhan.
