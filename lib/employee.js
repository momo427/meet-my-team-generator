//Constructor function to create object containg properties
class employee {
    constructor (name,id,email,officenumber,username,school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'employee';
        this.officenumber = officenumber;
        this.username = username;
        this.school = school;
    
    
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