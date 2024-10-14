import  express  from "express" 

import { getAllUsers, getUser, Login, Register } from "../controllers/user.controller.js";
const router = express.Router();




router.post('/register',Register );
router.post('/login',Login );
router.get('/', getAllUsers)
router.get('/:id', getUser)
//http://localhost:8000/api/user/register

export default router;