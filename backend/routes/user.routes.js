import  express  from "express" 

import { Register } from "../controllers/user.controller.js";
const router = express.Router();




router.post('/register',Register );

//http://localhost:8000/api/user/register

export default router;