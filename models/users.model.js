const db = require('../db');
module.exports = {
    getAll: (cb) => db.query("SELECT * FROM users", cb),
    getById: (id, cb) => db.query("SELECT * FROM users WHERE id=?", [id], cb),
    add: (u, cb) => db.query("INSERT INTO users (name, email, password) VALUES (?,?,?)", [u.name, u.email, u.password], cb),
    update: (id, u, cb) => db.query("UPDATE users SET name=?, email=? WHERE id=?", [u.name, u.email, id], cb),
    delete: (id, cb) => db.query("DELETE FROM users WHERE id=?", [id], cb)
};