const db = require('../db');
module.exports = {
    getAll: (cb) => db.query("SELECT * FROM permissions", cb),
    getById: (id, cb) => db.query("SELECT * FROM permissions WHERE id=?", [id], cb),
    add: (p, cb) => db.query("INSERT INTO permissions (title, description) VALUES (?,?)", [p.title, p.description], cb),
    update: (id, p, cb) => db.query("UPDATE permissions SET title=?, description=? WHERE id=?", [p.title, p.description, id], cb),
    delete: (id, cb) => db.query("DELETE FROM permissions WHERE id=?", [id], cb)
};