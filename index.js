var http    = require('http'),
    auth    = require('http-auth'),
    Cookies = require('cookies'),
    port    = process.env.port || 3000,
    host    = process.env.host || 'localhost';

var basic = auth.basic({
    realm: "Private Area",
    file: __dirname + "/htpasswd",
    msg401: "Username dan password salah" // isi respon jika auth. gagal
    contentType: "text/html", // Content type untuk respon jika auth. gagal
});

var server = http.createServer(basic, function (req, res) {
    var cookies = new Cookies(req, res);
    var headData = {
        "Content-Type": "text/html"
    };

    cookies.set("uname", req.user);

    res.writeHead(200, headData);
    res.write("Hello " + req.user);
    res.end();
});

server.listen(port, host);
