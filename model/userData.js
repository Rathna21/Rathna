const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username : {
        type : String,
        required : [true , "Username is required"]
    },

    email :{
        type : String,
        required : [true , "Email is required"],
        unique : true
    },

    password :{
        type : String,
        required : true
    }
});

const UserData = mongoose.model("userData", UserSchema);

module.exports = UserData;