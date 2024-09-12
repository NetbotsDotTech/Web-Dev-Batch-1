import express from 'express'
import patientController from '../controllers/patient.controller.js'

const router=express.Router()

router.post('/patient',patientController)

export default router