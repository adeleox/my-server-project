const express = require('express');
const router = express.Router();
const controller = require('../controllers/permissions.controller');

router.get('/', controller.getAllPermissions);
router.get('/:id', controller.getPermissionById);
router.post('/', controller.createPermission);
router.put('/:id', controller.updatePermission);
router.delete('/:id', controller.deletePermission);

module.exports = router;