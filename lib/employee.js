//Constructor function to create object containg properties
class Employee {
    constructor (name,id,email,officeNumber,userName,school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.userName = userName;
        this.school = school;
        this.role = 'Employee';
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

module.exports = Employee;