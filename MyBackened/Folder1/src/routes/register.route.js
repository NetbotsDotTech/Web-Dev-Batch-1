import express from 'express'
import register from "../controllers/register.controller.js";
import Login from '../controllers/login.controller.js';

const router=express.Router()

router.post('/register',register)
router.post('/login',Login)


export default router