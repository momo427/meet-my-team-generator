//Constructor function to create object containg properties
class employee {
    constructor (name,id,email,officeNumber,username,school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'employee';
        this.school = school;
        this.username = username;
        this.officeNumber = officeNumber;
    
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
}

module.exports = employee;