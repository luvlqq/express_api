import http from 'http';
import express from 'express';

const PORT = 8000;
const APP = express();


APP.get('/hello', (req,res)=> {
    res.send('hello!');
})

APP.listen(PORT, ()=> {
   console.log(`Server started: http://loclahost:${PORT}`)
});

