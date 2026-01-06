const express = require('express');
const router = express.Router();
const controller = require('../controllers/userPermissions.controller');
router.get('/', controller.getAllUP);
router.get('/:id', controller.getUPById);
router.post('/', controller.addUP);
router.put('/:id', controller.updateUP);
router.delete('/:id', controller.deleteUP);
module.exports = router;