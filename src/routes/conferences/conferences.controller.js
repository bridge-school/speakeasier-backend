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

module.exports = {
  getConferencesController
}
