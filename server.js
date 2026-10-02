/**
 * Zero-dependency local development server
 * Run: node server.js
 * Access: http://localhost:3000
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.md': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  let reqUrl;
  try{reqUrl=decodeURIComponent(req.url.split('?')[0]);}catch{res.writeHead(400);res.end('400 Bad Request');return;}
  if(!reqUrl.startsWith('/')||reqUrl.includes('\0')){res.writeHead(400);res.end('400 Bad Request');return;}
  if (reqUrl === '/') reqUrl = '/index.html';

  const filePath = path.resolve(__dirname, '.'+reqUrl);
  if(!filePath.startsWith(__dirname+path.sep)||reqUrl.split(/[\\/]/).some(part=>['.git','node_modules'].includes(part.toLowerCase())||part.toLowerCase().startsWith('.env'))){res.writeHead(403);res.end('403 Forbidden');return;}
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`500 Internal Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

if(require.main===module)server.listen(PORT, '127.0.0.1', () => {
  console.log(`[Spiritual Turkish] Server running at http://localhost:${PORT}/`);
  console.log(`Open http://localhost:${PORT}/ in your browser to start learning!`);
});
module.exports=server;
