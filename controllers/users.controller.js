const model = require('../models/users.model');

module.exports = {
    getAllUsers: (req, res) => {
        res.json(model.getAll());
    },
    getUserById: (req, res) => {
        const user = model.getById(req.params.id);
        if (user) res.json(user);
        else res.status(404).json({ message: "User not found" });
    },
    createUser: (req, res) => {
        const newUser = model.create(req.body);
        res.status(201).json(newUser);
    },
    updateUser: (req, res) => {
        const updated = model.update(req.params.id, req.body);
        if (updated) res.json(updated);
        else res.status(404).json({ message: "User not found" });
    },
    deleteUser: (req, res) => {
        const deleted = model.delete(req.params.id);
        if (deleted) res.json({ message: "Deleted successfully", deleted });
        else res.status(404).json({ message: "User not found" });
    }
};