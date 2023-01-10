import http from 'http';


const HOST = '127.0.0.1';
const PORT = 8000;

const SERVER = http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hi');
});

SERVER.listen(PORT, HOST, ()=>{
    console.log(`Server started ${HOST}:${PORT}`);
});