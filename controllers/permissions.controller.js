const model = require('../models/permissions.model');

module.exports = {
    getAllPermissions: (req, res) => {
        res.json(model.getAll());
    },
    getPermissionById: (req, res) => {
        const perm = model.getById(req.params.id);
        if (perm) res.json(perm);
        else res.status(404).json({ message: "Permission not found" });
    },
    createPermission: (req, res) => {
        const newPerm = model.create(req.body);
        res.status(201).json(newPerm);
    },
    updatePermission: (req, res) => {
        const updated = model.update(req.params.id, req.body);
        if (updated) res.json(updated);
        else res.status(404).json({ message: "Permission not found" });
    },
    deletePermission: (req, res) => {
        const deleted = model.delete(req.params.id);
        if (deleted) res.json({ message: "Deleted successfully", deleted });
        else res.status(404).json({ message: "Permission not found" });
    }
};