

// heading

const Employee = require("../../src/lib/employee");


// sub


// content


describe('Testing Employee Class', () => { 
  
  describe('Employee class contains the attribute and methods needed', () => { 

    const defaultId = 12;
    const defaultEmail = 'sam@sam.com';
    const defaultName = 'name';


    // happy path

    test('if we can instantiate an object from the class ', () => { 

      const employee = new Employee(defaultId,defaultEmail, defaultName);

      expect(employee).toBeInstanceOf(Employee);
      expect(employee).toBeInstanceOf(Object);

    });

    test('should fail if didnt pass in exactly 3 args', () => { 


      expect(() => new Employee()).toThrow(Error);
      expect(() => new Employee(defaultId)).toThrow(Error);
      expect(() => new Employee(defaultId, defaultName)).toThrow(Error);

      expect(new Employee(defaultId, defaultEmail, defaultName)).toBeInstanceOf(Employee);



     })

   

    test('if employee has email ', () => {
      // set up the env
      // define source of truth
      // execute the code
      // compare the result


      expect(true).toBe(false);
    });

    test('should have name', () => { 
      expect(true).toBe(false);
    });

    test('should have id', () => { 
      
      expect(true).toBe(false);
     })
   

     test('getName() should return name', () => { 
      expect(true).toBe(false);
       
      })

      test("getId() should return id", () => {
        expect(true).toBe(false);
      });

      test("getEmail() should return Email", () => {
        expect(true).toBe(false);
      });

    
    test('should break if I didnt pass in any argument to the contructor', () => { 
      expect(true).toBe(false);

    });

    test('should only receive a valid email', () => { 
      expect(true).toBe(false);
    });




   })


})





