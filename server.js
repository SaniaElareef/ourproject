import express from "express";

import express from 'express';
import { create } from 'express-handlebars';

import dotenv from 'dotenv'
dotenv.config();

import mongosse from 'mongosse';

mongosse.connect(process.env.mongoConnectionUrl);

const app = express();

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './template');


app.listen(process.env.port,() =>{
	console.log('started application on http://localhost:'+process.env.port)
});