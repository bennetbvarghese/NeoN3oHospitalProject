import ErrorHandler from "../authutils/error.js";
import { catchAsyncErrors } from "../authutils/catchAsyncErrors.js";
import  {Appointment}  from "../models/appointmentSchema.js";
import  User  from "../models/usermodel.js";
import  Doctor  from "../models/doctormodel.js";
import DoctorSimple from "../models/doctormodelsimple.js";

export const postAppointment = catchAsyncErrors(async (req, res, next) => {
    const {
      firstName,
      lastName, 
      email,
      phone,
      nic,
      dob,
      gender,
      appointment_date,
      department,
      doctor_firstName,
      doctor_lastName,
      hasVisited,
      address,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !nic ||
      !dob ||
      !gender ||
      !appointment_date ||
      !department ||
      !doctor_firstName ||
      !doctor_lastName ||
      !address
    ) {
      return next(new ErrorHandler("Please Fill Full Form!", 400));
    }
    const firstname = doctor_firstName;
    const isConflict = await DoctorSimple.find({
      firstname: firstname,
    //   lastName: doctor_lastName,
    //   role: "Doctor",
    //   doctorDepartment: department,
    });
    if (isConflict.length === 0) {
      return next(new ErrorHandler("Doctor not found", 404));
    }
  
    if (isConflict.length > 1) {
      return next(
        new ErrorHandler(
          "Doctors Conflict! Please Contact Through Email Or Phone!",
          400
        )
      );
    }
    const user = await User.findOne({name:firstName});
    console.log(user)
    const doctorId = isConflict[0]._id;
    const patientId = user._id;
    const appointment = await Appointment.create({
      firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      appointment_date,
      department,
      doctor: {
        firstName: doctor_firstName,
        lastName: doctor_lastName,
      },
      hasVisited,
      address,
      doctorId,
      patientId,
    });
    res.status(200).json({
      success: true,
      appointment,
      message: "Appointment Send!",
    });
  });
  