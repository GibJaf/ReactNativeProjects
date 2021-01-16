 const express = require('express');
 const mongoose = require('mongoose');
 const requireAuth = require('../middlewares/requireAuth');

 const Track = mongoose.model('Track');

 const router = express.Router();

 router.use(requireAuth);

 router.get('/tracks', async (req, res) => {
     const tracks = await Track.find({ userId: req.user._id});
     res.send(tracks);
 });

 router.post('/tracks', async (req, res) => {
     const { name, locations } =  req.body;

     if( !name || !locations) {
        return res.status(422).send({error: 'You must provide a name and locations'});
     }
     /* we don't need to check if name is a string 
        and locations is collection of points cuz mongoose will check that for us*/

     try{
        const track = new Track({name, locations, userId: req.user._id});
        await track.save();
        res.send(track);
     }catch(err){
        res.status(422).send({error: err.message});
     }
     
 })

 module.exports = router;