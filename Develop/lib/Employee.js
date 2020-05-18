class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.getName = function(){
            return this.name;
        },
        this.getId = function(){
            return this.id
        },
        this.getEmail = function(){
            return this.email;
        },
        this.getRole = function(){
            return "Employee";
        }

    }
}

module.exports = Employee;