import express from 'express'
import register from '../controllers/user.controller.js'
import student from '../controllers/student.controller.js'
import Login from '../controllers/login.controller.js'

const router=express.Router()

router.post('/register',register)
router.post('/student',student)
router.post('/login',Login)

export default router