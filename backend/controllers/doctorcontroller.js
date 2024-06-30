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
export const addDoctor = (async (req, res, next) => {
  const{ firstname,lastname,email,password,phone,department} = req.body;
    try {
        const doctor = await DoctorSimple.findOne({ email });
        if(doctor){
            return res.status(400).json({message:'Doctor already exists!'});
        }
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newDoctor = new DoctorSimple({ firstname,lastname, email, password: hashedPassword , phone,department });
        await newDoctor.save();
        res.status(201).json({message:'Doctor created successfully!'});
    } catch (error) {
        res.status(500).json('Internal Server Error');
        next(error);
    }
});