const express = require('express');
const session = require('express-session');

const router = express.Router();
const UserData = require('../model/userData');
const NetworkData = require('../model/networkData');

router.get('/signup',function(req,res,next){
    UserData.find({email : req.query.email , password : req.query.password}).then(function(userData){
        res.send(userData);
    });

});

router.get('/register', function(req, res, next) {
    NetworkData.find({networkName : req.query.networkName}).then(function (data) {
        res.send(data);

    });
});

router.post('/signup',function(req,res,next){
    UserData.create(req.body).then(function(userData){
        res.send(userData);
    });
});

router.post('/register', function(req, res, next) {
    NetworkData.create(req.body).then(function (data) {
        res.send(data);
    });
});

router.put('/signup/:id',function(req, res, next){
    res.send({type : "PUT" });
});


router.put('/register/:id', function(req, res, next) {
    res.send( {type : 'PUT'} );
});

router.delete('/signup/:id',function(req, res, next){
    res.send({type : "DELETE"});
});

router.delete('/register/:id', function(req, res, next) {
    res.send( {type : 'DELETE'} );
});

module.exports = router;