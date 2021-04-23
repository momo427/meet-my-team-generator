const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, userName) {
        super(name, id, email, userName);

        this.role = 'Engineer'
    }
    getUsername(){
        return this.userName
    }
    getRole(){
        return this.role
    }
};

module.exports = Engineer;