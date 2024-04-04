import jwt from 'jsonwebtoken';
import Doctor from '../models/doctormodel.js';
import Users from '../models/usermodel.js'; 

// export const verifyToken = async (req, res, next) => {
//     const authToken = req.cookies.access_token;

//     if (!authToken) {
//         return res.status(401).json('No Token:Access Denied');
//         console.log(authToken);
//     }
//     try{
//         //verify token
//         const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
//         req.userId=decoded.id
//         req.role=decoded.role
//         console.log('Auth Token:', authToken,userId);
//         next();
//     }catch(err){
//         if (err.name =='TokenExpiredError' ){
//             return res.status(401).json('Token Expired');

//         }
//         return res.status(401).json('Invalid Token');

//     }
// };
export const cookiee = (validUser,message, statusCode, res,token) => {
    const cookieName = validUser.role === 'admin' ? 'adminToken' : 'patientToken';

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    })
    .json({
      success: true,
      message,
      validUser,
      token,
    });
  };
//Currently not used , But this is needed
export const restrict = (roles) => async (req, res, next) => {
    const userId=req.userId;
    console.log(userId);
    let user;

    const patient = await Users.findById(userId);
    const doctor = await Doctor.findById(userId);
    const admin = await Users.findById(userId);

    

    if(patient.role==='patient'){
        user=patient
        console.log(patient.role,doctor)
    }
    if (doctor){
        user=doctor
    }
    if (patient.role==='admin'){
        user=admin
    }   
    if(!roles.includes(user.role)){
        return res.status(401).json('You are not allowed to access this route');
    }
    next();
};