const test=require('node:test'),assert=require('node:assert/strict'),http=require('node:http');
test('local preview serves assets but rejects traversal, git files and malformed paths',async()=>{
 const server=require('../server.js');await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const get=path=>new Promise((resolve,reject)=>{http.get({hostname:'127.0.0.1',port:server.address().port,path},r=>{r.resume();r.on('end',()=>resolve({code:r.statusCode,type:r.headers['content-type']}));}).on('error',reject);});
 try{assert.equal((await get('/')).code,200);assert.equal((await get('/vendor/NotoSerifKR.woff2')).type,'font/woff2');for(const p of ['/../server.js','/%2e%2e/server.js','/.git/config','/.GIT/config','/node_modules/playwright/package.json'])assert.equal((await get(p)).code,403,p);for(const p of ['/%bad%','/%00'])assert.equal((await get(p)).code,400);assert.equal((await get('/missing-test-asset.json')).code,404);}finally{await new Promise(resolve=>server.close(resolve));}
});
