import express from 'express';
import {postAppointment,getAllAppointments,updateAppointmentStatus,deleteAppointment} from '../controllers/appointmentcontroller.js';
import {isAdminAuthenticated,isPatientAuthenticated} from '../middleware/auth.js';
const router = express.Router();
router.post("/post" ,postAppointment);
router.get("/getall",getAllAppointments);
router.put("/update/:id",updateAppointmentStatus);
router.delete("/delete/:id",deleteAppointment);



export default router;