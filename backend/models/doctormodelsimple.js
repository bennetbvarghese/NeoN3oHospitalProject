import mongoose from "mongoose";
const doctorSchemaSimple = new mongoose.Schema(   {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true }, 
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number },
    department: { type: String },
},
{ timestamps: true }
);

const DoctorSimple = mongoose.model('DoctorSimple', doctorSchemaSimple);
export default DoctorSimple;