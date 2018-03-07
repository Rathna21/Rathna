
import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//import users from './routes/users';

let app = express();



// mongoose.connect('mongodb://127.0.0.1:27017/UserData');
mongoose.connect('mongodb://root:root@ds235328.mlab.com:35328/networkdata');
mongoose.Promise = global.Promise;

app.use(webpackMiddleware(webpack(webpackConfig)));

//app.use('/api/users', users);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

const router = require('../routes/api');
app.use('/api', router);


app.get('/*' , (req,res) => {
    res.sendFile(path.join(__dirname , './index.html'));
});

app.listen(process.env.port || 2000, () => console.log("Running on localhost 2000"));