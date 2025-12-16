let userPermissions = [
    { id: 1, userId: 1, permissionId: 1 } 
];

module.exports = {
    getAll: () => userPermissions,
    getById: (id) => userPermissions.find(up => up.id == id),
    create: (newItem) => {
        const id = userPermissions.length + 1;
        const item = { id, ...newItem };
        userPermissions.push(item);
        return item;
    },
    update: (id, updatedData) => {
        const index = userPermissions.findIndex(up => up.id == id);
        if (index !== -1) {
            userPermissions[index] = { ...userPermissions[index], ...updatedData };
            return userPermissions[index];
        }
        return null;
    },
    delete: (id) => {
        const index = userPermissions.findIndex(up => up.id == id);
        if (index !== -1) {
            const deleted = userPermissions.splice(index, 1);
            return deleted[0];
        }
        return null;
    }
};