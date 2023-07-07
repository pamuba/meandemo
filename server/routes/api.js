const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Video = require('../models/video')


//.env .confg
const db = "mongodb://localhost:27017/videoplayer"

//connect to the database
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true }, 
    (err)=>{
    if(err){console.log('Error!:'+err)}
    else{console.log("Connected to MongoDB")}
})

//Get all videos
//localhost:3000/api/videos
router.get('/videos',(req, res)=>{
    console.log('Get request for all videos')
    Video.find({})
         .exec((err, videos)=>{
             if(err){Console.log('Error retrieving videos')}
             else{
                 res.json(videos)
             }
         })
})

//Get a video based on id
//localhost:3000/api/videos/id
router.get('/videos/:id', function(req, res){
    console.log("Get Request for a video");

    Video.findById(req.params.id)
         .exec(function(err, video){
             if(err){
                 console.log("Error retrieving videos");
             }
             else{
                 res.json(video);
             }
         });
});
//Insert a video
//localhost:3000/api/video
router.post('/video', function(req, res){
    console.log("Post a videos");

    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;

    newVideo.save(function(err, insertedVideo){
        if(err){
            console.log("Error Saving videos");
        }
        else{
            res.json(insertedVideo);
        }
    })
   
});

//Update video by id
//localhost:3000/api/video/id
router.put('/video/:id', function(req, res){
    console.log("Updating a videos");
    Video.findByIdAndUpdate(req.params.id,
        {
            $set:{title:req.body.title, url:req.body.url, description:req.body.description}
        },
        {
            new:true
        },
        function(err, updatedVideo){
            if(err){
                res.send("Error Updating a Video");
            }
            else{
                res.json(updatedVideo);
            }
        }
    )
});

//delete a video
//localhost:3000/api/video/id
router.delete('/video/:id', function(req, res){
    console.log("Deleting a videos");

    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        
        if(err){
            res.send("Error deleting a Video");
        }
        else{
            res.json(deletedVideo);
        }
    }
    )
});



//localhost:3000/api
router.get('/', function (req, res){
    res.send("API Routes")
})

module.exports = router