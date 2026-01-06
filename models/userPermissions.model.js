const db = require('../db');
module.exports = {
    getAll: (cb) => db.query("SELECT up.id, u.name, p.title FROM user_permissions up JOIN users u ON up.user_id=u.id JOIN permissions p ON up.permission_id=p.id", cb),
    getById: (id, cb) => db.query("SELECT * FROM user_permissions WHERE id=?", [id], cb),
    add: (up, cb) => db.query("INSERT INTO user_permissions (user_id, permission_id) VALUES (?,?)", [up.user_id, up.permission_id], cb),
    update: (id, up, cb) => db.query("UPDATE user_permissions SET permission_id=? WHERE id=?", [up.permission_id, id], cb),
    delete: (id, cb) => db.query("DELETE FROM user_permissions WHERE id=?", [id], cb)
};