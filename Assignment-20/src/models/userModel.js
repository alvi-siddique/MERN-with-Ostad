const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const deleteUserAssociations = require('../middleware/userMiddleware');
const {Schema, model} = mongoose;

const userSchema = new Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required: true,
        minLength : [6, "Minimum lenght of 6 Character"],
        set : (v) => {
            return bcryptjs.hashSync(v, bcryptjs.genSaltSync(10))
         },
    },
    address : {
        type : String,
    },
    phone : {
        type : String,
    }
},
{ timestamps: true, versionKey: false }
)


userSchema.pre('remove', deleteUserAssociations);

const User = model("User", userSchema);

module.exports = User;