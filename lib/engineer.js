const employee = require('./employee')

class engineer extends employee {
    constructor(name, id, email, username) {
        super(name, id, email, username);

        this.role = 'engineer'
    }
    getUsername(){
        return this.userName
    }
    getRole(){
        return this.role
    }
};

module.exports = engineer;