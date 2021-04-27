const employee = require('./employee')

class engineer extends employee {
    constructor(name, id, email, username) {
        super(name, id, email);

        this.role = 'engineer'
        this.username = username
    }
    getUsername(){
        console.log(this.username)
        return this.username
    }
    getRole(){
        return this.role
    }
};

module.exports = engineer;