import { catchAsyncErrors } from "../authutils/catchAsyncErrors.js";
import ErrorHandler from "../authutils/error.js";
import { Message } from "../models/messagemodel.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { firstname, lastname, email, phone, message } = req.body;
  if (!firstname || !lastname || !email || !phone || !message) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }
  await Message.create({ firstname, lastname, email, phone, message });
  res.status(200).json({
    success: true,
    message: "Message Sent!",
  });
});

export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});
