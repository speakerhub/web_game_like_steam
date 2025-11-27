import { Request, Response, NextFunction } from "express";
const Authmiddleware = async (req:Request, res: Response, next:NextFunction) => {
    return next();
}

export default Authmiddleware;