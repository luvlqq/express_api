import http from 'http';
import express from 'express';

const PORT = 8000;
const APP = express();


APP.all('/hello', (req, res, next) => {
    console.log('all');
    next();
});

const CALLBACK = (req, res, next) => {
    console.log('Call back');
    next();
}

APP.route('/user')
    .get('/hello', (req, res) => {
        res.send('hello!');
    })
    .post('/hello',(req,res) => {
        res.send('hi post')
    })

APP.listen(PORT, () => {
    console.log(`Server started: http://loclahost:${PORT}`)
});

