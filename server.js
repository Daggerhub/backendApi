const express = require('express');
const dotenv = require('dotenv');
const bootcamp = require('./routes/bootcamps');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

const bootcamps = require('./routes/bootcamps');

//Body Parser

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});