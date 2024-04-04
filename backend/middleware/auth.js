import jwt from 'jsonwebtoken';
import ErrorHandler from '../authutils/error.js';
import {catchAsyncErrors} from '../authutils/catchAsyncErrors.js';
import Users from '../models/usermodel.js'; 
export const isPatientAuthenticated = catchAsyncErrors(
    async (req, res, next) => {
      const token = req.cookies.patientToken;
      if (!token) {
        return next(new ErrorHandler("User is not authenticated!", 400));
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await Users.findById(decoded.id);
      //console.log(decoded)
      if (req.user.role !== "patient") {
        return next(
          new ErrorHandler(`${req.user.role} not authorized for this resource!`, 403)
        );
      }
      next();
    }
  );
  export const isAdminAuthenticated = catchAsyncErrors(
    async (req, res, next) => {
      const token = req.cookies.adminToken;
      if (!token) {
        return next(
          new ErrorHandler("Dashboard User is not authenticated!", 400)
        );
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await Users.findById(decoded.id);
      if (req.user.role !== "admin") {
        return next(
          new ErrorHandler(`${req.user.role} not authorized for this resource!`, 403)
        );
      }
      next();
    }
  );