import "reflect-metadata";
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {createConnection} from 'typeorm';


import userRoutes from './routes/users.routes'

const puerto = process.env.PORT || 3000;

const app = express();
createConnection();



//midelware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use(userRoutes);


console.log(puerto)
app.listen(puerto)

console.log('escuchando')




