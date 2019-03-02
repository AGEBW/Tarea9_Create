var mongoose = require('mongoose');
var schema= require('./schema');

mongoose.connect('mongodb://localhost:27017/test');
    
var User=mongoose.model('User2',schema,'users2');

var user1= new User({
    name: 'User 1',
    email:'user1@ittepic.edu.mx'
});

user1.save(function (error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("guardado usuario 1");
});