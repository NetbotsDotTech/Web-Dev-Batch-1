import express from 'express'
import register from '../controller/register.controller.js'
import Login from '../controller/login.controller.js'

const router=express.Router()

router.post('/register',register)
router.post('/login',Login)

export default router