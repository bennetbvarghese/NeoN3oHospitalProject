import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authroute.js';
import appointmentRouter from './routes/appointmentroute.js';
import basicRouter from './routes/basicroutes.js';
import messagerouter from './routes/messageroute.js';
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
app.use(bodyParser.json());

app.listen(port, () => {
    console.log('Server is running '+port+'...')
})

app.use('/backend/auth',authRouter);
app.use('/backend/appointment',appointmentRouter);
app.use('/backend/basic',basicRouter);
app.use('/backend/message',messagerouter);
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