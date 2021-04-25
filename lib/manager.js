const employee = require('./employee');


class manager extends employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email,officeNumber);

        this.role = 'manager'
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return this.role;
    }
};

module.exports = manager;