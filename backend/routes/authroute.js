import  express  from 'express';
import {signup,signin,patientsignout,register,adminsignout} from '../controllers/authcontroller.js';

const router = express.Router();

router.post("/signup",signup)
router.post("/signin",signin)
router.get("/patientsignout",patientsignout)
router.get("/adminsignout",adminsignout)
router.post("/register",register) //DoctorsRegister
// router.post("/login",login)


export default router;


