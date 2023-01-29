import {BaseController} from "../common/base.controller";
import {LoggerService} from "../logger/logger.service";
import {NextFunction, Request, Response} from "express";
import {HTTPError} from "../errors/http-error.class";

export class UsersController extends BaseController{
    constructor(
        logger: LoggerService
    ) {
        super(logger);
        this.bindRoutes([
            {path: '/register', method: 'post', func: this.register },
            {path: '/login', method: 'post', func: this.login },
        ])
    }


    login(req: Request, res: Response, next: NextFunction){
        next(new HTTPError(401,'Auth Error'));
    }

    register(req: Request, res: Response, next: NextFunction){
        this.ok(res,'register');
    }

}