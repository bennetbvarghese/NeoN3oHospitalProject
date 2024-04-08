import  express  from 'express';
import {signup,signin,patientsignout} from '../controllers/authcontroller.js';

const router = express.Router();

router.post("/signup",signup)
router.post("/signin",signin)
router.get("/patientsignout",patientsignout)
// router.post("/register",register)
// router.post("/login",login)


export default router;


