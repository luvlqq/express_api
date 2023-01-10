import express from 'express';
import {userRouter} from "./users/users.js";
const PORT = 8000;
const APP = express();

APP.use((req, res, next) => {
    console.log('Time ', Date.now());
    next();
})

APP.get('/hello', (req, res) => {
    throw new Error('Error');
});

APP.use('/users', userRouter)

APP.use((err, req, res, next)=> {
    console.log(err.message);
    res.status(500).end(err.message);
})

APP.listen(PORT, () => {
    console.log(`Server started: http://loclahost:${PORT}`)
});

