class UserModel {
    constructor() {
        this.data = [];
    }
    list() {
        return new Promise((resolve, reject) => {
            if (this.data.length) {
                setTimeout(() => resolve(this.data), 3000);
            } else {
                reject(404);
            }
        });
    }
    show(id) {
        return new Promise((resolve, reject) => {
            let user = this.data.find(d => d.id === id);
            if (user) {
                setTimeout(() => resolve(user), 2000);
            } else {
                reject(404);
            }
        });
    }
}
module.exports = UserModel;
