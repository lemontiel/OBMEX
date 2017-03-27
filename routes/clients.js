const express = require ('express');
const router = express.Router();
const config = require('../config/database');

const Client = require('../models/client');
//Register
router.post('/newClient', (req, res, next) => {
	let newClient = new Client({
		name : req.body.name,
		email : req.body.email,
		rfc : req.body.rfc,
		phoneNumbers : req.body.phoneNumbers,
		address : req.body.address,
		orders : req.body.orders
	});


	Client.addClient(newClient, (err, client) => {
	    if(err){
	      res.json({success : false, msg : "Fallo al agregar cliente", err});
	    }
	    else {
	      res.json({success : true, msg : "Cliente agregado"});
	    }
	});
});

//Search
router.get('/searchClient', (req, res, next) =>{
	const name = req.query.name;

	console.log(req.query.getOrders);
	Client.getClientByName(name, (err,client)=>{
		if(err) console.log(err);
		if(!client){
			return res.json({success : false, msg : "Cliente no encontrado"});
		}
		else{
			return res.json({
				success : true,
				client
			});
		}
	});
});

router.get('/getClients', (req, res, next) =>{
	Client.getClients((err, client)=>{
		if(err) console.log(err);
		else{
				return res.json({
					success : true,
					client
				});
			}
		});
	});

	router.get('/getClientById',  (req, res, next) =>{
		id = req.query.id;

		Client.getClientById(id, (err,client) =>{
			if(err) console.error(err);
			if(!client) {
				return res.json({
					success : false,
					msg : "client id not found",
				});
			}
			else if (req.query.getOrders == "true") {
				return res.json({
					success : true,
						orders : client.orders

				});
				}
			else{
				console.log(client);
				return res.json({
					success: true,
					client : [{
						name : client.name,
						rfc : client.rfc,
						phoneNumbers : client.phoneNumbers,
						address : client.address
					}]
				});
			}
		});
	});


module.exports = router;
