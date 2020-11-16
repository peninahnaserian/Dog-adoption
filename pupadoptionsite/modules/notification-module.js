const db = require('../data/dbConfig.js');

module.exports={
    add,
    findById
};

//add notification
async function add(notification) {
    const [id] = await db('notifications').insert(notification);
    return findById(id);
}

//find notification by id
function findById(id) {
    return db('notifications').where({id})
}

//get notifications of admin
function findByAdmin(id){
    return db('notifications').where({"admin_id":id})
  }

  //get all notifications
function find(){
    return db('notifications')
  }