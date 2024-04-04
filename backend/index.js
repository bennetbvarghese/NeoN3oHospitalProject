import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authroute.js';
//import userRouter from './routes/userroute.js';



dotenv.config();

const port = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO).then(()=> {
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
})

const app = express()
app.use(cors());
app.use(express.json())

app.listen(port, () => {
    console.log('Server is running '+port+'...')
})

app.use('/backend/auth',authRouter);
// app.use('/backend/user',userRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

// app.use((err, req, res, next) => {
//     const statusCode = err.statusCode || 500;
//     const message = err.message || 'Internal Server Error';
//     return res.status(statusCode).json({
//       success: false,
//       statusCode,
//       message,
//     });
//   });