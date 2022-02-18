const { Router } = require('express');
const  Salle = require('../models/Salle');

const router = Router();
   

//  ------------------------- get all salles-----------------------
router.get('/', async(req, res) => {
    try {
        const salle = await Salle.find();
        if (!salle) throw new Error('No events to display Err !');
        const sorted = salle.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
        
    }
});



//Save salle
// router.post('/api/Salles/create', (req, res) => {
//     console.log (req.body)
//     const sall = new Salle({
//         avatar: req.body.avatar,
//         title : req.body.title,
//         adresse : req.body.adresse,
//         prix : req.body.prix,
//         images : req.body.images,
//         description : req.body.description,
//         youtubeLink : req.body.youtubeLink,
        
//     });
//     sall.save((err,data) => {
//         res.status(200).json({ code:200, message:" Salle Added successfully",
//         create:data
//         })
//     })
        
//  });h
router.post("/create", async(req, res) => {
    const salle = req.body;
    let salleModel = new Salle (salle);
    await salleModel.save();
    console.log(salleModel)
    res.json(salleModel);
});


// ----------get one Salle--------------
router.get("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const oneSalle = await Salle.findById(id);
        if (!oneSalle) throw new Error("No Salles to display Err !");
        res.status(200).json(oneSalle);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//------------ delete a Salle ------------------
router.delete('/:id', async (req, res) =>{
    try{
        const { id } = req.params
        const deleteSalle = await Salle.findByIdAndDelete(id);
        if(!deleteSalle) throw new Error('salle deletion not done !');
        res.status(200).json(deleteSalle);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});
 
module.exports = router;