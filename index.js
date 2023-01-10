import express from 'express';
import {userRouter} from "./users/users.js";
const PORT = 8000;
const APP = express();

APP.get('/hello', (req, res) => {
    // res.send('hello!');
    res.end();
});

APP.use('/users', userRouter)

APP.listen(PORT, () => {
    console.log(`Server started: http://loclahost:${PORT}`)
});

