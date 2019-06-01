const db = require('../../db');

const getConferencesController = (req, res) => {
	db.collection("conferences")
	        .get()
	        .then(snapshot => {
	            res.json({
	                data: snapshot.docs.map(doc => {
	                    return {
	                        id: doc.id,
	                        ...doc.data()
	                    };
	                })
	            });
	        })
	        .catch(error => {
	            res.json({ error });
	        });
}

const postConferenceController = (req, res) => {
	console.log("=====================REQ BODY====================")
	console.log(req.body)
	db.collection("conferences")
		.add({
			...req.body
		})
		.then(docRef => {
			console.log(docRef)
			res.status(201)
				.json({
					id: docRef.id,
					message: "Conference successfully created"
				});
		})
		.catch(error => {
			res.json({ error });
		});
};

module.exports = {
  getConferencesController,
	postConferenceController
}
