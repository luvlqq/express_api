import {BaseController} from "../common/base.controller";
import {LoggerService} from "../logger/logger.service";
import {NextFunction, Request, Response} from "express";

export class UsersController extends BaseController{
    constructor(
        logger: LoggerService
    ) {
        super(logger);
        this.bindRoutes([
            {path: '/register', method: 'post', func: this.register },
            {path: '/login', method: 'post', func: this.register },
        ])
    }

    login(req: Request, res: Response, next: NextFunction){
        this.ok(res,'login')
    }
    register(req: Request, res: Response, next: NextFunction){
        this.ok(res,'register')
    }

}