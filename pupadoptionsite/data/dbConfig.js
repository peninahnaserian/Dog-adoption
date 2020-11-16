const knex = require ('knex');
const config = require('../knexfile');

const dbEnv =process.env.DB_ENV || 'development';

module.exports = knex(config[dbEnv]);

//this code directs our project to the type of db env we want to use based on our knexfile.js.Currently we 
//should only have our dvlpt env wired , so everything should rely on our sqlite db.
//our module.exports object is where we'll define the specific functions we want to export from this file.that is all the commanalities we can 
//ensure each module file will share.