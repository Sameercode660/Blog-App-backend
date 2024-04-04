import { Router } from "express";
import { signUp, logIn } from "../controllers/user.controller.js";

const userRouter = Router()

userRouter.route('/sign-up').post(signUp)
userRouter.route('/sign-in').post(logIn)

export {
    userRouter
}
