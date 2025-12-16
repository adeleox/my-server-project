let permissions = [
    { id: 1, name: "read_files" },
    { id: 2, name: "write_files" }
];

module.exports = {
    getAll: () => permissions,
    getById: (id) => permissions.find(p => p.id == id),
    create: (newPerm) => {
        const id = permissions.length + 1;
        const permission = { id, ...newPerm };
        permissions.push(permission);
        return permission;
    },
    update: (id, updatedData) => {
        const index = permissions.findIndex(p => p.id == id);
        if (index !== -1) {
            permissions[index] = { ...permissions[index], ...updatedData };
            return permissions[index];
        }
        return null;
    },
    delete: (id) => {
        const index = permissions.findIndex(p => p.id == id);
        if (index !== -1) {
            const deleted = permissions.splice(index, 1);
            return deleted[0];
        }
        return null;
    }
};