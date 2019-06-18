const db = require('../../db');

const getConferences = (req, res) => {
  db.collection('conferences')
    .orderBy('createdAt', 'asc')
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
};

const getConferenceDetails = (req, res) => {
  db.collection('conferences').doc(req.params.id)
    .get()
    .then(doc => {
      res.json({
        id: doc.id,
        ...doc.data()
      });
    })
    .catch(error => {
      res.json({ error });
    });
};

const postConference = (req, res) => {
  db.collection('conferences')
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

const deleteConference = (req, res) => {
  db.collection('conferences').doc(req.body.id)
    .delete()
    .then(() => {
      res.status(200)
        .json(`${req.body.id} deleted!`);
    })
    .catch(error => {
      res.json({ error });
    });
};

module.exports = {
  getConferences,
  getConferenceDetails,
  postConference,
  deleteConference
};
