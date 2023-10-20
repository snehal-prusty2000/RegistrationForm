const mongoose = require("mongoose");


//define a schema 
const employeeSchema = new mongoose.Schema({   //employeeSchema is the schemaname
    firstname: {
        type:String,
        required:true
    },
    lastname: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    phone: {
        type: Number,
        required:true,
        unique:true
    },
    Passward: {
        type: String,
        required:true
    },
    confirmPassward: {
        type: String,
        required:true
    }
})

// Now we need to create  a collection

const Register = new mongoose.model("Register", employeeSchema) ;   //Behind the scene it make registers here Register is the table name in moongose called collection
module.exports = Register; //export the register
