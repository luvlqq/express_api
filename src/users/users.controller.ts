import {BaseController} from "../common/base.controller";
import {LoggerService} from "../logger/logger.service";
import {NextFunction, Request, Response} from "express";
import {HTTPError} from "../errors/http-error.class";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import {ILogger} from "../logger/loggerInterface";
import 'reflect-metadata';
import {IUserController} from "./users.controller.interface";

@injectable()
export class UsersController extends BaseController implements IUserController{
    constructor(
        @inject(TYPES.ILogger) private loggerService: ILogger
    ) {
        super(loggerService);
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