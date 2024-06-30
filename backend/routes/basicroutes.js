import  express  from 'express';
import { getAllDoctors ,addDoctor} from "../controllers/doctorcontroller.js";

const router = express.Router();
router.get("/doctors",getAllDoctors)
router.post("/addDoctor",addDoctor)


export default router;