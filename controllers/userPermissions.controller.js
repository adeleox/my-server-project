const model = require('../models/userPermissions.model');

module.exports = {
    getAll: (req, res) => {
        res.json(model.getAll());
    },
    getById: (req, res) => {
        const item = model.getById(req.params.id);
        if (item) res.json(item);
        else res.status(404).json({ message: "Not found" });
    },
    create: (req, res) => {
        const newItem = model.create(req.body);
        res.status(201).json(newItem);
    },
    update: (req, res) => {
        const updated = model.update(req.params.id, req.body);
        if (updated) res.json(updated);
        else res.status(404).json({ message: "Not found" });
    },
    delete: (req, res) => {
        const deleted = model.delete(req.params.id);
        if (deleted) res.json({ message: "Deleted successfully", deleted });
        else res.status(404).json({ message: "Not found" });
    }
};