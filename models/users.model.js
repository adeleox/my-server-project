let users = [
    { id: 1, name: "Adele", role: "admin" },
    { id: 2, name: "Moshe", role: "user" },
    { id: 3, name: "John", role: "user" },
    { id: 4, name: "Sara", role: "user" },
    { id: 5, name: "David", role: "admin" },
    { id: 6, name: "Nina", role: "user" }
];

module.exports = {
    getAll: () => users,
    getById: (id) => users.find(u => u.id == id),
    create: (newUser) => {
        const id = users.length + 1;
        const user = { id, ...newUser };
        users.push(user);
        return user;
    },
    update: (id, updatedData) => {
        const index = users.findIndex(u => u.id == id);
        if (index !== -1) {
            users[index] = { ...users[index], ...updatedData };
            return users[index];
        }
        return null;
    },
    delete: (id) => {
        const index = users.findIndex(u => u.id == id);
        if (index !== -1) {
            const deleted = users.splice(index, 1);
            return deleted[0];
        }
        return null;
    }
};