import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: Number },
    photo: { type: String,
             default:"" },
    role: {
      type: String,
      enum: ["patient", "admin"],
      default: "patient",
    },
    gender: { type: String, enum: ["Male", "Female", "other"] },
    bloodType: { type: String },
    appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;