const express = require ('express');

//same as const app = express();
const server = express();

const visitorRoutes = require('./routes/visitors-routes');
const adminRoutes = require('./routes/admin-routes');

//telling our backend to be expecting json and it will only parse json requests
server.use(express.json());

server.use('api/visitors',visitorRoutes);
server.use('api/admin',adminRoutes);

server.get('/',(req,res)=>{
    res.send("Woof Woof! We out the Pound!")
}); 


// defining our port variable
//process.env.port is used for production when we use a hosting service it avoids refactoring later on
const port =  5000;
//instruct our server to listen for connections on that port
server.listen(port,()=> {
    console.log(`Hey there am running on port ${port}`);

});


