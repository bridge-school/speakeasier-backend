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
	db.collection("conferences")
		.add(req.body)
		.then(docRef => docRef.get())
		.then(doc => {
			res.status(201)
				.json({
					id: doc.id,
					...doc.data()
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
