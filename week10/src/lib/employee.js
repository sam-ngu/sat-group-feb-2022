
class Employee {
  constructor(id, email, name) {

    if(!id || !email || !name){
      throw new Error('Cannot instantiate without id name or email');
    }

    this.id = id;
    this.email = email;
    this.name = name;
  }

  getEmail() {
    return this.email;
  }
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }

  getRole(){
    return 'Employee';
  }
}

module.exports = Employee;
