const permsModel = require('../models/permissions.model');
module.exports = {
    getAllPerms: (req, res) => {
        permsModel.getAll((err, results) => {
            if(err) return res.status(500).json(err);
            res.status(200).json(results);
        });
    },
    getPermById: (req, res) => {
        permsModel.getById(req.params.id, (err, result) => {
            if(err) return res.status(500).json(err);
            res.status(200).json(result);
        });
    },
    addPerm: (req, res) => {
        permsModel.add(req.body, (err, result) => {
            if(err) return res.status(500).json(err);
            res.status(201).json({msg: "Permission created", id: result.insertId});
        });
    },
    updatePerm: (req, res) => {
        permsModel.update(req.params.id, req.body, (err, result) => {
            if(err) return res.status(500).json(err);
            res.status(200).json({msg: "Permission updated"});
        });
    },
    deletePerm: (req, res) => {
        permsModel.delete(req.params.id, (err, result) => {
            if(err) return res.status(500).json(err);
            res.status(200).json({msg: "Permission deleted"});
        });
    }
};