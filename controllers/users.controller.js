const usersModel = require('../models/users.model');
module.exports = {
    getAllUsers: (req, res) => {
        usersModel.getAll((err, results) => {
            if(err) return res.status(500).json(err);
            res.status(200).json(results);
        });
    },
    getUserById: (req, res) => {
        usersModel.getById(req.params.id, (err, result) => {
            if(err) return res.status(500).json(err);
            res.status(200).json(result);
        });
    },
    addUser: (req, res) => {
        usersModel.add(req.body, (err, result) => {
            if(err) return res.status(500).json(err);
            res.status(201).json({msg: "User added", id: result.insertId});
        });
    },
    updateUser: (req, res) => {
        usersModel.update(req.params.id, req.body, (err, result) => {
            if(err) return res.status(500).json(err);
            res.status(200).json({msg: "User updated"});
        });
    },
    deleteUser: (req, res) => {
        usersModel.delete(req.params.id, (err, result) => {
            if(err) return res.status(500).json(err);
            res.status(200).json({msg: "User deleted"});
        });
    }
};