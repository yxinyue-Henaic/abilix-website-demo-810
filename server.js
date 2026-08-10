const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml" };

http.createServer((req, res) => {
  const clean = decodeURIComponent(req.url.split("?")[0]);
  let file = path.join(root, clean === "/" ? "index.html" : clean);
  if (!file.startsWith(root)) return res.writeHead(403).end("Forbidden");
  fs.readFile(file, (error, data) => {
    if (error) return res.writeHead(404).end("Not found");
    res.writeHead(200, { "Content-Type": `${types[path.extname(file).toLowerCase()] || "application/octet-stream"}; charset=utf-8` });
    res.end(data);
  });
}).listen(4173, () => console.log("Abilix demo: http://localhost:4173"));
