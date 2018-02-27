
import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let app = express();

/*mongoose.connect('mongodb://localhost/UserData');
mongoose.Promise = global.Promise;*/

app.use(webpackMiddleware(webpack(webpackConfig)));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

const router = require('../routes/api');
app.use('/api', router);


app.get('/*' , (req,res) => {
    res.sendFile(path.join(__dirname , './index.html'));
});

app.listen(process.env.PORT || 2000, () => console.log("Running on localhost 2000"));