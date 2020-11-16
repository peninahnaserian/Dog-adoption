const router = require('express').Router();
const Kennels = require('../modules/kennels-module');
const Dogs = require('../modules/dogs-module');
const Breeds = require('../modules/breeds-module');
const Notifications = require('../modules/notification-module');

//get all kennels
router.get('/kennels',(req,res)=>{
    Kennels.find()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
         res.status(500).json({
             message:'Failed to get Kennels',
             error:err
         });
    });
});

//get kennel by id
router.get('/kennels/:id',(req,res) => {
    Kennels.findById(req.params.id)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json({
            message:'Failed to get Kennel',
            error:err
        });
    });
});

//get all dogs
router.get('/dogs',(req,res) => {
    Dogs.find()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json({
            message:'Failed to get Dogs',
            error:err
        });
    });
});

//get dog by id
router.get('/dogs/:id',(req,res)=> {
    Dogs.findById()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(error => {
        res.status(500).json({
            message:'Failed to get dog',
            error:err
        });
    });
});

//get all breeds
router.get('/breeds',(req,res) => {
    Breeds.find()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json({
            message:'Failed to get breeds',
            errror: err
        });
    });
});

//create notifications
router.post('/notifications',(req,res) => {
    const date_sent = Date.now();
    const notification = {...req.body, date_sent}
    Notifications.add(notification)
    .then(data =>{
        res.status(201).json(data);
    })
    .catch(err => {
        res.status(500).json({
            error: err,
            message: 'Unable to post notification please make sure to include your admin_id and dog_id'
        });
    })
})

module .exports = router;