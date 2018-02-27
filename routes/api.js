const express = require('express');
const router = express.Router();
const UserData = require('../model/userData');

router.get('/signup',function(req,res,next){
    /*UserData.find({email : req.query.email , password : req.query.password}).then(function(userData){
        res.send(userData);
    });*/
    res.send("success");
});

router.post('/signup',function(req,res,next){
    UserData.create(req.body).then(function(userData){
        res.send(userData);
    });
});

router.put('/signup/:id',function(req, res, next){
    res.send({type : "PUT" });
});

router.delete('/signup/:id',function(req, res, next){
    res.send({type : "DELETE"});
});
module.exports = router;