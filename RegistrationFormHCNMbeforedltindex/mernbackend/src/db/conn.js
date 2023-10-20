const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/stuReg" ,{  //stuReg database name
    //for deplication warning not come so use
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {     //copy from copy connection string connect method return promise that means return some value that means get value
    console.log('connection successfully');
}).catch((e) => {
    console.log('no connection');
})  