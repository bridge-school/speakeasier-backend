const express = require('express');

const conferences = require('./conferences.controller');

const router = express.Router();

router.get('/', conferences.getConferences);
router.get('/:id', conferences.getConferenceDetails);
router.post('/', conferences.postConference);

module.exports = {
  conferencesRouter: router
};
