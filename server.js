
import express from 'express';
import { create } from 'express-handlebars';

import dotenv from 'dotenv'
dotenv.config();

import mongoose from 'mongoose';

mongoose.connect(process.env.mongoConnectionUrl);



import subjectsRouter from './routes/subjects.js';
import departmentsRouter from './routes/departments.js';


const app = express();

app.use(express.urlencoded({ extended: true }));

const hbs = create({ /* config */ });
// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './template');

app.use('/subjects', subjectsRouter);
app.use('/departments', departmentsRouter);


app.listen(process.env.port,() =>{
	console.log('started application on http://localhost:'+process.env.port)
});