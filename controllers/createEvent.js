import Event from '../models/eventModel.js';
import User from '../models/UserModel.js';
export const CreateEvent = async (req, res) => {
    try {
        const { title, description, category, date } = req.body;

        const event = await Event.create({
            EventName: title,
            TypeOfEvent: category,
            Description: description,
            Date: date
        });

        res.status(200).json({
            success: true,
            event: event
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
}


export const GetEvent = async (req, res) => {
    try {
        const events = await Event.find({});
        if (!events) {
            returnres.status(400).json({
                success: false,
                message: 'No events found'
            })
        }
        res.status(200).json({
            success: true,
            events: events
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
}


export const GetParticularEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(400).json({
                success: false,
                message: 'Event not found'
            });
        }
        res.status(200).json({
            success: true,
            event: event
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
}


export const GetAttendeesDetails = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id).populate('Attendees', 'Name Email');
        if (!event) {
            return res.status(400).json({
                success: false,
                message: 'User not found'
            });
        }
        res.status(200).json({
            success: true,
            user: event.Attendees
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
}



export const RegisterForEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(400).json({
                success: false,
                message: 'Event not found'
            });
        }

        if (event.Attendees.includes(req.body.userId)) {
            return res.status(400).json({ message: "User already registered for this event" });
        }

        const user = await User.findById(req.body.userId);
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User not found'
            });
        }

        user.EventsAttends.push(event._id);
        event.Attendees.push(user._id);
        await event.save();
        await user.save();
        
        res.status(200).json({
            success: true,
            message: 'Registration successful'
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
}