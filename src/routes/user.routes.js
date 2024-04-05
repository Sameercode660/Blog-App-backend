import { Router } from "express";
import { signUp, logIn } from "../controllers/user.controller.js";
import { fetchBLog, myBlog, postBLog } from "../controllers/blog.contoller.js";

const userRouter = Router()

userRouter.route('/sign-up').post(signUp)
userRouter.route('/sign-in').post(logIn)
userRouter.route('/post-blog').post(postBLog)
userRouter.route('/get-blog').get(fetchBLog)
userRouter.route('/my-blog').post(myBlog)

export {
    userRouter
}
