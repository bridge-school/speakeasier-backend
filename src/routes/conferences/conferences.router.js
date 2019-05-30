const express = require('express');

const { getConferencesController } = require("./conferences.controller");

const router = express.Router();

router.get("", getConferencesController);

module.exports = {
  conferencesRouter: router
}
