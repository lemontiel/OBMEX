const mongoose = require ('mongoose');
const config = require ('../config/database');

//Clients Scheema
const clientSchema = mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	email : {
		type : String,
		required : false
	},
	contactName : {
		type : String,
		required : true
	},
	phoneNumber : {
		type : String,
		required : false
	},
	curse : {
		type : String,
		required : true
	},
	state : {
		type : String,
		required : true
	}
});

const Client = module.exports = mongoose.model('Client', clientSchema);

module.exports.getClientById = function(id, callback){
  Client.findById(id, callback);
}

module.exports.getClientByName = function (name, callback){
  const query = {name : name}
  Client.findOne(query, callback);
}
module.exports.getClients = function(callback){
	Client.find(callback);
}


module.exports.addClient = function(newClient, callback){
	newClient.save(callback);
}
