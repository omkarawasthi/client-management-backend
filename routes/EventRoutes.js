import express from 'express';
import {CreateEvent, GetEvent, GetParticularEvent,GetAttendeesDetails,RegisterForEvent, DeleteEvent,UpdateEvent } from '../controllers/createEvent.js';

const router = express.Router();


router.post('/create-event', CreateEvent);
router.get('/get-events', GetEvent);
router.get('/get-event/:id', GetParticularEvent);
router.get('/events/attendees/:id', GetAttendeesDetails);
router.post('/register-events/:id', RegisterForEvent);
router.delete('/delete-event/:id', DeleteEvent);
router.put('/update-event/:eventId', UpdateEvent);

export default router;