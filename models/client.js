const mongoose = require ('mongoose');
const autoIncrement = require('@ineentho/mongodb-autoincrement');
const config = require ('../config/database');

//Clients Schema
const clientSchema = mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	email : {
		type : String,
		required : true
	},
	rfc : {
		type : String,
		required : false
	},
	phoneNumbers : [{
		_id : false,
		phoneType : {
			type : String,
			required : false
		},
		number : {
			type : String,
			required : false
		},
		extentions : [{
			_id : false,
			extentionType:{
				type : String,
				required : false
			},
			extentionNumber:{
				type : String,
				required : false
			}

		}]
	}],
	address : {
		state : {
			type : String,
			required : true
		},
		city : {
			type : String,
			required : false
		},
		street : {
			type : String,
			required : false
		},
		outsideNumber : {
			type : String,
			required : false
		},
		insideNumber : {
			type : String,
			required : false
		}
	},
	orders : [{
		_id : false,
		orderID :{
			type : Number,
			required : false
	}
	}]
});

clientSchema.plugin(autoIncrement.mongoosePlugin);

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
