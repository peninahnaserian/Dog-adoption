const db = require('../data/dbConfig.js');
const Dogs = require('../modules/dogs-module');

module.exports={
    findBreeds
}

//get all breeds
async function findBreeds(id){
   const middle = await db('dog_breeds').where({id}).first();
   const dogs = await Promise.all (
       middle.map(async(dog)=> {
           const pup = await Dogs.findById(dog.dog_id)
           return pup
       })
   )
   const {name} = await db('breeds').where({id}).first()
   return {breed: name, dogs}
}