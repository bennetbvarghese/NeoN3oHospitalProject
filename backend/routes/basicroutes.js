import  express  from 'express';
import { getAllDoctors } from "../controllers/doctorcontroller.js";

const router = express.Router();
router.get("/doctors",getAllDoctors)

export default router;