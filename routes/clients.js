const express = require ('express');
const router = express.Router();
const config = require('../config/database');

const Client = require('../models/client');

//Register
router.post('/newClient', (req, res, next) => {
	let newClient = new Client({
		name : req.body.name,
		email : req.body.email,
		contactName : req.body.contactName,
		phoneNumber : req.body.phoneNumber,
		state : req.body.state,
		curse : req.body.curse
	});


	Client.addClient(newClient, (err, client) => {
	    if(err){
	      res.json({success : false, msg : "Fallo al agregar cliente"});
	    }
	    else {
	      res.json({success : true, msg : "Cliente agregado"});
	    }
	});
});

//Search
router.get('/searchClient', (req, res, next) =>{
	Client.getClientByName(name, (err,client)=>{
		if(err) console.log(err);
		if(!client){
			return res.json({success : false, msg : "Cliente no encontrado"});
		}
		else{
			return res.json({
				success : true,
				client : {
					name : client.name,
					email : client.email,
					contactName : client.contactName,
					phoneNumber : client.phoneNumber,
					curse : client.curse,
					state : client.state
				}
			});
		}
	});
});

router.get('/getClients', (req, res, next) =>{
	Client.getClients((err, client)=>{
		if(err) console.log(err);
		else{
			return res.json({
				success: true,
				client
			});
		}
		});
	});


module.exports =router;
