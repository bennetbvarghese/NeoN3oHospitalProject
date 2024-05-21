import express from 'express';
import {postAppointment} from '../controllers/appointmentcontroller.js';
import {isAdminAuthenticated,isPatientAuthenticated} from '../middleware/auth.js';
const router = express.Router();
router.post("/post" ,postAppointment);


export default router;