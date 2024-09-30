import express from 'express'
import { registerController } from "../controller/register.controller.js";

export const userRouter=express.Router();

userRouter.post('/register',registerController)