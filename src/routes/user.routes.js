import { Router } from "express";
import { signUp, logIn } from "../controllers/user.controller.js";
import {
  fetchBLog,
  getSingleBlog,
  myBlog,
  postBLog,
} from "../controllers/blog.contoller.js";
import { getLike, postLike } from "../controllers/like.controller.js";
import { getComment, postComment } from "../controllers/comment.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";

const userRouter = Router();

userRouter.route("/sign-up").post(signUp);
userRouter.route("/sign-in").post(logIn);
userRouter.route("/post-blog").post(
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  postBLog
);
userRouter.route("/get-blog").get(fetchBLog);
userRouter.route("/my-blog").post(myBlog);
userRouter.route("/post-like").post(postLike);
userRouter.route("/get-like").post(getLike);
userRouter.route("/post-comment").post(postComment);
userRouter.route("/get-comment").post(getComment);
userRouter.route("/get-single-blog").post(getSingleBlog);

export { userRouter };
