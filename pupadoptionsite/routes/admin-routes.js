const router = require('express').Router();
const Admins = require('../modules/admin-module');
const Auth = require('../modules/auth-module');

//get admin
router.get('/:id',(req,res)=> {
    Admins.findById(req.params.id)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json({
            error: err,
            message: 'Unable to locate Admin'
        })
    })
});

//remove admin
router.delete('/:id',(req,res)=> {
    Admins.remove(req.params.id)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

//register
router.post('/register',(req,res)=> {
    const user = req.body
    if(!user.username && !user.password){
        res.status(401).json({
            message: 'Please provide a username and password for this user'
        })
    } else {
        Auth.register(user)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({
                message:'Failed to register',
                error: err
            });
        });
    }
});


//login
router.post('/login',(req,res)=> {
    const {username,password} = req.body;
    Auth.login(username)
    .then(user =>{
        if(user && bcrypt.compareSync(password, user.password)){
            const token = Auth.generateToken(user);
            res.status(200).json({
                message: `Welcome ${user.username}!,have a token ...`,
                token,
                id: user.id
            });
        }else {
            res.status(401).json({
                message: 'Invalid Credentials'
            });
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

//update admin info
router.put('/:id',(req,res)=>{
    const changes = req.body;
    Admins.updateAdmin(req.params.id, changes)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

//update kennel info
router.put('/kennels/:id',(req,res)=> {
    const changes = req.body;
    Admins.updateKennel(req.params.id,changes)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err =>{
        res.status(500).json(err);
    })
});

//add dog to kennel
router.post('/dogs',(req,res)=>{
    const dog = req.body;
    DOgs.add(dog)
    .then(data =>{
        res.status(200).json(data);
    })
    .catch(err =>{
        res.status(500).json(err);
    })
});

//update dog info
router.put('/dogs/:id',(req,res)=>{
    const changes = req.body;
    Admins.updateDog(req.params.id,changes)
    .then(data =>{
        res.status(200).json(data);
    })
    .catch(err =>{
        res.status(500).json(err);
    })
});

//remove dog from kennel
router.delete('/dogs/:id',(req,res)=>{
    Admins.removeDog(req.params.id)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

//assign breed to dog
router.post('/breeds/assign',(req,res)=>{
    const {dog_id,breed_id} = req.body
    Admins.assignBreed(dog_id, breed_id)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

//add new breed
router.post('/breeds/:id',(req,res)=>{
    const dog_ID = req.params.id
    const breed = req.body
    Admins.addBreed(breed, dog_ID)
    .then(data => {
        res.status(201).json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

//delete breed
router.delete('/breeds/:id',(req,res)=> {
    const {dog_id, breed_id} = req.body
    Admins.removeBreed(dog_id, breed_id)
    .then(data => {
        res.status(201).json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

//get notifications
router.get('/notifications/:id',(req,res)=> {
    Admins.getNotifications(req.params.id)
    .then(data => {
        res.status(201).json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module .exports = router;