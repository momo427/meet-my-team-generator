const employee = require('./employee');

class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);

        this.role = 'intern'
    }
    getSchool(){
        return this.school;

    }
    getRole(){
        return this.role;
    }
};

module.exports = intern;