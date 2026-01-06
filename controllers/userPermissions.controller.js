const upModel = require('../models/userPermissions.model');
module.exports = {
    getAllUP: (req, res) => {
        upModel.getAll((err, results) => {
            if(err) return res.status(500).json(err);
            res.status(200).json(results);
        });
    },
    getUPById: (req, res) => {
        upModel.getById(req.params.id, (err, result) => {
            if(err) return res.status(500).json(err);
            res.status(200).json(result);
        });
    },
    addUP: (req, res) => {
        upModel.add(req.body, (err, result) => {
            if(err) return res.status(500).json(err);
            res.status(201).json({msg: "Connection created", id: result.insertId});
        });
    },
    updateUP: (req, res) => {
        upModel.update(req.params.id, req.body, (err, result) => {
            if(err) return res.status(500).json(err);
            res.status(200).json({msg: "Connection updated"});
        });
    },
    deleteUP: (req, res) => {
        upModel.delete(req.params.id, (err, result) => {
            if(err) return res.status(500).json(err);
            res.status(200).json({msg: "Connection deleted"});
        });
    }
};