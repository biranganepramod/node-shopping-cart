const dotenv = require('dotenv');
const app = require('./src/app');
const mongoConnect = require('./src/connect/mongoConnect');

dotenv.config({path: './src/config/config.env'});
mongoConnect(app);
