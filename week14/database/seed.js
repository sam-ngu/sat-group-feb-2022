




const { faker } = require("@faker-js/faker");
const User = require("../models/User");


async function seedUsers(num = 10) {

  for (let index = 0; index < num; index++) {
    const email = faker.internet.email();
    const password = faker.internet.password(8);

    await User.create({
      email,
      password,
    })
    
  }
}


async function seed() {
  
  // seed user
  await seedUsers(10);
  
  // seed post
  
  // seed comment
}






