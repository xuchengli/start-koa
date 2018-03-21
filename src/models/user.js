class User {
    constructor() {
        this.data = [];
    }
    list() {
        return new Promise((resolve, reject) => {
            if (this.data.length) {
                setTimeout(() => { resolve(this.data); }, 5000);
            } else {
                reject(404);
            }
        });
    }
}
module.exports = User;
