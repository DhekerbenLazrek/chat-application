const { Router } = require('express');
const  events = require('../models/Sallesfetes');

const router = Router();

router.post('/create', async (req,res)=> {
    console.log (req.body)
    const { title, image, description, youtubeLink,dateevents,price } = req.body;
        let event = {};
        event.title = req.body.title;
        event.image = req.body.image;
        event.description = req.body.description;
        event.youtubeLink = req.body.youtubeLink;
        event.dateevents = req.body.dateevents;
        event.price = req.body.price;
        console.log(events.title)
        let eventModel = new events(event);
        await eventModel.save();
        res.json(eventModel);
        
    
 });
//  ------------------------- get all events-----------------------
 router.get('/allevents', async(req, res) => {
    try {
        const event = await events.find();
        if (!event) throw new Error('No events to display Err !');
        const sorted = event.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// ----------get one event--------------
router.get("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const oneEvent = await events.findById(id);
        if (!oneEvent) throw new Error("No Events to display Err !");
        res.status(200).json(oneEvent);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//------------ delete an event ------------------
router.delete('/:id', async (req, res) =>{
    try{
        const { id } = req.params
        const deleteEvent = await events.findByIdAndDelete(id);
        if(!deleteEvent) throw new Error('event deletion not done !');
        res.status(200).json(deleteEvent);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});
 
module.exports = router;