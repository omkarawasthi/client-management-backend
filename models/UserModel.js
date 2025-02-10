import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    EventsAttends:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
    }],
    role:{
        type:String,
        enum:['user','admin'],
        required:true,
    }
});

const User = mongoose.model('User',userSchema);

export default User;