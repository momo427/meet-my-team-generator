const employee = require('./employee')

class engineer extends employee {
    constructor(name, id, email, username) {
        super(name, id, email);

        this.role = 'engineer'
        this.username = username
    }
    getUsername(){
        return this.username
    }
    getRole(){
        return this.role
    }
};

module.exports = engineer;