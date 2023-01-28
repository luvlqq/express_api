import express, {Request, Response, NextFunction} from 'express';
import {userRouter} from "./users/users";
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

APP.use((err: Error, req: Request, res: Response, next: NextFunction)=> {
    console.log(err.message);
    res.status(500).send(err.message);
})

APP.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
});

