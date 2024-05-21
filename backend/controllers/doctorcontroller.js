import DoctorSimple from "../models/doctormodelsimple.js";
export const getAllDoctors = (async (req, res, next) => {
    try{
    const doctors = await DoctorSimple.find({});
    res.status(200).json({
      success: true,
      doctors,
    });
    } catch (error) {
        res.status(500).json('Internal Server Error');
        next(error);
        }
  });