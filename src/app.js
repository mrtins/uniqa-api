// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import logger from 'morgan'
// import httpStatus from 'http-status';

// import APIError from './helpers/APIError';
// import router from './router';
const router = require('./router');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

// app.use((req, res, next) => {
//   const err = new APIError('API not found', httpStatus.NOT_FOUND);
//   return next(err);
// });

// export default app;
module.exports = app;