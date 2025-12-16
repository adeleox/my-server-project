const express = require('express');
const router = express.Router();
const controller = require('../controllers/users.controller');

router.get('/', controller.getAllUsers);       // READ ALL
router.get('/:id', controller.getUserById);    // READ ONE
router.post('/', controller.createUser);       // CREATE
router.put('/:id', controller.updateUser);     // UPDATE
router.delete('/:id', controller.deleteUser);  // DELETE

module.exports = router;