require('dotenv').config();

// import app from './src/app';
const app = require('./src/app')

app.listen(process.env.PORT || 3000, () => console.log('server up', process.env.PORT));
