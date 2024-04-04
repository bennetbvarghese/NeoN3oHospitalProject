import User from '../models/usermodel.js';
import Doctor from '../models/doctormodel.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import ErrorHandler from '../authutils/error.js';
import { cookiee } from '../authutils/verifytoken.js';

//Users
export const signup = async (req, res, next) => {
    const { email, password , name,phone,photo,role,gender,bloodType,appointments } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if(existingUser){
        return res.status(400).json('Username already exists!');
      }
      const hashedPassword = bcryptjs.hashSync(password, 10);
      const newUser = new User({ email, password: hashedPassword ,name, phone,photo,role,gender,bloodType,appointments });
      await newUser.save();
      res.status(201).json('User created successfully!');
      res.redirect('/signin');
      console.log(newUser);
    } catch (error) {
      res.status(500).json('Internal Server Error');
      next(error);
    }
  };
  export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) return next(new ErrorHandler('User not found!',400));
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) return next(new ErrorHandler(401, 'Wrong credentials!'));
      const token = jwt.sign({ id: validUser._id}, process.env.JWT_SECRET,{expiresIn: '30d'});
      const { password: pass, ...rest } = validUser._doc;
      cookiee(validUser,'Login Successful',201,res,token);
      //res.cookie('access_token', token, { httpOnly: true }).status(200).json({message:"Login Successful",rest,token});
      //res.status(200).json({message:"Login Successful",rest,token});
    } catch (error) {
      next(error);
      res.status(500).json('Internal Server Error');
    }
  };
//Doctors
// export const register = async (req, res, next) => {
//   const { name, email, password } = req.body;
//   try {
//     const existingUser = await Doctor.findOne({ email });
//     if(existingUser){
//       return res.status(400).json('Username already exists!');
//     }
//     const hashedPassword = bcryptjs.hashSync(password, 10);
//     const newUser = new Doctor({ name, email, password: hashedPassword });
//     await newUser.save();
//     res.status(201).json('User created successfully!');
//     console.log( newUser);
//   } catch (error) {
//     res.status(500).json('Internal Server Error');
//     next(error);
//   }
// };
// export const login = async (req, res, next) => {
//   const { email, password } = req.body;
//   try {
//     const validUser = await Doctor.findOne({ email });
//     if (!validUser) return next(ErrorHandler(404, 'User not found!'));
//     const validPassword = bcryptjs.compareSync(password, validUser.password);
//     if (!validPassword) return next(ErrorHandler(401, 'Wrong credentials!'));
//     const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
//     const { password: pass, ...rest } = validUser._doc;
//     //res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
//     //res.status(200).json('Login Successful');
//     res.status(200).json({message:"Login Successful",rest,token});
//   } catch (error) {
//     next(error);
//     res.status(500).json('Internal Server Error');
//   }
// };