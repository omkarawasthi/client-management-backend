import mongoose from "mongoose";


const eventSchema = new mongoose.Schema({
    EventName: {
        type: String,
        required: true,
    },
    TypeOfEvent: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Attendees:[{
        type: mongoose.Schema.Types.ObjectId,
		ref: "User",
    }],
    Date:{
        type:Date, 
        default: Date.now, 
    }
});


const Event = mongoose.model('Event',eventSchema);

export default Event;