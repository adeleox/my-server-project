const express = require('express');
const router = express.Router();
const controller = require('../controllers/permissions.controller');
router.get('/', controller.getAllPerms);
router.get('/:id', controller.getPermById);
router.post('/', controller.addPerm);
router.put('/:id', controller.updatePerm);
router.delete('/:id', controller.deletePerm);
module.exports = router;