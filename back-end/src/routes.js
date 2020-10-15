const express = require('express');
const NetworkController = require('../controllers/NetworkController');
const routes = express.Router();

const networkController = new NetworkController();

routes.post('/', networkController.getNetWorkData);

module.exports = routes;
