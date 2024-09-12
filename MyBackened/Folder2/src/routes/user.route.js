import express from 'express'
import register from '../controllers/user.controller.js'
import student from '../controllers/student.controller.js'

const router=express.Router()

router.post('/register',register)
router.post('/student',student)

export default router